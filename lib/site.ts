export const site = {
  name: '4REAL Heating & Air',
  owner: 'Nando Canelli',
  phoneDisplay: '(321) 805-1180',
  phoneHref: 'tel:+13218051180',
  email: '4realheatingandair@gmail.com',
  address: {
    street: '2623 Yucca Street',
    city: 'Orlando',
    region: 'FL',
    zip: '32807',
  },
  social: {
    instagram: 'https://www.instagram.com/nandocanelli',
    facebook: 'https://www.facebook.com/nandocanelli',
  },
  hours: [
    { day: 'Monday – Saturday', time: '9:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
} as const

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`
