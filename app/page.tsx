import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  ChartColumn,
  EyeOff,
  FileLock,
  KeyRound,
  Landmark,
  Lock,
  Megaphone,
  Palette,
  ShieldCheck,
  Smartphone,
  SquareKanban,
  UserPlus,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { BrandingVisual } from '@/components/BrandingVisual'
import { PhoneMock } from '@/components/PhoneMock'
import { Reveal } from '@/components/Reveal'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SUPPORT_EMAIL } from '@/lib/site'

const features: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Megaphone,
    title: 'Notices',
    text: "Read your licensee's announcements and updates as they're published.",
  },
  {
    icon: Users,
    title: 'Clients',
    text: 'Look up client details, the fact find, files and ongoing reviews, and keep them up to date.',
  },
  {
    icon: SquareKanban,
    title: 'Workflows',
    text: "See where every client is on your practice's boards, and move them on.",
  },
  {
    icon: ChartColumn,
    title: 'Revenue',
    text: 'Check your revenue by month and match accounts to clients.',
  },
]

const branding: { icon: LucideIcon; text: string }[] = [
  { icon: Palette, text: "Your organisation's colours and logo throughout the app" },
  { icon: ArrowLeftRight, text: 'Work with more than one organisation and switch any time in Settings' },
  { icon: ShieldCheck, text: 'You only ever see the organisations you belong to' },
]

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: UserPlus,
    title: 'Get an invitation',
    text: "Your practice or licensee administrator invites you. There's no public sign-up.",
  },
  {
    icon: KeyRound,
    title: 'Set your password',
    text: 'Follow the link in your invitation email to set a password, then sign in on your phone.',
  },
  {
    icon: Smartphone,
    title: 'Choose your organisation',
    text: 'Pick the organisation you want to work in, and your notices, clients, boards and revenue are there.',
  },
]

const security: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Lock,
    title: 'Encrypted connections',
    text: 'Everything between the app and Ninja CMS travels over HTTPS.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-based access',
    text: 'You see only what your role allows, in the organisations you belong to.',
  },
  {
    icon: KeyRound,
    title: 'Secure sign-in',
    text: "Your session is kept in your phone's secure storage, the iOS Keychain or Android Keystore. Signing out removes it.",
  },
  {
    icon: EyeOff,
    title: 'No tracking',
    text: 'The app has no analytics, advertising, crash-reporting or tracking software.',
  },
  {
    icon: FileLock,
    title: 'Only the files you choose',
    text: 'The app reads only files you pick yourself. It never accesses your photos, camera, contacts or location.',
  },
  {
    icon: Landmark,
    title: 'Australian privacy law',
    text: 'We comply with the Privacy Act 1988 and the Australian Privacy Principles.',
  },
]

const stagger = (i: number) => ({ '--i': i }) as React.CSSProperties

export default function Home() {
  return (
    <>
      <div className="hero-surface text-white">
        <SiteHeader current="home" />

        <div className="mx-auto grid max-w-[1120px] items-end gap-10 px-4 pt-10 pb-20 md:px-6 md:pt-16 md:pb-24 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pt-14 lg:pb-0">
          <div className="max-w-[34rem] lg:pb-36">
            <Image
              src="/brand/app-icon.png"
              alt=""
              width={88}
              height={88}
              priority
              sizes="88px"
              className="rise mb-8 size-[72px] rounded-[22%] shadow-[0_12px_32px_-8px_rgb(4_16_44/0.5)] ring-1 ring-white/15 md:size-[88px]"
              style={stagger(0)}
            />
            <p className="rise text-[0.8125rem] font-semibold tracking-[0.18em] text-white/70" style={stagger(1)}>
              NINJA CMS
            </p>
            <h1
              className="rise mt-3 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-balance"
              style={stagger(2)}
            >
              Your adviser portal, in your pocket.
            </h1>
            <p
              className="rise mt-5 max-w-[32rem] text-[1.0625rem] leading-relaxed text-white/85 md:text-lg"
              style={stagger(3)}
            >
              Notices, client records, workflows and revenue from your licensee&apos;s portal, on your phone.
            </p>
            <div className="rise mt-8 space-y-2" style={stagger(4)}>
              <p className="inline-flex items-center gap-2.5 rounded-full bg-white/10 py-1.5 pr-4 pl-3 font-medium ring-1 ring-white/20 ring-inset">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#9cc0ff] opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#9cc0ff]" />
                </span>
                <em className="not-italic">Coming soon to iPhone and Android.</em>
              </p>
              <p className="pl-1 text-sm text-white/65">
                Accounts are provided by your organisation. There&apos;s no public sign-up.
              </p>
            </div>
          </div>

          <div className="hidden justify-center lg:flex lg:-mb-28 lg:pr-6">
            <div className="rise" style={stagger(3)}>
              <PhoneMock />
            </div>
          </div>
        </div>
      </div>

      <main id="main" className="flex-1">
        {/* The white sheet rising over the hero, as on the app's sign-in screen */}
        <section
          aria-labelledby="features-title"
          className="relative z-10 -mt-6 rounded-t-[28px] bg-card shadow-[0_-1px_0_rgb(255_255_255/0.4)]"
        >
          <div className="mx-auto max-w-[1120px] px-4 pt-14 pb-16 md:px-6 md:pt-20 md:pb-24">
            <Reveal>
              <h2 id="features-title" className="sr-only">
                What&apos;s in the app
              </h2>

              <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
                {features.map(({ icon: Icon, title, text }, i) => (
                  <li
                    key={title}
                    data-rise
                    style={stagger(i + 1)}
                    className="group relative rounded-[16px] border border-line bg-card p-6 shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[var(--shadow-lift)] md:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid size-12 place-items-center rounded-[12px] bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon size={22} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <span
                        aria-hidden="true"
                        className="font-medium text-line tabular-nums transition-colors duration-300 group-hover:text-brand-light"
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[1.125rem] font-semibold text-ink">{title}</h3>
                    <p className="mt-1.5 text-ink-soft">{text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="branding-title" className="bg-page">
          <Reveal className="mx-auto grid max-w-[1120px] items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-20">
            <div>
              <p data-rise style={stagger(0)} className="text-[0.8125rem] font-semibold tracking-[0.18em] text-brand">
                MADE FOR YOUR ORGANISATION
              </p>
              <h2
                id="branding-title"
                data-rise
                style={stagger(1)}
                className="mt-3 text-[clamp(1.75rem,3.5vw,2.375rem)] leading-[1.1] font-bold tracking-[-0.02em] text-balance text-navy"
              >
                Your organisation&apos;s colours and logo, as soon as you sign in.
              </h2>
              <p data-rise style={stagger(2)} className="mt-4 max-w-[34rem] text-[1.0625rem] text-ink-soft">
                Ninja CMS takes on the look of the organisation you work with, so the app feels like part of your
                practice, not another tool to learn.
              </p>
              <ul className="mt-8 space-y-4">
                {branding.map(({ icon: Icon, text }, i) => (
                  <li key={text} data-rise style={stagger(i + 3)} className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-[12px] bg-brand-soft text-brand">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="pt-2 text-ink">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-rise style={stagger(2)} className="px-2 md:px-6">
              <BrandingVisual />
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="steps-title" className="bg-card">
          <Reveal className="mx-auto max-w-[1120px] px-4 py-16 md:px-6 md:py-24">
            <div className="max-w-[36rem]">
              <p data-rise style={stagger(0)} className="text-[0.8125rem] font-semibold tracking-[0.18em] text-brand">
                GETTING STARTED
              </p>
              <h2
                id="steps-title"
                data-rise
                style={stagger(1)}
                className="mt-3 text-[clamp(1.75rem,3.5vw,2.375rem)] leading-[1.1] font-bold tracking-[-0.02em] text-navy"
              >
                Up and running in three steps.
              </h2>
            </div>

            <div className="relative mt-12">
              <div
                aria-hidden="true"
                className="step-line absolute top-6 right-[16%] left-[16%] hidden h-px bg-[linear-gradient(90deg,var(--color-brand),var(--color-brand-light))] md:block"
              />
              <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
                {steps.map(({ icon: Icon, title, text }, i) => (
                  <li
                    key={title}
                    data-rise
                    style={stagger(i + 2)}
                    className="relative flex gap-5 md:flex-col md:items-center md:text-center"
                  >
                    <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-brand text-white shadow-[0_0_0_6px_var(--color-card),0_8px_20px_-6px_rgb(26_77_179/0.6)]">
                      <Icon size={20} aria-hidden="true" />
                      <span className="absolute -top-1 -right-1 grid size-5 place-items-center rounded-full bg-navy text-[0.6875rem] font-bold ring-2 ring-card">
                        {i + 1}
                      </span>
                    </span>
                    <div className="md:mt-5">
                      <h3 className="text-[1.125rem] font-semibold text-ink">{title}</h3>
                      <p className="mt-1.5 max-w-[22rem] text-ink-soft">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="security-title" className="navy-surface on-dark text-white">
          <Reveal className="mx-auto max-w-[1120px] px-4 py-16 md:px-6 md:py-24">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div className="max-w-[38rem]">
                <p
                  data-rise
                  style={stagger(0)}
                  className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[#9cc0ff]"
                >
                  PRIVACY AND SECURITY
                </p>
                <h2
                  id="security-title"
                  data-rise
                  style={stagger(1)}
                  className="mt-3 text-[clamp(1.75rem,3.5vw,2.375rem)] leading-[1.1] font-bold tracking-[-0.02em] text-balance"
                >
                  Client information is sensitive. The app treats it that way.
                </h2>
              </div>
              <Link
                href="/privacy"
                data-rise
                style={stagger(2)}
                className="group inline-flex items-center gap-2 self-start font-semibold text-white/90 transition-colors hover:text-white md:self-auto"
              >
                Read our privacy policy
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
                />
              </Link>
            </div>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-[16px] bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {security.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  data-rise
                  style={stagger(i + 2)}
                  className="group bg-navy/80 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-[#0f3580] md:p-7"
                >
                  <Icon
                    size={22}
                    aria-hidden="true"
                    className="text-[#9cc0ff] transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:-translate-y-0.5"
                  />
                  <h3 className="mt-4 text-[1.0625rem] font-semibold">{title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/75">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section aria-labelledby="who-title" className="bg-brand-soft">
          <Reveal className="mx-auto grid max-w-[1120px] gap-4 px-4 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:px-6 md:py-20">
            <h2
              id="who-title"
              data-rise
              style={stagger(0)}
              className="text-[1.75rem] leading-tight font-bold tracking-[-0.015em] text-navy"
            >
              Built for advice practices
            </h2>
            <p data-rise style={stagger(1)} className="max-w-[40rem] text-[1.0625rem] text-ink-soft md:pt-1">
              Ninja CMS is used by Australian financial services licensees and the advisers and staff who work with
              them. Each organisation manages its own users and data.
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="contact-title">
          <Reveal className="mx-auto max-w-[1120px] px-4 py-16 md:px-6 md:py-24">
            <div
              data-rise
              style={stagger(0)}
              className="flex flex-col gap-6 rounded-[16px] border border-line bg-card p-6 shadow-[var(--shadow-card)] md:flex-row md:items-center md:justify-between md:p-10"
            >
              <div className="max-w-[34rem]">
                <h2 id="contact-title" className="text-[1.75rem] leading-tight font-bold tracking-[-0.015em] text-navy">
                  Questions?
                </h2>
                <p className="mt-2 text-ink-soft">
                  Email us at{' '}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="font-semibold text-brand underline-offset-4 hover:underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                  . For help with your account, you can also contact your organisation&apos;s administrator.
                </p>
              </div>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-[12px] bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-pressed md:self-auto"
              >
                Email support
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
