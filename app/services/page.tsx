'use client'

import { useEffect } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  subCards: string[]
  cardNumber: string
  containerCustomClassName?: string
  textColor?: string
  borderColor?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  subCards,
  cardNumber,
  containerCustomClassName,
  textColor,
  borderColor,
}) => {
  const handleSubCardClick = (subCardTitle: string) => {
    const newSubTab = subCardTitle.toLowerCase().replace(/\s+/g, '-')
    const newTab = `card${cardNumber}`
    const newUrl = `/services?tab=${newTab}&subtab=${newSubTab}`

    // Trigger full page reload by setting window.location.href
    window.location.href = newUrl
  }

  return (
    <div
      className={`${containerCustomClassName} ${borderColor} hover:shadow-lg hover:border-2 hover:border-green transition-all transform hover:-translate-y-2 rounded-lg border px-6 py-4 duration-500`}
    >
      <div className="flex justify-end">
        <span
          className={`px-4 border font-medium ${borderColor} w-min rounded-30`}
        >{`#${cardNumber}`}</span>
      </div>
      <p className="text-2xl mt-6 font-semibold">{title}</p>
      <p className="mt-2">{description}</p>

      {/* Sub-cards */}
      <div className="mt-4 flex flex-col gap-2">
        {subCards.map((subCard) => (
          <button
            key={subCard}
            onClick={() => handleSubCardClick(subCard)}
            className={`${textColor} min-w-288 w-fit py-2 px-4 border rounded-lg transition-colors`}
          >
            {subCard}
          </button>
        ))}
      </div>
    </div>
  )
}

const Services: React.FC = () => {
  const servicesData = [
    {
      id: 1,
      title: 'AUTONOMOUS AGENT DEVELOPMENT',
      services: [
        'Workflow Automation',
        'Natural Language to SQL',
        'Complex Data Pipelines',
        'Self-Adaptive Systems',
      ],
    },
    {
      id: 2,
      title: 'ENTERPRISE CONSULTING',
      services: [
        'Strategy Development',
        'Performance Evaluation',
        'Use Case Identification',
        'Feasibility Assessments',
      ],
    },
    {
      id: 3,
      title: 'CHATBOT DEVELOPMENT',
      services: [
        'GPT Development',
        'Secure Solutions',
        'Knowledge Response',
        'Model Tuning',
      ],
    },
  ]

  useEffect(() => {
    // Handle the default loading of first card and first sub-card
    const urlParams = new URLSearchParams(window.location.search)
    const tab = urlParams.get('tab')
    const subtab = urlParams.get('subtab')

    if (!tab || !subtab) {
      const defaultSubTab = servicesData[0].services[0]
        .toLowerCase()
        .replace(/\s+/g, '-')
      const newTab = `card${servicesData[0].id}`
      const newUrl = `/services?tab=${newTab}&subtab=${defaultSubTab}`

      // Trigger full page reload with default values
      window.location.href = newUrl
    }
  }, [])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service?.id}
            title={service?.title}
            description={`Description for ${service?.title}`}
            subCards={service?.services}
            cardNumber={service?.id?.toString()}
            containerCustomClassName={
              index % 3 == 0
                ? 'border-black hover:bg-black hover:text-white'
                : index % 3 === 1
                ? 'text-white bg-green hover:bg-white hover:text-green'
                : 'border-black bg-black text-white  hover:bg-white hover:text-black'
            }
            borderColor={
              index % 3 == 0
                ? 'border-black'
                : index % 3 === 1
                ? 'border-green'
                : 'border-white'
            }
            textColor="border-black hover:text-white"
          />
        ))}
      </div>
    </div>
  )
}

export default Services
