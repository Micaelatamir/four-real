import { Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="px-4 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-primary px-8 py-12 text-primary-foreground md:flex-row md:items-center md:px-12">
        <div>
          <h2 id="cta-heading" className="font-display text-2xl font-extrabold tracking-tight text-balance md:text-4xl">
            AC acting up in the Florida heat?
          </h2>
          <p className="mt-2 text-lg text-primary-foreground/80">Don’t sweat it — call now and we’ll get you scheduled.</p>
        </div>
        <a
          href={site.phoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-4 text-lg font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
        >
          <Phone className="size-5" aria-hidden="true" />
          {site.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
