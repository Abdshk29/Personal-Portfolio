'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { navLinks, siteConfig } from '@/config/siteConfig'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
    setIsDark(newIsDark)
  }

  return (
    <nav className="sticky top-0 z-50 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transition-colors duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-xl font-bold text-neutral-900 dark:text-neutral-50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image src={siteConfig.avatar} alt={siteConfig.name} width={32} height={32} />
            </div>
            <span className="leading-none">{siteConfig.name.split(' ')[0]}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-200 dark:border-neutral-800 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
