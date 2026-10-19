import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown, Mail } from 'lucide-react'
import { PageBand } from '@/components/PageBand'
import { Reveal } from '@/components/Reveal'
import { SiteFooter } from '@/components/SiteFooter'
import { SUPPORT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with the Ninja CMS app and adviser portal.',
  alternates: { canonical: '/support' },
  openGraph: { url: '/support' },
}

const link = 'font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand'

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'How do I get an account?',
    a: (
      <>
        Accounts are created by your organisation. Ask your practice or licensee administrator to invite you.
        You&apos;ll receive an email to set your password.
      </>
    ),
  },
  {
    q: 'I forgot my password.',
    a: (
      <>
        On the app&apos;s sign-in screen, tap <strong className="font-semibold text-ink">Forgot password?</strong> and
        we&apos;ll email you a link to set a new one.
      </>
    ),
  },
  {
    q: 'I belong to more than one organisation.',
    a: (
      <>
        After signing in, choose the organisation you want to work in. You can switch at any time in{' '}
        <strong className="font-semibold text-ink">Settings</strong>.
      </>
    ),
  },
  {
    q: 'How do I delete my account?',
    a: (
      <>
        In the app, go to <strong className="font-semibold text-ink">Settings → Delete account</strong>, or see{' '}
        <Link href="/privacy#delete-account" className={link}>
          Deleting your account
        </Link>{' '}
        in our privacy policy.
      </>
    ),
  },
  {
    q: 'How is my information protected?',
    a: (
      <>
        See our{' '}
        <Link href="/privacy" className={link}>
          privacy policy
        </Link>
        .
      </>
    ),
  },
]

const stagger = (i: number) => ({ '--i': i }) as React.CSSProperties

export default function SupportPage() {
  return (
    <>
      <PageBand current="support" title="Support">
        <p className="rise mt-4 max-w-[36rem] text-[1.0625rem] text-white/85 md:text-lg" style={stagger(1)}>
          We&apos;re here to help with the Ninja CMS app and adviser portal.
        </p>
      </PageBand>

      <main id="main" className="flex-1">
        <div className="relative z-10 mx-auto -mt-6 grid max-w-[1120px] gap-6 px-4 pb-20 md:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
          <Reveal className="lg:sticky lg:top-6 lg:self-start">
            <section
              aria-labelledby="contact-title"
              data-rise
              style={stagger(0)}
              className="rounded-[16px] border border-line bg-card p-6 shadow-[var(--shadow-lift)] md:p-8"
            >
              <div className="grid size-12 place-items-center rounded-[12px] bg-brand-soft text-brand">
                <Mail size={22} aria-hidden="true" />
              </div>
              <h2
                id="contact-title"
                className="mt-5 text-[1.5rem] leading-tight font-bold tracking-[-0.015em] text-navy"
              >
                Contact us
              </h2>
              <p className="mt-3 text-ink-soft">
                Email{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className={link}>
                  {SUPPORT_EMAIL}
                </a>
                . Include the email address you sign in with and what you were doing when the problem happened. We reply
                on Australian business days.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="mt-6 inline-flex items-center gap-2 rounded-[12px] bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-pressed"
              >
                <Mail size={18} aria-hidden="true" />
                Email support
              </a>
            </section>
          </Reveal>

          <section aria-labelledby="faq-title" className="lg:pt-6">
            <Reveal>
              <h2
                id="faq-title"
                data-rise
                style={stagger(0)}
                className="pt-4 text-[1.5rem] leading-tight font-bold tracking-[-0.015em] text-navy lg:pt-10"
              >
                Common questions
              </h2>
              <div className="mt-5 space-y-3">
                {faqs.map(({ q, a }, i) => (
                  <details
                    key={q}
                    data-rise
                    style={stagger(i + 1)}
                    className="group rounded-[16px] border border-line bg-card shadow-[var(--shadow-card)] transition-[border-color,box-shadow] duration-300 open:border-brand/25 open:shadow-[var(--shadow-lift)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[16px] px-5 py-4 font-semibold text-ink md:px-6 [&::-webkit-details-marker]:hidden">
                      {q}
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className="shrink-0 text-brand transition-transform duration-300 ease-[var(--ease-out-soft)] group-open:rotate-180"
                      />
                    </summary>
                    <div className="faq-body px-5 pb-5 text-ink-soft md:px-6">{a}</div>
                  </details>
                ))}
              </div>
            </Reveal>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
