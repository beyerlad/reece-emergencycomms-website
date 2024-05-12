import PostList from "@/components/PostList";
import Container from "../components/container";
import Panel from "../components/panel";

export function PostListLayout({ posts, initialDisplayPosts = [], pagination}) {
  return (
    <Container>
      <Panel><PostList posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} /></Panel>
    </Container>
  );
}