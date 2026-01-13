'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { experience, ExperienceYear } from '@/data/experience'

export default function Experience() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null)

  return (
    <section id="experience" className="min-h-screen py-20 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-4 pb-8">
          {experience.map((yearData, index) => (
            <div key={yearData.year}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setExpandedYear(expandedYear === yearData.year ? null : yearData.year)
                }}
                className="w-full text-left"
              >
                <div className="glass-strong rounded-2xl p-6 transition-all duration-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{yearData.year}</h3>
                    <span
                      className={`text-3xl transition-transform duration-100 ${expandedYear === yearData.year ? 'rotate-180' : ''}`}
                    >
                      ▼
                    </span>
                  </div>
                </div>
              </button>

              {expandedYear === yearData.year && (
                <div className="overflow-hidden"
                >
                    <div className="glass rounded-2xl p-6 mt-4 space-y-6 relative">
                      {yearData.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                        >
                          <div className="flex gap-6 items-start">
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold mb-2">{role.title}</h4>
                              {role.company && (
                                <p className="text-xl text-white/60 mb-3">{role.company}</p>
                              )}
                              <p className="text-white/80 mb-4">{role.description}</p>
                              {role.achievements && (
                                <ul className="list-disc list-inside space-y-2 text-white/70">
                                  {role.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex}>{achievement}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                            {/* Square image placeholder - positioned on the right */}
                            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden glass-strong relative">
                              <Image
                                src={`/images/experience/${yearData.year}-${roleIndex + 1}.png`}
                                alt={`${role.title} - ${yearData.year}`}
                                fill
                                sizes="160px"
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {yearData.skills && (
                        <div className="flex flex-wrap gap-2 pt-4">
                          {yearData.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full text-sm glass border border-white/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

