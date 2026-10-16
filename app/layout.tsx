import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', weight: ['500', '700', '800'] })

export const metadata: Metadata = {
  title: '4REAL Heating & Air | AC Repair & HVAC Services in Orlando, FL',
  description:
    'Licensed & insured HVAC technicians in Orlando, FL. AC repair, installation, heating, maintenance and ductwork for homes and businesses. Free estimates — call (321) 805-1180.',
  keywords: ['AC repair Orlando', 'HVAC Orlando', 'air conditioning installation', 'heating repair', 'ductwork', '4REAL Heating & Air'],
  openGraph: {
    title: '4REAL Heating & Air — Orlando HVAC Experts',
    description: 'AC repair, installation and maintenance in Orlando, FL. Free estimates.',
    images: ['/images/hero.png'],
    type: 'website',
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f1a3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
