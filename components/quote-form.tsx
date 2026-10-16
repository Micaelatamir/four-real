'use client'

import { Send } from 'lucide-react'
import { site } from '@/lib/site'

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20'

export function QuoteForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    const body = [
      `Name: ${get('name')}`,
      `Phone: ${get('phone')}`,
      `Email: ${get('email')}`,
      `Address: ${get('address')}`,
      `Service: ${get('service')}`,
      '',
      get('message'),
    ].join('\n')

    const subject = `Free quote request — ${get('service') || 'HVAC'}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
      <h3 className="font-display text-2xl font-bold">Request a free estimate</h3>
      <p className="mt-1 text-sm text-muted-foreground">We usually respond within one business day.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="address" className="text-sm font-medium">
            Service address
          </label>
          <input id="address" name="address" autoComplete="street-address" placeholder="Street, City, Zip" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="service" className="text-sm font-medium">
            What do you need?
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="AC Repair">
            <option>AC Repair</option>
            <option>AC Installation / Replacement</option>
            <option>Heating</option>
            <option>Maintenance / Tune-up</option>
            <option>Ductwork / Air Quality</option>
            <option>Commercial HVAC</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what's going on with your system..."
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Send className="size-4" aria-hidden="true" />
        Send Request
      </button>
    </form>
  )
}
