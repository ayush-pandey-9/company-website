"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import landingImage from "../assets/background.png";
import LogoImage from "./LogoImage";
import styles from './styles/Navbar.module.css'

const Navbar = () => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(
    capitalizeFirstLetter(pathname.slice(1)) ?? ""
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (title: string) => {
    setActiveLink(title);
    setIsModalOpen(false); // Close modal on link click
  };

  useEffect(() => {
    const currentPath =
      pathname === "/" ? "Home" : capitalizeFirstLetter(pathname.slice(1));
    setActiveLink(currentPath);
  }, [pathname]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Team", href: "/team" },
    { title: "Careers", href: "/careers" },
  ];

  return (
    <div
      className={`${
        pathname === "/" ? "lg:h-screen h-max" : "h-max"
      } flex flex-col justify-between`}
    >
      <div
        style={{
          overflow: "hidden",
          height: "auto",
          width: "100%",
          position: "relative",
          aspectRatio: "1.75",
        }}
      >
        <Image
          src={landingImage}
          alt="Background Image-Emeris"
          objectFit="cover"
        />
      </div>
      <nav className={`${styles.navbarContainer} mx-auto container flex items-center justify-between p-4 lg:p-6 text-white z-10 w-full absolute`}>
        <a className="flex items-center" href="/">
          <LogoImage />
        </a>

        <div className="hidden lg:flex gap-8 items-center">
          <div className="space-x-6 rounded-lg border border-white py-2 px-1">
            {navLinks.map((navLink) => (
              <a
                key={navLink.title}
                href={navLink.href}
                onClick={() => handleClick(navLink.title)}
                className={`hover:text-black hover:bg-white transition-colors px-6 py-2 rounded-md ${
                  activeLink === navLink.title
                    ? "bg-white text-black"
                    : "text-white hover:text-green-400"
                }`}
              >
                {navLink.title}
              </a>
            ))}
          </div>
          <a
            href="/contact"
            className="border border-white px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Contact us
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsModalOpen(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" className="text-white" />
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-20">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
          <div className="flex flex-col space-y-8">
            {navLinks.map((navLink) => (
              <a
                key={navLink.title}
                href={navLink.href}
                onClick={() => handleClick(navLink.title)}
                className="text-white text-2xl hover:text-green-400"
              >
                {navLink.title}
              </a>
            ))}
            <a
              href="/contact"
              className="border border-white px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-black hover:text-white transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              Contact us
            </a>
          </div>
        </div>
      )}

      {pathname === "/" ? <Landing /> : ""}
    </div>
  );
};

export default Navbar;
