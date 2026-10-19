import Link from 'next/link'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <>
      <div className="hero-surface flex flex-1 flex-col text-white">
        <SiteHeader current="home" />
        <main
          id="main"
          className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col justify-center px-4 py-20 md:px-6"
        >
          <p
            className="rise text-sm font-semibold tracking-[0.16em] text-white/70"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            404
          </p>
          <h1
            className="rise mt-3 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em]"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            This page isn’t here.
          </h1>
          <p className="rise mt-4 max-w-[40ch] text-lg text-white/80" style={{ '--i': 2 } as React.CSSProperties}>
            The link may be old, or the address may have a typo.
          </p>
          <div className="rise mt-8" style={{ '--i': 3 } as React.CSSProperties}>
            <Link
              href="/"
              className="inline-flex items-center rounded-[12px] bg-white px-5 py-3 font-semibold text-brand transition-colors hover:bg-brand-soft"
            >
              Go to the home page
            </Link>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  )
}
