'use client'

import { motion } from 'framer-motion'
import { contactInfo } from '@/data/contact'

export default function Contact() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: contactInfo.instagram,
      color: 'from-pink-500 to-purple-500',
    },
    {
      name: 'GitHub',
      url: contactInfo.github,
      color: 'from-gray-400 to-gray-600',
    },
    {
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Email',
      url: `mailto:${contactInfo.email}`,
      color: 'from-cyan-400 to-cyan-600',
    },
  ]

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold mb-8 text-center"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-center text-white/70 mb-16 px-4"
        >
          Wanna talk? Reach out somewhere below!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="glass-strong rounded-2xl p-8 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                   style={{
                     background: link.name === 'Instagram' 
                       ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                       : link.name === 'GitHub'
                       ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                       : link.name === 'LinkedIn'
                       ? 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)'
                       : 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)'
                   }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{link.name}</h3>
                {link.name === 'Email' && (
                  <p className="text-white/60 text-sm break-all">{contactInfo.email}</p>
                )}
                <div className="mt-4 flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors duration-300">
                  <span className="text-sm">Visit</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
