'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface SubService {
  title: string
  description: string
}

// ServiceData interface for each service, which includes an array of sub-services
interface ServiceData {
  id: number
  title: string
  description: string
  services: SubService[] // Array of sub-service objects
}

// Props for the ServiceCard component
interface ServiceCardProps {
  title: string
  description: string
  cardNumber: string
  subCards: string[] // Array of sub-card titles
  containerCustomClassName?: string
  textColor?: string
  borderColor?: string
  isActive?: boolean
  onClick?: () => void // Function to handle click event
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
      className={`${containerCustomClassName} ${borderColor} hover:shadow-lg hover:border-2 transition-all transform hover:-translate-y-2 rounded-lg border px-6 py-4 duration-500 cursor-pointer ${
        isActive ? 'border-green' : ''
      }`}
    >
      <div className="flex justify-end">
        <span
          className={`px-4 font-medium w-min rounded-30`}
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

  const servicesData: ServiceData[] = [
    {
      id: 1,
      title: 'AI Consulting',
      description:
        'We help you navigate the AI landscape to find solutions that genuinely benefit your business. No one-size-fits-all packages—just tailored advice.',
      services: [],
    },
    {
      id: 2,
      title: 'AI Tool Development',
      description:
        "Got a unique challenge? We'll build custom AI tools to solve it. Consider us your AI Swiss Army knife.",
      services: [],
    },
    {
      id: 3,
      title: 'Web Development (Add-on Service)',
      description:
        "Need a website to match your new AI capabilities? We offer web development as an add-on. It's like getting fries with your burger—totally optional but oh-so-good.",
      services: [],
    },
  ]

  const handleServiceClick = (id: number) => {
    setActiveService(id)
    setActiveSubCard(servicesData[id - 1]?.services?.[0]?.title) // Set first sub-service as default
    const newTab = `card${id}`
    const defaultSubTab = servicesData[id - 1].services[0]?.title
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
        const defaultSubTab = defaultService.services[0]?.title
          .toLowerCase()
          .replace(/\s+/g, '-')
        const newTab = `card${defaultService.id}`
        const newUrl = `${pathname}?tab=${newTab}&subtab=${defaultSubTab}`

        // Update the URL without reloading, but ensure it only runs once
        window.history.replaceState({}, '', newUrl)
        setActiveService(defaultService.id)
        setActiveSubCard(defaultService.services[0]?.title)
      } else {
        // Set active service and sub-card from URL
        const serviceId = parseInt(tab.replace('card', ''), 10)
        const subService = servicesData
          .find((service) => service.id === serviceId)
          ?.services.find(
            (sub) => sub?.title.toLowerCase().replace(/\s+/g, '-') === subtab
          )

        if (serviceId && subService) {
          setActiveService(serviceId)
          setActiveSubCard(subService?.title)
        }
      }
    }
  }, [pathname])

  const activeServiceData = servicesData.find(
    (service) => service.id === activeService
  )

  const activeSubServiceData = activeServiceData?.services.find(
    (subService) => subService?.title === activeSubCard
  )

  return (
    <div className="container mx-auto py-8 px-5 text-white">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service?.id}
            title={service?.title}
            description={service?.description}
            subCards={service?.services.map((s) => s?.title)}
            cardNumber={service?.id?.toString()}
            containerCustomClassName={
              'border-black bg-black text-white hover:bg-white hover:text-black'
            }
            borderColor={'border-white hover:border-black'}
            textColor="border-black hover:text-white"
            isActive={activeService === service.id}
            onClick={() => handleServiceClick(service.id)}
          />
        ))}
      </div>
      <div className="mt-6 flex gap-4 justify-start">
        {activeServiceData?.services.map((subCard) => (
          <button
            key={subCard?.title}
            onClick={() => handleSubCardClick(subCard?.title)}
            className={`min-w-288 w-fit py-2 px-4 border font-medium border-black hover:border-none hover:bg-green hover:text-white ${
              activeSubCard === subCard?.title ? 'bg-green text-white' : ''
            } rounded-lg transition-colors`}
          >
            {subCard?.title}
          </button>
        ))}
      </div>

      {activeSubServiceData && (
        <div className="mt-4 p-4">
          <p className="text-3xl font-semibold mb-6">
            {activeSubServiceData?.title}
          </p>
          <p>{activeSubServiceData?.description}</p>
        </div>
      )}
    </div>
  )
}

export default Services
