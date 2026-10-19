import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
  variable: '--font-bricolage',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ninja CMS: your adviser portal, in your pocket',
    template: '%s · Ninja CMS',
  },
  description: "The Ninja CMS app brings your licensee's notices, client records, workflows and revenue to your phone.",
  applicationName: 'Ninja CMS',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Ninja CMS',
    locale: 'en_AU',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false, email: false, address: false },
}

export const viewport: Viewport = {
  themeColor: '#0B2D6F',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={bricolage.variable}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-[12px] bg-white px-4 py-2 font-medium text-brand focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
