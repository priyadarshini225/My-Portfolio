'use client'
import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [theme, setTheme] = useState('light')
  const sideBar = useRef()
  const logoSrc = theme === 'light' ? assets.logo  : assets.logo_dark
  const openMenu = () => {
    sideBar.current.style.transform = 'translateX(0)'
  }

  const closeMenu = () => {
    sideBar.current.style.transform = 'translateX(100%)'
  }


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="Header Background" className='w-full' />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition duration-300 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-gray-900 dark:bg-opacity-50" : ""}`}>

        <a href="#top">
          <Image src={logoSrc} alt="Logo" className="w-38 max-w-[170px] cursor-pointer mr-5 ml-5 border-none dark:border-none dark:outline-none dark:ring-0 focus:outline-none focus:ring-0" />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3 bg-white dark:bg-gray-800 dark:text-white shadow-[0_4px_20px_rgba(255,105,180,0.4)] bg-opacity-50 ml-10">

          <li><a href="#top" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About me</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#edu" className="hover:underline">Education</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#interests" className="hover:underline">Interests</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>

        <div className='flex items-center ml-auto'>
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-xl text-gray-800 dark:text-white hover:opacity-80 transition">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-white dark:text-white rounded-full ml-4'>
            Contact
            <Image src={assets.arrow_icon} alt="Contact" className="w-3 dark:invert" />
          </a>

          <button className='md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu item" className='w-6 dark:invert' />
          </button>
        </div>

        {/* Mobile Menu */}
        <div>
          <ul ref={sideBar} className='flex md:hidden flex-col gap-4 py-8 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-800 dark:text-white transition duration-500 ease-in-out translate-x-full'>
            <div className='ml-auto mt-0' onClick={closeMenu}>
              <Image src={assets.close_black} alt="cross" className="w-5 cursor-pointer dark:invert" />
            </div>
            <li><a onClick={closeMenu} href="#top" className='hover:underline'>Home</a></li>
            <li><a onClick={closeMenu} href="#about" className="hover:underline">About me</a></li>
            <li><a onClick={closeMenu} href="#skills" className="hover:underline">Skills</a></li>
            <li><a onClick={closeMenu} href="#edu" className="hover:underline">Education</a></li>
            <li><a onClick={closeMenu} href="#projects" className="hover:underline">Projects</a></li>
            <li><a onClick={closeMenu} href="#interests" className="hover:underline">Interests</a></li>
            <li><a onClick={closeMenu} href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
