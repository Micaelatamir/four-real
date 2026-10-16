import { AirVent, Flame, Snowflake, Wind, Wrench, Building2 } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'AC Repair',
    description: 'Warm air, strange noises or a unit that won’t turn on? We diagnose the real problem and fix it fast.',
  },
  {
    icon: Snowflake,
    title: 'AC Installation & Replacement',
    description: 'Properly sized, energy-efficient systems installed cleanly — so you get more comfort for less on your bill.',
  },
  {
    icon: Flame,
    title: 'Heating Services',
    description: 'Heat pump and furnace repair, tune-ups and installs for those chilly Florida mornings.',
  },
  {
    icon: Wind,
    title: 'Preventive Maintenance',
    description: 'Seasonal tune-ups, coil cleaning and refrigerant checks that extend your system’s life and prevent breakdowns.',
  },
  {
    icon: AirVent,
    title: 'Ductwork & Air Quality',
    description: 'Duct installation, sealing and replacement, plus filtration upgrades for cleaner, healthier indoor air.',
  },
  {
    icon: Building2,
    title: 'Commercial HVAC',
    description: 'Dependable cooling for offices, shops and restaurants — minimal downtime for your business.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our Services</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            Everything your system needs, under one roof.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            From emergency repairs to brand-new installs, our technicians handle residential and commercial HVAC
            across the Orlando area.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
