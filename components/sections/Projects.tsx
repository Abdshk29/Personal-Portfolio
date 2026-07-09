'use client'

import { motion } from 'framer-motion'
import { projects } from '@/config/siteConfig'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="section-spacing bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="heading-lg text-neutral-900 dark:text-neutral-50 mb-2">Projects</h2>
          <div className="w-12 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group h-full bg-neutral-50 dark:bg-neutral-700 rounded-lg border border-neutral-200 dark:border-neutral-600 p-6 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
            >
              {/* Project Name */}
              <h3 className="heading-sm text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-body text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-600">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
                  aria-label={`View ${project.name} repository`}
                >
                  <Github size={16} />
                  Repo
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
