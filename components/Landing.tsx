import React from "react";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <section className="mx-auto container flex justify-center bg-cover bg-center bg-no-repeat px-5 lg:py-10 z-10 md:py-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-custom">
        <div className="container mx-auto text-left">
          <h1 className="lg:text-50 font-bold mb-6 leading-50 text-black md:text-6 text-28">
            Genuine AI Solutions, No Hype
          </h1>
        </div>
        <div className="flex justify-center space-x-4 h-min">
          <a
            href="/contact"
            className="font-semibold h-max border text-white bg-primary lg:px-70 lg:py-14 rounded-lg hover:bg-secondary hover:text-white p-4"
          >
            Let’s Chat
          </a>
          <a
            href="/services"
            className="font-semibold h-max border text-white bg-primary lg:px-35 lg:py-14 rounded-lg hover:bg-secondary hover:text-white p-4"
          >
            Our Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
