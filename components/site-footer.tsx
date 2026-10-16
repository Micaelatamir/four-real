import Image from 'next/image'
import { Phone } from 'lucide-react'
import { fullAddress, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-secondary pb-24 text-secondary-foreground md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="" width={56} height={50} className="h-12 w-auto rounded-md" />
            <span className="font-display text-lg font-extrabold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
            Reliable heating and cooling for Orlando homes and businesses. Licensed &amp; insured. Free estimates.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Visit</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/80">{fullAddress}</p>
          <ul className="mt-3 flex flex-col gap-1 text-sm text-secondary-foreground/80">
            {site.hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Connect</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-secondary-foreground/80">
            <li>
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Instagram @nandocanelli
              </a>
            </li>
            <li>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-secondary-foreground/60 md:px-6">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-secondary/95 p-3 backdrop-blur md:hidden">
        <a
          href={site.phoneHref}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-bold text-accent-foreground"
        >
          <Phone className="size-5" aria-hidden="true" />
          Call Now — {site.phoneDisplay}
        </a>
      </div>
    </footer>
  )
}
