import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { fullAddress, site } from '@/lib/site'
import { QuoteForm } from '@/components/quote-form'

export function Contact() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact Us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            Get your free quote today.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Questions or special requests? Drop us a line — we stay in constant communication until the job is done.
          </p>

          <dl className="mt-10 flex flex-col gap-6">
            <div className="flex gap-4">
              <dt>
                <Phone className="size-6 text-primary" aria-hidden="true" />
                <span className="sr-only">Phone</span>
              </dt>
              <dd>
                <a href={site.phoneHref} className="font-display text-xl font-bold hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <Mail className="size-6 text-primary" aria-hidden="true" />
                <span className="sr-only">Email</span>
              </dt>
              <dd>
                <a href={`mailto:${site.email}`} className="break-all font-medium hover:text-primary">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <MapPin className="size-6 text-primary" aria-hidden="true" />
                <span className="sr-only">Address</span>
              </dt>
              <dd>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.zip}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <Clock className="size-6 text-primary" aria-hidden="true" />
                <span className="sr-only">Hours</span>
              </dt>
              <dd className="flex flex-col gap-1">
                {site.hours.map((h) => (
                  <span key={h.day} className="font-medium">
                    {h.day}: <span className="text-muted-foreground">{h.time}</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <QuoteForm />
      </div>
    </section>
  )
}
