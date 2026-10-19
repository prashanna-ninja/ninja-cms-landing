import { ChartColumn, SquareKanban, Megaphone, Users } from 'lucide-react'
import { LogoWhite } from './Logo'

const tabs = [
  { icon: Megaphone, label: 'Notices' },
  { icon: Users, label: 'Clients' },
  { icon: SquareKanban, label: 'Workflows' },
  { icon: ChartColumn, label: 'Revenue' },
]

function Bar({ className }: { className: string }) {
  return <div className={`skeleton rounded-full bg-line ${className}`} />
}

// A decorative, content-free sketch of the app. Hidden from assistive tech.
export function PhoneMock() {
  return (
    <div aria-hidden="true" className="phone-float relative w-[272px] -rotate-[4deg] select-none">
      <div className="rounded-[44px] bg-[#071d4a] p-[10px] shadow-[0_40px_80px_-20px_rgb(4_16_44/0.65),inset_0_0_0_1px_rgb(255_255_255/0.12)]">
        <div className="relative overflow-hidden rounded-[34px] bg-page">
          {/* Status bar and header */}
          <div className="bg-[linear-gradient(135deg,#1A4DB3_0%,#0B2D6F_100%)] px-5 pt-3 pb-10">
            <div className="mx-auto mb-4 h-[22px] w-[86px] rounded-full bg-[#071d4a]" />
            <LogoWhite width={64} />
            <div className="mt-4 h-2.5 w-28 rounded-full bg-white/70" />
            <div className="mt-2 h-2 w-40 rounded-full bg-white/35" />
          </div>

          {/* The white sheet that overlaps the header, like the sign-in screen */}
          <div className="relative -mt-6 rounded-t-[22px] bg-card px-4 pt-5 pb-3">
            <div className="rounded-[14px] border border-line p-3">
              <div className="flex items-center gap-2.5">
                <div className="grid size-8 place-items-center rounded-[9px] bg-brand-soft text-brand">
                  <Megaphone size={16} strokeWidth={2.2} />
                </div>
                <div className="flex-1 space-y-1.5">
                  <Bar className="h-2 w-3/4" />
                  <Bar className="h-1.5 w-1/2" />
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                <Bar className="h-1.5 w-full" />
                <Bar className="h-1.5 w-11/12" />
                <Bar className="h-1.5 w-2/3" />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {[0.8, 0.6, 0.7].map((w, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="size-7 rounded-full bg-brand-soft" />
                  <div className="flex-1 space-y-1.5">
                    <Bar className="h-2" />
                    <div className="h-1.5 rounded-full bg-line/70" style={{ width: `${w * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[14px] bg-page p-3">
              <div className="flex h-14 items-end gap-1.5">
                {[38, 52, 44, 66, 58, 80, 72].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-[4px] ${i === 5 ? 'bg-brand' : 'bg-brand-light/35'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Tab bar */}
            <div className="mt-5 flex justify-between border-t border-line px-1 pt-3">
              {tabs.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-1 ${i === 0 ? 'text-brand' : 'text-muted'}`}
                >
                  <Icon size={17} strokeWidth={2.1} />
                  <span className="text-[9px] font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
