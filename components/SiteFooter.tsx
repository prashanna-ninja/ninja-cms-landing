import Link from 'next/link'
import { LEGAL_ENTITY, SUPPORT_EMAIL } from '@/lib/site'
import { LogoWhite } from './Logo'

const links = [
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/privacy#delete-account', label: 'Delete your account' },
]

export function SiteFooter() {
  return (
    <footer className="on-dark bg-navy text-white">
      <div className="mx-auto max-w-[1120px] px-4 pt-14 pb-10 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <Link href="/" aria-label="Ninja CMS home" className="inline-block">
              <LogoWhite width={112} />
            </Link>
            <p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/85 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-white/12 pt-6 text-sm text-white/65">
          © {new Date().getFullYear()} {LEGAL_ENTITY}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
