'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Landing from './Landing'

const Navbar = () => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState(
    capitalizeFirstLetter(pathname.slice(1)) ?? ''
  )

  const handleClick = (title: string) => {
    setActiveLink(title)
  }
  useEffect(() => {
    console.log('pathname is : ', pathname)
    const currentPath =
      pathname === '/' ? 'Home' : capitalizeFirstLetter(pathname.slice(1))
    setActiveLink(currentPath)
  }, [pathname])
  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'Blog', href: '/blog' },
    { title: 'Team', href: '/team' },
    { title: 'Careers', href: '/careers' },
  ]

  return (
    <div
      className={`${
        pathname === '/' ? 'h-screen' : 'h-max'
      } flex flex-col justify-between`}
    >
      <nav className="bg-black flex items-center justify-between p-6 text-white">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex gap-30">
          <div className="md:flex space-x-6 rounded-lg border border-white p-px">
            {navLinks.map((navLink) => (
              <a
                key={navLink.title}
                href={navLink.href}
                onClick={() => handleClick(navLink.title)}
                className={`hover:text-black hover:bg-white transition-colors px-30 py-14 rounded-md ${
                  activeLink === navLink.title
                    ? 'bg-white text-black'
                    : 'text-white hover:text-green-400'
                }`}
              >
                {navLink.title}
              </a>
            ))}
          </div>
          <div className="flex">
            <a
              href="/contact"
              className="border border-white px-70 py-14 rounded-lg bg-white text-black font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
      {pathname === '/' ? <Landing /> : ''}
    </div>
  )
}

export default Navbar
