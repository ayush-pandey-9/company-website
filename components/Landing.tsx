import React from 'react'

const Landing = () => {
  return (
    <section className="flex justify-center bg-cover bg-center bg-no-repeat px-5 py-70">
      <div className="grid grid-cols-custom py-5">
        <div className="container mx-auto text-left">
          <h1 className="text-50 font-bold mb-6 leading-50">
            <span className="text-green">BREATHE LIFE INTO YOUR SYSTEMS</span>{' '}
            WITH CUTTING-EDGE AI SOLUTIONS
          </h1>
        </div>
        <div className="flex justify-center space-x-4 h-min">
          <a
            href="/contact"
            className="font-semibold h-max bg-green text-white px-70 py-14 rounded-lg hover:bg-green-600 transition-colors"
          >
            Let’s Talk
          </a>
          <a
            href="/services"
            className="font-semibold h-max border border-black px-35 py-14 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            Our Services →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Landing
