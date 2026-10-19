import Link from 'next/link'
import { LogoWhite } from './Logo'

type Current = 'home' | 'support' | 'privacy'

const links: { href: string; label: string; key: Current }[] = [
  { href: '/support', label: 'Support', key: 'support' },
  { href: '/privacy', label: 'Privacy', key: 'privacy' },
]

// Sits on a blue surface on every page.
export function SiteHeader({ current }: { current: Current }) {
  return (
    <header className="on-dark mx-auto flex max-w-[1120px] items-center justify-between px-4 py-5 md:px-6">
      <Link href="/" aria-label="Ninja CMS home" className="-m-1 p-1">
        <LogoWhite width={104} priority />
      </Link>
      <nav aria-label="Main">
        <ul className="flex items-center gap-1 text-[0.9375rem] font-medium">
          {links.map((link) => {
            const active = link.key === current
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
                    active ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
