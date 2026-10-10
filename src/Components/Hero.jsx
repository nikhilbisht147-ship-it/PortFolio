import React, { useState, useEffect } from 'react'
import img1 from '../assets/piccmyy.png'
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FiCode } from 'react-icons/fi'
const resume = '/Jitendra-Bisht-Resume.pdf'

const roles = [
  'React Developer',
  'Web Developer',
  'MERN-Stack Developer',
  'Problem Solver'
]     

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = roles[roleIndex]
    const typingSpeed = isDeleting ? 30 : 75

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex])

  return (
    <section 
      id="home" 
      className="relative bg-[#F8FAFC] dark:bg-[#0B0F17] min-h-[calc(100vh-80px)] flex items-center py-10 sm:py-14 overflow-hidden transition-colors duration-300"
    >
      {/* Background Soft Blur (Adapts for light and dark) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] lg:w-[680px] h-96 sm:h-[550px] lg:h-[680px] bg-indigo-200/35 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================= 1. CIRCULAR IMAGE CONTAINER ================= */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] select-none">
              
              {/* Circular Backplate Accent */}
              <div className="absolute -inset-3 rounded-full bg-slate-200/80 dark:bg-slate-800/80 rotate-2 pointer-events-none -z-0 transition-colors duration-300"></div>

              {/* Circular Frame */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-4 border-white dark:border-slate-800 shadow-2xl shadow-slate-300/60 dark:shadow-black/50 transition-colors duration-300">
                <img
                  src={img1}
                  alt="Jitendra Bisht"
                  className="w-full h-full object-cover object-top scale-115 sm:scale-120 hover:scale-125 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-300/40 dark:shadow-black/40 rounded-full px-4 py-2 flex items-center gap-2 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <FiCode className="text-indigo-600 dark:text-indigo-400 text-sm" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 tracking-wide">React & Modern UI</span>
              </div>

            </div>
          </div>

          {/* ================= 2. CONTENT ================= */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left mt-4 lg:mt-0">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs mb-5 transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                Available for Roles & Projects
              </span>
            </div>

            {/* Balanced Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors duration-300">
              Hi, I'm Jitendra Bisht<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </h1>

            {/* Dynamic Typing Role */}
            <div className="mt-2.5 flex items-center justify-center lg:justify-start gap-2 h-9">
              
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight transition-colors duration-300">
                {currentText}
              </span>
              <span className="w-[2px] sm:w-[2.5px] h-6 bg-indigo-600 dark:bg-indigo-400 animate-pulse inline-block -ml-1 rounded-full"></span>
            </div>

            {/* Professional Summary */}
            <p className="mt-4 text-base sm:text-lg font-normal text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-colors duration-300">
              I architect performant, maintainable client-side applications with <strong className="font-semibold text-slate-900 dark:text-slate-100">React</strong> and modern JavaScript ecosystems. Paired with practical backend competencies, I bridge clean interface aesthetics with reliable system integrations.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-200/50 dark:shadow-none hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Get in Touch</span>
                <IoIosArrowRoundForward className="text-xl" />
              </a>

              <a
                href={resume}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Download Resume</span>
                <MdOutlineFileDownload className="text-lg text-slate-500 dark:text-slate-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1.5">
                Profiles:
              </span>

              <a
                href="https://github.com/jitendrabisht147"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href="https://www.linkedin.com/in/jitendra-bisht-0458382a9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaLinkedinIn className="text-base" />
              </a>

              <a
                href="https://www.instagram.com/jitendrabisht.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaInstagram className="text-base" />
              </a>

              <a
                href="https://wa.me/917467809598?text=Hi%20Jitendra,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaWhatsapp className="text-base" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero