import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MdOutlineMail } from 'react-icons/md'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const ContactMe = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // Replace these 3 strings with your actual EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false)
          setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
          })
          formRef.current.reset()
        },
        (error) => {
          setLoading(false)
          console.error('Email error:', error)
          setStatus({
            type: 'error',
            message: 'Failed to send message. Please try again or email me directly at nikhilbisht147@gmail.com.',
          })
        }
      )
  }

  return (
    <section 
      id="contact" 
      className="bg-[#F8FAFC] dark:bg-[#0B0F17] py-14 sm:py-20 lg:py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800/80 transition-colors">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-4 transition-colors">
            Let's Work Together
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 transition-colors">
            Have a project in mind, a question about my work, or want to discuss full-time roles? I'd love to hear from you.
          </p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/40 overflow-hidden transition-colors duration-300">
          
          {/* Left Column: Direct Info & Links */}
          <div className="lg:col-span-5 bg-slate-900 dark:bg-[#0F172A] p-6 sm:p-10 lg:p-12 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 transition-colors duration-300">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Contact Information</h3>
              <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                Feel free to reach out directly through any of these platforms. I typically respond within 24 hours.
              </p>

              <div className="mt-8 space-y-4 sm:space-y-5">
                {/* Email */}
                <a
                  href="mailto:jitendrabisht.dev@gmail.com"
                  className="flex items-center gap-3.5 sm:gap-4 group text-slate-300 hover:text-white transition-colors p-2 -mx-2 rounded-xl hover:bg-slate-800/60"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:border-indigo-500 transition-colors shrink-0">
                    <MdOutlineMail className="text-lg sm:text-xl text-indigo-400 group-hover:text-indigo-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white truncate">jitendrabisht.dev@gmail.com</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/nikhilbisht147-ship-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 group text-slate-300 hover:text-white transition-colors p-2 -mx-2 rounded-xl hover:bg-slate-800/60"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:border-indigo-500 transition-colors shrink-0">
                    <FaGithub className="text-lg sm:text-xl text-indigo-400 group-hover:text-indigo-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">GitHub</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white truncate">nikhilbisht147-ship-it</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jitendra-bisht-0458382a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 group text-slate-300 hover:text-white transition-colors p-2 -mx-2 rounded-xl hover:bg-slate-800/60"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:border-indigo-500 transition-colors shrink-0">
                    <FaLinkedinIn className="text-lg sm:text-xl text-indigo-400 group-hover:text-indigo-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">LinkedIn</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white truncate">Jitendra Bisht</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800/80">
              
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
            
            {/* Feedback Notifications */}
            {status.message && (
              <div
                className={`mb-5 p-4 rounded-xl flex items-start gap-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/70'
                }`}
              >
                {status.type === 'success' ? (
                  <FiCheckCircle className="text-lg shrink-0 mt-0.5" />
                ) : (
                  <FiAlertCircle className="text-lg shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2 transition-colors">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2 transition-colors">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2 transition-colors">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or open role..."
                  className="w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold text-sm rounded-xl shadow-md shadow-indigo-200/50 dark:shadow-none hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                <FiSend className={`text-sm ${loading ? 'animate-pulse' : ''}`} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactMe