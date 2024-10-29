'use client'

import { usePathname, useSearchParams } from 'next/navigation'
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
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleCardClick = () => {
    console.log('subcards : ', subCards)
    const defaultSubTab = subCards[0].toLowerCase().replace(/\s+/g, '-')

    console.log('default sub tab : ', defaultSubTab)
    const newTab = `card${cardNumber}`

    const newUrl = `${pathname}?tab=${newTab}&subtab=${defaultSubTab}`

    window.history.pushState({}, '', newUrl)

    console.log('Updated URL to: ', newUrl)
  }

  const activeSubTab = searchParams.get('subtab')

  return (
    <div
      onClick={handleCardClick}
      className={`${containerCustomClassName} ${borderColor} hover:shadow-lg hover:border-2 hover:border-green transition-all transform hover:-translate-y-2 rounded-lg border border-black px-6 py-4 duration-500 cursor-pointer`}
    >
      <div className={textColor}>
        <div className="flex justify-end">
          <span
            className={`px-4 border font-medium ${borderColor} w-min rounded-30`}
          >{`#${cardNumber}`}</span>
        </div>
        <p className="text-2xl mt-6 font-semibold">{title}</p>
      </div>
      <p className={`${textColor} mt-2`}>{description}</p>
    </div>
  )
}

const Services: React.FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

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

  const activeTab = searchParams.get('tab')
  const activeSubTab = searchParams.get('subtab')

  const activeService =
    servicesData.find((service) => `card${service.id}` === activeTab) ||
    servicesData[0]

  const activeSubCard =
    activeSubTab || activeService.services[0].toLowerCase().replace(/\s+/g, '-')

  useEffect(() => {
    if (!activeTab || !activeSubTab) {
      const defaultSubTab = activeService.services[0]
        .toLowerCase()
        .replace(/\s+/g, '-')
      const newTab = `card${activeService.id}`
      const newUrl = `${pathname}?tab=${newTab}&subtab=${defaultSubTab}`

      window.history.replaceState({}, '', newUrl)
    }
  }, [activeTab, activeSubTab, activeService, pathname])

  return (
    <div className="container mx-auto py-50 px-6">
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
            // textColor={
            //   index % 3 == 0
            //     ? "hover:bg-black hover:text-white"
            //     : index % 3 === 1
            //     ? "hover:text-white"
            //     : "border-black"
            // }
            borderColor={
              index % 3 == 0
                ? 'border-black'
                : index % 3 === 1
                ? 'border-green'
                : 'border-white'
            }
          />
        ))}
      </div>

      {/* Sub-Card Buttons */}
      <div className="mt-6 flex gap-4 justify-start">
        {activeService.services.map((subCard) => (
          <button
            key={subCard}
            onClick={() => {
              const subTab = subCard.toLowerCase().replace(/\s+/g, '-')
              const newUrl = `${pathname}?tab=card${activeService.id}&subtab=${subTab}`

              window.history.pushState({}, '', newUrl)
            }}
            className={`min-w-288 w-fit py-2 px-4 border font-medium border-black hover:border-none hover:bg-green hover:text-white ${
              activeSubCard === subCard.toLowerCase().replace(/\s+/g, '-')
                ? 'bg-green text-white border-none'
                : ''
            } rounded-lg transition-colors`}
          >
            {subCard}
          </button>
        ))}
      </div>

      {/* Active Sub-Card Content */}
      <div className="mt-4 p-4 ">
        <p className="text-3xl font-semibold mb-6">
          {activeSubCard
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </p>
        <p>Details about {activeSubCard}...</p>
      </div>
    </div>
  )
}

export default Services
