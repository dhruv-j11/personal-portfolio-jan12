"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, Project } from '@/data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-strong rounded-2xl overflow-hidden cursor-pointer transition-all duration-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.01] flex flex-col min-h-[500px]"
            >
              {/* Image placeholder at top - 60% */}
              <div className="relative w-full h-[300px] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/40 text-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image ? `/images/projects/${project.image}` : `/images/projects/project-${index + 1}.png`}
                    alt={project.name}
                    fill
                    sizes="(min-width: 768px) 600px, 400px"
                    className="object-cover"
                  />
                </div>
                {/* Blur from bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0f] to-transparent pointer-events-none" />
              </div>
              
              {/* Content at bottom - 40% */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-white/70 mb-2 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm glass border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/60 hover:text-white/90 transition-colors duration-100 flex items-center gap-2 text-sm font-medium mt-auto"
                  >
                    <span>See GitHub</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
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
            </div>
          </div>
        )}
    </section>
  )
}

