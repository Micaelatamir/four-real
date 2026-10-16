import Image from 'next/image'

const steps = [
  { title: 'Call or request a quote', description: 'Tell us what’s going on — by phone or the form below.' },
  { title: 'On-site inspection', description: 'A technician diagnoses the issue and gives you a free, clear estimate.' },
  { title: 'Expert repair or install', description: 'We get the work done efficiently and leave your space clean.' },
  { title: 'Comfort, guaranteed', description: 'We follow up to make sure everything runs perfectly.' },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How It Works</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
              From first call to cool air in four steps.
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl">
              <Image
                src="/images/comfort.png"
                alt="Homeowner adjusting a smart thermostat in a cool, bright living room"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <ol className="flex flex-col justify-center gap-4">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-4xl font-extrabold leading-none text-primary/25" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
