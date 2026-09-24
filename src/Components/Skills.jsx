import React, { useState } from 'react'

// Asset imports
import html from '../assets/html5.png'
import css from '../assets/css.png'
import tailwind from '../assets/tail.png'
import bootstrap from '../assets/bs.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/ex.png'
import mongodb from '../assets/db.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import render from '../assets/render.svg'
import vercel from '../assets/vercel.png'

const skillsData = [
  { id: 1, img: html, name: 'HTML5', category: 'Frontend' },
  { id: 2, img: css, name: 'CSS3', category: 'Frontend' },
  { id: 3, img: js, name: 'JavaScript', category: 'Frontend' },
  { id: 4, img: react, name: 'React.js', category: 'Frontend' },
  { id: 5, img: tailwind, name: 'Tailwind CSS', category: 'Frontend' },
  { id: 6, img: bootstrap, name: 'Bootstrap', category: 'Frontend' },
  { id: 7, img: node, name: 'Node.js', category: 'Backend' },
  { id: 8, img: express, name: 'Express.js', category: 'Backend' },
  { id: 9, img: mongodb, name: 'MongoDB', category: 'Backend' },
  { id: 10, img: git, name: 'Git', category: 'Tools' },
  { id: 11, img: github, name: 'GitHub', category: 'Tools' },
  { id: 12, img: vercel, name: 'Vercel', category: 'Tools' },
  { id: 13, img: render, name: 'Render', category: 'Tools' },
]

const categories = ['All', 'Frontend', 'Backend', 'Tools']

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All')

  const filteredSkills =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab)

  return (
    <section 
      id="skills" 
      className="bg-[#F8FAFC] dark:bg-[#0B0F17] py-14 sm:py-20 lg:py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800/80 transition-colors">
            Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mt-4 transition-colors">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 transition-colors">
            A comprehensive overview of the frameworks, databases, and tooling I use across the development lifecycle.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6 sm:mt-8">
            {categories.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200 dark:shadow-none'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {filteredSkills.map((item) => (
            <div
              key={item.id}
              className="
                group relative bg-white dark:bg-slate-900/90 rounded-2xl p-4 sm:p-5 
                flex flex-col items-center justify-center 
                border border-slate-200/90 dark:border-slate-800 shadow-2xs 
                hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 
                hover:-translate-y-1 transition-all duration-200
              "
            >
              {/* Image Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 transition-colors duration-200 mb-3 p-2.5 ">
                <img
                  src={item.img}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title & Badge */}
              <span className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-center">
                {item.name}
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 font-medium">
                {item.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills