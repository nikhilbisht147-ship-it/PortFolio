import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

// Asset imports
import gym from '../assets/gym1.png'
import aiimg from '../assets/aiimg.png'
import grocefy from '../assets/grocify.png'

const projects = [
  {
    id: 1,
    img: grocefy,
    name: 'Grocify',
    category: 'React App',
    para: "An agricultural portal offering real-time mandi prices, localized weather forecasts, and government scheme updates to help farmers make data-driven decisions.",
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/nikhilbisht147-ship-it/Grocify-website.git',
    liveLink: 'https://grocify-website.onrender.com',
  },
  {
    id: 2,
    img: gym,
    name: 'Fitness Freak',
    category: 'Frontend Web App',
    para: "A high-conversion landing page featuring dynamic class schedules, interactive membership calculators, and a seamless trainer booking UI.",
    stack: ['Html', 'CSS', 'Bootstarp'],
    githubLink: 'https://github.com/nikhilbisht147-ship-it/Fitness-Freak.git',
    liveLink: 'https://fitness-freak-mocha.vercel.app/',
  },
  {
    id: 3,
    img: aiimg,
    name: 'PrepWise Ai',
    category: 'Full Stack App',
    para: "A digital dining platform featuring an interactive menu, order-ahead capabilities, and an automated table reservation flow.",
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/nikhilbisht147-ship-it/PrepWise-AI.git',
    liveLink: 'https://prep-wise-ai-blue.vercel.app/',
  },
]

const Projects = () => {
  return (
    <section 
      id="project" 
      className="bg-[#F8FAFC] dark:bg-[#0B0F17] py-14 sm:py-20 lg:py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800/80 transition-colors">
            Portfolio Work
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 transition-colors">
            A selection of web applications I've built demonstrating full-stack engineering, clean UI design, and scalable architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projects.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-white dark:bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800/60">
                <img
                  src={item.img}
                  alt={`Screenshot of ${item.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-slate-900/85 dark:bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {item.para}
                </p>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] sm:text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="mt-auto pt-6 flex items-center justify-between border-slate-100 dark:border-slate-800/80 transition-colors">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${item.name} on GitHub`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="text-base sm:text-lg" />
                    <span>Source</span>
                  </a>

                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-xs shadow-indigo-200/50 dark:shadow-none hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="text-xs sm:text-sm" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects