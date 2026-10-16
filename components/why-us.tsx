import Image from 'next/image'
import { Check } from 'lucide-react'
import { site } from '@/lib/site'

const reasons = [
  'Licensed & insured technicians',
  'Free, no-pressure estimates',
  'Upfront pricing — no surprise fees',
  'Constant communication until the job is done',
  'Clean, respectful work in your home',
  'Locally owned and operated in Orlando',
]

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/ductwork.png"
              alt="Newly installed insulated ductwork and air handler in a residential attic"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 max-w-56 rounded-2xl bg-secondary p-5 text-secondary-foreground shadow-xl md:-right-6">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-accent">Owner-led</p>
            <p className="mt-1 text-sm leading-relaxed text-secondary-foreground/80">
              Every job is backed personally by {site.owner}.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why 4REAL</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            Real service from people who keep their word.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Our mission is simple: reliable service and high-quality equipment tailored to your specific needs. We
            treat your home like our own and explain every option in plain language.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="font-medium leading-snug">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
