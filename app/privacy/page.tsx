import type { Metadata } from 'next'
import type { Element, ElementContent, Root, Text } from 'hast'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PageBand } from '@/components/PageBand'
import { SiteFooter } from '@/components/SiteFooter'
import { getPolicy, PLACEHOLDER, sectionId } from '@/lib/policy'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'How Advice Ninja Pty Ltd handles personal information in the Ninja CMS app, adviser portal and website.',
  alternates: { canonical: '/privacy' },
  openGraph: { url: '/privacy' },
}

// Wraps any [TO CONFIRM …] left in the text in a <mark>, so a gap is obvious in a
// preview. Production builds refuse to run while one remains (see next.config.ts).
function rehypeMarkPlaceholders() {
  const walk = (node: Root | Element) => {
    node.children = node.children.flatMap((child): ElementContent[] => {
      if (child.type === 'element') {
        walk(child)
        return [child]
      }
      if (child.type !== 'text' || !child.value.includes('[TO CONFIRM')) return [child as ElementContent]
      return child.value.split(new RegExp(`(${PLACEHOLDER.source})`)).map((part): ElementContent => {
        if (!part.startsWith('[TO CONFIRM')) return { type: 'text', value: part } satisfies Text
        return {
          type: 'element',
          tagName: 'mark',
          properties: { className: ['placeholder'] },
          children: [{ type: 'text', value: part }],
        }
      })
    }) as Root['children'] & ElementContent[]
  }
  return (tree: Root) => walk(tree)
}

function textOf(children: React.ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(textOf).join('')
  return ''
}

const components: Components = {
  h2: ({ children }) => {
    const title = textOf(children)
    return (
      <h2 id={sectionId(title)} className="group">
        <a href={`#${sectionId(title)}`} className="no-underline">
          {children}
        </a>
      </h2>
    )
  },
  table: ({ children }) => (
    <div className="table-wrap">
      <table>{children}</table>
    </div>
  ),
  a: ({ href, children }) => {
    const external = href?.startsWith('http')
    return (
      <a href={href} {...(external ? { rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  },
}

export default function PrivacyPage() {
  const policy = getPolicy()

  return (
    <>
      <PageBand current="privacy" title={policy.title}>
        <p className="rise mt-4 text-white/80" style={{ '--i': 1 } as React.CSSProperties}>
          <span className="font-semibold text-white">Effective date:</span> {policy.effectiveDate}
        </p>
      </PageBand>

      <main id="main" className="flex-1">
        <div className="relative z-10 mx-auto -mt-6 grid max-w-[1120px] gap-8 px-4 pb-20 md:px-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-6 pt-12">
              <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-muted uppercase">On this page</p>
              <ol className="space-y-0.5 border-l border-line text-sm">
                {policy.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-ink-soft transition-colors hover:border-brand hover:text-brand"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="policy rounded-[16px] border border-line bg-card px-5 py-8 shadow-[var(--shadow-lift)] md:px-12 md:py-12">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeMarkPlaceholders]} components={components}>
              {policy.body}
            </ReactMarkdown>
          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
