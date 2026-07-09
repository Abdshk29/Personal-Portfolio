'use client'

import { motion } from 'framer-motion'
import { aboutContent } from '@/config/siteConfig'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="section-spacing bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="heading-lg text-neutral-900 dark:text-neutral-50 mb-2">About</h2>
          <div className="w-12 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl space-y-6"
        >
          <motion.p variants={itemVariants} className="text-body-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {aboutContent.intro}
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 uppercase tracking-wide">
              Focus Areas
            </p>
            <ul className="space-y-2">
              {aboutContent.focus.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-neutral-600 dark:text-neutral-400">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p variants={itemVariants} className="text-body-lg text-neutral-600 dark:text-neutral-400 leading-relaxed border-l-4 border-primary-600 dark:border-primary-400 pl-4">
            {aboutContent.currentlyBuilding}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
