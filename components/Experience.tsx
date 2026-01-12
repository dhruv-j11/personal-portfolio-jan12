'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience, ExperienceYear } from '@/data/experience'

export default function Experience() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null)

  return (
    <section id="experience" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-4">
          {experience.map((yearData, index) => (
            <motion.div
              key={yearData.year}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <button
                onClick={() => setExpandedYear(expandedYear === yearData.year ? null : yearData.year)}
                className="w-full text-left"
              >
                <motion.div
                  whileHover={{ x: 15, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="glass-strong rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{yearData.year}</h3>
                    <motion.span
                      animate={{ rotate: expandedYear === yearData.year ? 180 : 0 }}
                      className="text-3xl"
                    >
                      ▼
                    </motion.span>
                  </div>
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedYear === yearData.year && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="glass rounded-2xl p-6 mt-4 space-y-6">
                      {yearData.roles.map((role, roleIndex) => (
                        <motion.div
                          key={roleIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: roleIndex * 0.1 }}
                          className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                        >
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
                        </motion.div>
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
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

