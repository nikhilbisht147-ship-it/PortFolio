import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 border-t mb-0 border-slate-800 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-6  lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand / Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-slate-300 font-medium">
            Designed & Built by <span className="text-white font-semibold">Jitendra Bisht</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Quick Socials & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/nikhilbisht147-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/jitendra-bisht-0458382a9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <FaLinkedinIn className="text-lg" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
          >
            <FiArrowUp className="text-base" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer