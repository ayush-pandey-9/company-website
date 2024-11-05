import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'

export default function Home() {
  const servicesData = [
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
  const approachData = [
    {
      id: 1,
      title: 'Discover',
      description:
        'We start by understanding your business inside and out. Casual chats, deep dives—maybe even a bad joke or two.',
      services: [],
    },
    {
      id: 2,
      title: 'Design',
      description:
        'Crafting a customized AI solution that fits like a glove. Or a really comfy pair of socks.',
      services: [],
    },
    {
      id: 3,
      title: 'Develop',
      description:
        'Our team gets to work, turning ideas into reality while you sit back and relax (or join in the fun).',
      services: [],
    },
    {
      id: 4,
      title: 'Deploy & Support',
      description:
        "We don't just hand over the goods and vanish. We're here for ongoing support—kind of like that friend who always helps you move",
      services: [],
    },
  ]
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
    <div className="">
      <Services title={'Our Services'} servicesData={servicesData} />
      {/* <WhyUs /> */}
      <Services title={'Our Approach'} servicesData={approachData} />
      <Services
        title={'About Us'}
        description={
          "We're a group of laid-back professionals who believe that high-quality service doesn't have to come with a stiff collar. We're all about:"
        }
        servicesData={aboutData}
      />
    </div>
  )
}
