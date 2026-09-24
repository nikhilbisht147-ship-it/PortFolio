import React, { useState, useEffect } from 'react'
import { IoMdReorder, IoMdClose } from 'react-icons/io'
import { FiSun, FiMoon } from 'react-icons/fi'

const navItems = [
  { id: 1, name: 'Home', href: '#home', targetId: 'home' },
  { id: 2, name: 'About', href: '#about', targetId: 'about' },
  { id: 3, name: 'Skills', href: '#skills', targetId: 'skills' },
  { id: 4, name: 'Project', href: '#project', targetId: 'project' },
  { id: 5, name: 'Contact', href: '#contact', targetId: 'contact' },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Theme State: checks localStorage first, falls back to system preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  // Synchronize 'dark' class on <html> and update localStorage
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // Scroll section observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedItem = navItems.find((item) => item.targetId === entry.target.id)
          if (matchedItem) {
            setActiveSection(matchedItem.name)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navItems.forEach((item) => {
      const el = document.getElementById(item.targetId)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className='bg-[#F8FAFC]/90 dark:bg-[#0B0F17]/90 backdrop-blur-md  dark:border-slate-800/80 sticky top-0 w-full h-[80px] z-50 transition-colors duration-300'>
      <div className='max-w-[1400px] mx-auto px-6 sm:px-10 flex justify-between items-center h-[80px] text-lg'>

        {/* Logo */}
        <a href='#home' className='cursor-pointer font-bold text-2xl text-[#0F172A] dark:text-white transition-colors'>
          PortFolio<span className='text-indigo-600 dark:text-indigo-400'>.</span>
        </a>

        {/* Desktop Menu & Theme Toggle */}
        <div className='hidden md:flex items-center gap-6 lg:gap-8'>
          <div className='flex items-center gap-2 lg:gap-4'>
            {navItems.map((item) => {
              const isActive = activeSection === item.name
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`font-semibold text-sm lg:text-base px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-indigo-600 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </div>

          {/* Desktop Theme Switcher Button */}
          <div className='pl-2 border-l border-slate-200 dark:border-slate-800'>
            <button
              type='button'
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className='p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center'
            >
              {theme === 'dark' ? (
                <FiSun className='text-xl text-amber-400' />
              ) : (
                <FiMoon className='text-xl text-slate-600' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Controls: Theme Switcher + Menu Toggle */}
        <div className='flex items-center gap-2 md:hidden'>
          <button
            type='button'
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className='p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center'
          >
            {theme === 'dark' ? (
              <FiSun className='text-lg text-amber-400' />
            ) : (
              <FiMoon className='text-lg text-slate-600' />
            )}
          </button>

          <button
            type='button'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle menu'
            className='text-2xl text-[#0F172A] dark:text-white p-2 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800/70 transition-colors'
          >
            {isMobileMenuOpen ? <IoMdClose /> : <IoMdReorder />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-1.5 shadow-xl transition-colors duration-300'>
          {navItems.map((item) => {
            const isActive = activeSection === item.name
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-semibold text-base px-4 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-indigo-600 shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}

export default Navbar