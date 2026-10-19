import type { ReactNode } from 'react'
import { SiteHeader } from './SiteHeader'

// The short blue band at the top of /support and /privacy.
export function PageBand({
  current,
  title,
  children,
}: {
  current: 'support' | 'privacy'
  title: string
  children?: ReactNode
}) {
  return (
    <div className="hero-surface text-white">
      <SiteHeader current={current} />
      <div className="mx-auto max-w-[1120px] px-4 pt-8 pb-16 md:px-6 md:pt-12 md:pb-20">
        <h1
          className="rise max-w-[20ch] text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.02em]"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          {title}
        </h1>
        {children}
      </div>
    </div>
  )
}
