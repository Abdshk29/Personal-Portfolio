'use client'

import { motion } from 'framer-motion'
import { experience } from '@/config/siteConfig'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="section-spacing bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="heading-lg text-neutral-900 dark:text-neutral-50 mb-2">Experience</h2>
          <div className="w-12 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl space-y-8"
        >
          {experience.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="flex gap-4 md:gap-6">
              {/* Timeline Icon */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0">
                  <Briefcase size={24} />
                </div>
                {index < experience.length - 1 && (
                  <div className="w-0.5 h-24 bg-primary-200 dark:bg-primary-800 mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="heading-sm text-neutral-900 dark:text-neutral-50">
                      {item.role}
                    </h3>
                    <p className="text-base font-medium text-primary-600 dark:text-primary-400">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>

                <ul className="space-y-2 mt-4">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body text-neutral-600 dark:text-neutral-400">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
