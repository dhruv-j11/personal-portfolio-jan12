'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, Project } from '@/data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProject(project)}
              className="glass-strong rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] min-h-[300px] flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
              <p className="text-white/70 mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full text-sm glass border border-white/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/60 hover:text-white/90 transition-colors duration-300 flex items-center gap-2 text-sm font-medium mt-auto"
                >
                  <span>See GitHub</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-4xl font-bold">{selectedProject.name}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-3xl hover:rotate-90 transition-transform duration-300"
                >
                  ×
                </button>
              </div>
              
              <p className="text-xl text-white/80 mb-6">
                {selectedProject.fullDescription || selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full glass border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl glass-strong hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                  >
                    View Project
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl glass-strong hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

