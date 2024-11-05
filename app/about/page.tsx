import Services from '@/components/Services'
import React from 'react'

export default function About() {
  const aboutData = [
    {
      id: 1,
      title: 'Authenticity',
      description:
        'No pretense here. What you see is what you get—real people delivering real solutions.',
      services: [],
    },
    {
      id: 2,
      title: 'Quality',
      description:
        "We're committed to providing top-notch services at prices that won't make your accountant faint.",
      services: [],
    },
    {
      id: 3,
      title: 'Fun',
      description:
        "Life's too short for dull meetings. We keep things light and enjoyable because work can (and should) be fun.",
      services: [],
    },
  ]
  return (
    <div>
      <Services servicesData={aboutData} />
    </div>
  )
}
