import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { Process } from '@/components/process'
import { CtaBanner } from '@/components/cta-banner'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { fullAddress, site } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: site.name,
  telephone: '+1-321-805-1180',
  email: site.email,
  url: 'https://4realheatingandair.com',
  image: 'https://4realheatingandair.com/images/hero.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.zip,
    addressCountry: 'US',
  },
  areaServed: 'Orlando, FL',
  openingHours: 'Mo-Sa 09:00-17:00',
  description: `HVAC repair, installation and maintenance at ${fullAddress}.`,
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <CtaBanner />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
