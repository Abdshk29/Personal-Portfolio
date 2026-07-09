'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/siteConfig'
import { Mail, MessageCircle, Github, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+' + siteConfig.whatsapp.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, '$1 $2 $3'),
      href: `https://wa.me/${siteConfig.whatsapp}`,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: siteConfig.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: siteConfig.linkedin,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: siteConfig.instagram,
    },
  ]

  return (
    <section id="contact" className="section-spacing bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="heading-lg text-neutral-900 dark:text-neutral-50 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-body-lg text-neutral-600 dark:text-neutral-400">
            Have a project in mind or want to collaborate? Let&apos;s connect.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.href}
                target={method.label === 'Email' ? undefined : '_blank'}
                rel={method.label === 'Email' ? undefined : 'noopener noreferrer'}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 p-6 rounded-lg bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {method.label}
                  </p>
                  <p className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center border-t border-neutral-200 dark:border-neutral-700 pt-12"
        >
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-6">
            Connect with me on social media
          </p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
