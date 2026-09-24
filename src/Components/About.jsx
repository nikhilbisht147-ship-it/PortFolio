import React from 'react'
import { FiCode, FiCompass, FiZap } from 'react-icons/fi'

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-[#F8FAFC] dark:bg-[#0B0F17] py-14 sm:py-20 lg:py-24 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-indigo-200 dark:border-indigo-800/80 transition-colors">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mt-4 max-w-3xl leading-snug transition-colors">
            Passionate about building scalable, user-centric web applications.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg transition-colors">
            <p>
              I am a <strong className="text-slate-900 dark:text-white font-bold">Full Stack Developer</strong> specializing in the MERN stack (React, Node.js, Express, MongoDB) with a focus on creating responsive, performant, and intuitive digital experiences.
            </p>
            <p>
              Coming from a non-IT background, my journey into technology was driven by pure curiosity and a love for building things from scratch. Transitioning into software engineering taught me how to learn rapidly, break down complex architectures, and approach problems with fresh perspective and discipline.
            </p>
            <p>
              Whether designing clean client-side interfaces or architecting RESTful APIs and databases, I strive to write readable, maintainable code that delivers real-world value.
            </p>

            {/* Quick Contact / Status indicator */}
            <div className="pt-3 sm:pt-4 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
                Available for full-time roles and freelance projects
              </span>
            </div>
          </div>

          {/* Highlights / Trait Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 sm:gap-4">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-200 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 border border-indigo-100/60 dark:border-indigo-800/40">
                <FiCode className="text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">
                  Full-Stack Capability
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
                  Bridging clean frontend aesthetics with robust backend APIs and scalable databases.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-200 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 border border-indigo-100/60 dark:border-indigo-800/40">
                <FiCompass className="text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">
                  Adaptability & Tenacity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
                  Self-taught foundation that translates into continuous learning and quick adoption of new stacks.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-200 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 border border-indigo-100/60 dark:border-indigo-800/40">
                <FiZap className="text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">
                  Practical & Project-Driven
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
                  Focused on building working products, handling edge cases, and delivering real business logic.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About