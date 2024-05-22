import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'

import { performRequest } from '@/lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import { PostLayout } from '@/layouts/PostLayout'

export async function generateStaticParams() {
  const { posts } = await performRequest({ query: `{ posts: allPosts { slug } }` })

  return posts.map(({ slug }) => slug)
}

const PAGE_CONTENT_QUERY = `
  query PostBySlug($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    
    post(filter: {slug: {eq: $slug}}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      slug
      content {
        value
        blocks {
          __typename
          ...on ImageInternalBlockRecord {
            id
            image {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      updated: _publishedAt
      posted: _firstPublishedAt
    }

    posts: allPosts(orderBy: _firstPublishedAt_DESC, first: 2, filter: {slug: {neq: $slug}}) {
      title
      slug
      excerpt
      updated: _publishedAt
      posted: _firstPublishedAt
    }
  }

  ${responsiveImageFragment}
  ${metaTagsFragment}
`

function getPageRequest(slug) {
  const { isEnabled } = draftMode()

  return { query: PAGE_CONTENT_QUERY, includeDrafts: isEnabled, variables: { slug } }
}

export async function generateMetadata({ params }) {
  const { site, post } = await performRequest(getPageRequest(params.slug))

  return toNextMetadata([...site.favicon, ...post.seo])
}

export default async function Page({ params }) {
  const { isEnabled } = draftMode()

  const pageRequest = getPageRequest(params.slug)
  const { post } = await performRequest(pageRequest)

  console.log('params.slug', params.slug)
  console.log('pageRequest', pageRequest)
  console.log('post', post)

  // if (isEnabled) {
  //   return (
  //     <DraftPostPage
  //       subscription={{
  //         ...pageRequest,
  //         initialData: data,
  //         token: process.env.NEXT_DATOCMS_API_TOKEN,
  //         environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
  //       }}
  //     />
  //   );
  // }

  return <PostLayout post={post} />
}
