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
      className={`${containerCustomClassName} ${borderColor} pointer hover:shadow-lg hover:border-2 hover:border-green transition-all transform hover:-translate-y-2 rounded-lg border px-6 py-4 duration-500`}
    >
      <div className="flex justify-end">
        <span
          className={`px-4 border font-medium ${borderColor} w-min rounded-30`}
        >{`#${cardNumber}`}</span>
      </div>
      <p className="text-2xl mt-6 font-semibold">{title}</p>
      <p className="mt-2">{description}</p>
      <div className="mt-4 flex flex-col gap-2">
        {subCards.map((subCard) => (
          <button
            key={subCard}
            onClick={() => handleSubCardClick(subCard)}
            className={`${textColor} ${borderColor} cursor-pointer min-w-288 w-fit py-2 px-4 border rounded-lg transition-colors`}
          >
            {subCard}
          </button>
        ))}
      </div>
    </div>
  )
}

interface ServiceData {
  id?: number
  title?: string
  description?: string
  services?: string[]
}

interface ServiceProps {
  title?: string
  description?: string
  servicesData?: ServiceData[]
}

const Services: React.FC<ServiceProps> = ({
  title,
  description,
  servicesData,
}) => {
  useEffect(() => {
    // Handle the default loading of first card and first sub-card
    if (servicesData && servicesData?.length > 0) {
      const urlParams = new URLSearchParams(window.location.search)
      const tab = urlParams.get('tab')
      const subtab = urlParams.get('subtab')

      if (tab || subtab) {
        const defaultSubTab = servicesData[0]?.services?.[0]
          ?.toLowerCase()
          ?.replace(/\s+/g, '-')
        const newTab = `card${servicesData[0].id}`
        const newUrl = `/services?tab=${newTab}&subtab=${defaultSubTab}`

        window.location.href = newUrl
      }
    }
  }, [])

  return (
    <div className="container mx-auto py-8 px-5 text-white">
      {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
      {description && <p className="text-xl mb-6">{description}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {servicesData &&
          servicesData.map((service, index) => (
            <ServiceCard
              key={service?.id}
              title={service?.title || ''}
              description={service?.description || ''}
              subCards={service?.services || []}
              cardNumber={service?.id?.toString() || '0'}
              containerCustomClassName={
                'border-black bg-black text-white hover:bg-white hover:text-black'
              }
              borderColor={'border-white hover:border-black'}
              textColor="border-black hover:text-white"
            />
          ))}
      </div>
    </div>
  )
}

export default Services
