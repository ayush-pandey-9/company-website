import Services from "@/components/Services";
import React from "react";
import styles from "./aboutUs.module.css";

export default function About() {
  const aboutData = [
    {
      id: 1,
      title: "Authenticity",
      description:
        "No pretense here. What you see is what you get—real people delivering real solutions.",
      services: [],
    },
    {
      id: 2,
      title: "Quality",
      description:
        "We're committed to providing top-notch services at prices that won't make your accountant faint.",
      services: [],
    },
    {
      id: 3,
      title: "Fun",
      description:
        "Life's too short for dull meetings. We keep things light and enjoyable because work can (and should) be fun.",
      services: [],
    },
  ];
  return (
    <div
      className={`container mx-auto text-white ${styles.aboutUsContainer} py-8 px-5`}
    >
      <p className={`text-4xl ${styles.aboutUsHeading} mb-6 font-bold`}>
        About Us
      </p>
      <p className={styles.aboutUsText}>
        We're a group of laid-back professionals who believe that high-quality
        service doesn't have to come with a stiff collar. We're all about:
      </p>
      <Services
        servicesData={aboutData}
        servicesCardClass="bg-primary hover:bg-secondary text-white border-white"
      />
    </div>
  );
}
