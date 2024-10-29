'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface ServiceCardProps {
  title: string
  description: string
  subCards: string[]
  cardNumber: string
  containerCustomClassName?: string
  textColor?: string
  borderColor?: string
  isActive?: boolean
  onClick?: () => void // Trigger when a card is clicked
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  cardNumber,
  containerCustomClassName,
  borderColor,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${containerCustomClassName} ${borderColor} hover:shadow-lg hover:border-2 hover:border-green transition-all transform hover:-translate-y-2 rounded-lg border px-6 py-4 duration-500 cursor-pointer ${
        isActive ? 'border-green' : ''
      }`}
    >
      <div className="flex justify-end">
        <span
          className={`px-4 border font-medium ${borderColor} w-min rounded-30`}
        >{`#${cardNumber}`}</span>
      </div>
      <p className="text-2xl mt-6 font-semibold">{title}</p>
      <p className="mt-2">{description}</p>
    </div>
  )
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1)
  const [activeSubCard, setActiveSubCard] = useState<string>('')
  const pathname = usePathname()

  const servicesData = [
    {
      id: 1,
      title: 'AUTONOMOUS AGENT DEVELOPMENT',
      description: 'Development of intelligent agents that can automate tasks.',
      services: [
        {
          title: 'Workflow Automation',
          description:
            'Workflow automation involves automating manual, repeatable business tasks.',
        },
        {
          title: 'Natural Language to SQL',
          description: 'Translating natural language queries into SQL.',
        },
        {
          title: 'Complex Data Pipelines',
          description:
            'Creating and managing complex data pipelines for data processing.',
        },
        {
          title: 'Self-Adaptive Systems',
          description: 'Developing systems that adapt to changing conditions.',
        },
      ],
    },
    {
      id: 2,
      title: 'ENTERPRISE CONSULTING',
      description: 'Consulting services for enterprise AI solutions.',
      services: [
        {
          title: 'Strategy Development',
          description:
            'Helping companies develop their AI strategy for business.',
        },
        {
          title: 'Performance Evaluation',
          description: 'Evaluating the performance of AI solutions.',
        },
        {
          title: 'Use Case Identification',
          description:
            'Identifying the best use cases for AI within your organization.',
        },
        {
          title: 'Feasibility Assessments',
          description:
            'Assessing the feasibility of implementing AI solutions in business.',
        },
      ],
    },
    {
      id: 3,
      title: 'CHATBOT DEVELOPMENT',
      description: 'Developing intelligent chatbots for customer support.',
      services: [
        {
          title: 'GPT Development',
          description:
            'Building GPT-based chatbots for natural language understanding.',
        },
        {
          title: 'Secure Solutions',
          description: 'Developing secure chatbot solutions for enterprises.',
        },
        {
          title: 'Knowledge Response',
          description:
            'Enabling chatbots to provide accurate knowledge answers.',
        },
        {
          title: 'Model Tuning',
          description:
            'Tuning the chatbot model for specific business requirements.',
        },
      ],
    },
  ]

  const handleServiceClick = (id: number) => {
    setActiveService(id)
    setActiveSubCard(servicesData[id - 1].services[0].title) // Set first sub-service as default
    const newTab = `card${id}`
    const defaultSubTab = servicesData[id - 1].services[0].title
      .toLowerCase()
      .replace(/\s+/g, '-')

    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      const newUrl = `${pathname}?tab=${newTab}&subtab=${defaultSubTab}`
      window.history.pushState({}, '', newUrl) // Update the URL without reloading
    }
  }

  const handleSubCardClick = (subCardTitle: string) => {
    setActiveSubCard(subCardTitle)
    const newSubTab = subCardTitle.toLowerCase().replace(/\s+/g, '-')
    const newTab = `card${activeService}`

    if (typeof window !== 'undefined') {
      const newUrl = `${pathname}?tab=${newTab}&subtab=${newSubTab}`
      window.history.pushState({}, '', newUrl) // Update the URL without reloading
    }
  }

  useEffect(() => {
    // Run only if in the browser environment
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search)
      const tab = searchParams.get('tab')
      const subtab = searchParams.get('subtab')

      if (!tab || !subtab) {
        const defaultService = servicesData[0]
        const defaultSubTab = defaultService.services[0].title
          .toLowerCase()
          .replace(/\s+/g, '-')
        const newTab = `card${defaultService.id}`
        const newUrl = `${pathname}?tab=${newTab}&subtab=${defaultSubTab}`

        // Update the URL without reloading, but ensure it only runs once
        window.history.replaceState({}, '', newUrl)
        setActiveService(defaultService.id)
        setActiveSubCard(defaultService.services[0].title)
      } else {
        // Set active service and sub-card from URL
        const serviceId = parseInt(tab.replace('card', ''), 10)
        const subService = servicesData
          .find((service) => service.id === serviceId)
          ?.services.find(
            (sub) => sub.title.toLowerCase().replace(/\s+/g, '-') === subtab
          )

        if (serviceId && subService) {
          setActiveService(serviceId)
          setActiveSubCard(subService.title)
        }
      }
    }
  }, [pathname])

  const activeServiceData = servicesData.find(
    (service) => service.id === activeService
  )

  const activeSubServiceData = activeServiceData?.services.find(
    (subService) => subService.title === activeSubCard
  )

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service?.id}
            title={service?.title}
            description={service?.description}
            subCards={service?.services.map((s) => s.title)}
            cardNumber={service?.id?.toString()}
            containerCustomClassName={
              index % 3 === 0
                ? 'border-black hover:bg-black hover:text-white'
                : index % 3 === 1
                ? 'text-white bg-green hover:bg-white hover:text-green'
                : 'border-black bg-black text-white  hover:bg-white hover:text-black'
            }
            borderColor={
              index % 3 === 0
                ? 'border-black'
                : index % 3 === 1
                ? 'border-green'
                : 'border-white'
            }
            textColor="border-black hover:text-white"
            isActive={activeService === service.id}
            onClick={() => handleServiceClick(service.id)}
          />
        ))}
      </div>

      {/* Sub-Cards */}
      <div className="mt-6 flex gap-4 justify-start">
        {activeServiceData?.services.map((subCard) => (
          <button
            key={subCard.title}
            onClick={() => handleSubCardClick(subCard.title)}
            className={`min-w-288 w-fit py-2 px-4 border font-medium border-black hover:border-none hover:bg-green hover:text-white ${
              activeSubCard === subCard.title ? 'bg-green text-white' : ''
            } rounded-lg transition-colors`}
          >
            {subCard.title}
          </button>
        ))}
      </div>

      {/* Active Sub-Card Content */}
      {activeSubServiceData && (
        <div className="mt-4 p-4">
          <p className="text-3xl font-semibold mb-6">
            {activeSubServiceData.title}
          </p>
          <p>{activeSubServiceData.description}</p>
        </div>
      )}
    </div>
  )
}

export default Services
