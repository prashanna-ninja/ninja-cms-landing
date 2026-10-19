import { Check } from 'lucide-react'

const orgs = ['Your licensee', 'Your practice']

function Bar({ className }: { className: string }) {
  return <div className={`rounded-full bg-line ${className}`} />
}

// A decorative sketch: the app header takes on an organisation's colour, and the
// organisation switcher. The header colour cycles slowly. Hidden from assistive tech.
export function BrandingVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[420px] select-none">
      <div className="relative overflow-hidden rounded-[24px] border border-line bg-card shadow-[var(--shadow-lift)]">
        <div className="org-hue px-6 pt-6 pb-12 text-white">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-[10px] bg-white/20 ring-1 ring-white/30">
              <div className="size-4 rotate-45 rounded-[3px] bg-white/90" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2.5 w-28 rounded-full bg-white/85" />
              <div className="h-2 w-16 rounded-full bg-white/45" />
            </div>
          </div>
        </div>

        <div className="relative -mt-6 rounded-t-[20px] bg-card px-6 pt-5 pb-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Organisation</p>
          <ul className="mt-3 space-y-2">
            {orgs.map((org, i) => (
              <li
                key={org}
                className={`flex items-center justify-between rounded-[12px] border px-4 py-3 ${
                  i === 0 ? 'border-brand/30 bg-brand-soft' : 'border-line'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`size-6 rounded-full ${i === 0 ? 'org-hue' : 'bg-line'}`} />
                  <span className={`text-sm font-medium ${i === 0 ? 'text-ink' : 'text-ink-soft'}`}>{org}</span>
                </span>
                {i === 0 && <Check size={18} className="text-brand" />}
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2">
            <Bar className="h-2 w-full" />
            <Bar className="h-2 w-4/5" />
          </div>
        </div>
      </div>

      {/* Colour chips floating at the edge */}
      <div className="absolute -top-4 -right-2 flex gap-1.5 rounded-full border border-line bg-card p-1.5 shadow-[var(--shadow-lift)] md:-right-6">
        {['#1A4DB3', '#0E7C86', '#2F6B3F', '#6B3FA0'].map((c) => (
          <span key={c} className="size-5 rounded-full" style={{ background: c }} />
        ))}
      </div>
    </div>
  )
}
