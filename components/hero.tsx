import Image from 'next/image'
import { ArrowRight, BadgeCheck, Phone, ShieldCheck, Clock } from 'lucide-react'
import { site } from '@/lib/site'

const highlights = [
  { icon: BadgeCheck, label: 'Free estimates' },
  { icon: ShieldCheck, label: 'Licensed & insured' },
  { icon: Clock, label: 'Open Mon – Sat' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
      <Image
        src="/images/hero.png"
        alt="4REAL technician servicing an outdoor air conditioning unit at a Florida home"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/30" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-32">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Orlando, FL HVAC Specialists
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-6xl">
            Stay cool. Breathe easy. <span className="text-accent">Keep it 4REAL.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/80 text-pretty">
            Honest, reliable heating and air conditioning service for Central Florida homes and businesses. Repairs,
            new installations, maintenance and ductwork — done right the first time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Get a Free Estimate
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-secondary-foreground/90">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
