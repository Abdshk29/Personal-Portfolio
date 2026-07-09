 'use client'
import { siteConfig } from '@/config/siteConfig'
import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 pt-20 pb-12">
      <div className="container-custom w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-800">
              {siteConfig.tagline}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="heading-xl text-neutral-900 dark:text-neutral-50 mb-4">
            {siteConfig.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="heading-sm text-primary-600 dark:text-primary-400 mb-6">
            {siteConfig.title}
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-body-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl leading-relaxed">
            I build production AI systems and full-stack applications that solve real-world problems. Specializing in LLM integration, RAG systems, and accessible technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.resumeUrl}
              download
              className="btn-primary gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-secondary gap-2"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6 mt-12">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
              aria-label="Instagram profile"
            >
              Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
