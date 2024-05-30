import Container from './Container'
import IconRSS from 'media/icon-rss@2x.png'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'
import BarBrand from './BarBrand'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* footer - top */}
      <div className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:gap-6">
            {/* footer - top - logo */}
            <h3>
              <Link href="/" className="inline-block">
                <Logo className="h-auto w-[82px]" />
              </Link>
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:auto-cols-auto sm:grid-flow-col sm:grid-cols-none sm:gap-6">
              {/* footer - top - site description */}
              <div className="sm:col-span-2 md:col-auto">
                <div className="max-w-[344px]">
                  <p className="text-sm leading-normal">
                    Incident & Alert Communications is efficitur ornare euismod. In at viverra
                    turpis. Morbi cursus sapien nisi. Sed vitae rutrum massa, vitae semper est. Nunc
                    suscipit, magna sed luctus tempus.
                  </p>
                </div>
              </div>

              {/* footer - top - links */}
              <div className="flow-root md:col-auto">
                <div className='sm:-mt-2 flex max-w-[344px] flex-col items-start'>
                  <Button href="https://reece.workplace.com/" styleVariant='text' className='!font-medium'>Reece Workplace</Button>
                  <Button href="https://teams.microsoft.com/l/app/d2c6f111-ffad-42a0-b65e-ee00425598aa" styleVariant='text' className='!font-medium'>Reece Information Centre</Button>
                  <Button href="mailto:People.Services@reece.com.au" styleVariant='text' className='!font-medium'>Contact People Service</Button>
                </div>
              </div>

              {/* footer - top - buttons */}
              <div className="sm:row-start-2 sm:justify-self-end md:row-auto">
                {/* <Link
                  href="/feeds"
                  className="inline-flex items-center space-x-2 rounded-full border border-[#D9D9D9] p-1.5 pr-4 text-sm font-medium tracking-wide sm:space-x-2.5 sm:p-2 sm:pr-5"
                >

                </Link> */}
                <Button href="/feeds" stylePill className='!font-medium'>
                  <Image
                    src={IconRSS}
                    alt="RSS icon"
                    className="size-[28px] md:size-[30px] lg:size-[32px]"
                  />
                  <span>Subscribe to web feed</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* footer -  bottom */}
      <div className="border-t border-[#D9D9D9] py-5 sm:py-6">
        <Container>
          <div className="flex flex-row justify-between">
            <div className="text-xs">Copyright &copy; 2024, Reece Ltd.</div>

            <div className="flow-root">
              <div className="-m-1 flex flex-row space-x-1.5">
                <Link
                  href="//www.reece.com.au/privacy"
                  className="p-1 text-xs hover:underline"
                  target="_blank"
                  title="Reece Privacy Policy (opens in new tab)"
                >
                  Privacy
                </Link>
                <Link
                  href="//help.reece.com.au"
                  className="p-1 text-xs hover:underline"
                  target="_blank"
                  title="Reece Help Centre (opens in new tab)"
                >
                  Help
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* footer - brand bar */}
      <BarBrand />
    </footer>
  )
}
