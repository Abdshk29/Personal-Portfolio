import { siteConfig } from '@/config/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
              {siteConfig.name}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Center - Built with */}
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Next.js
            </a>
            {' '}& hosted on{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Vercel
            </a>
          </p>

          {/* Right - CTA */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
          >
            Get in touch
          </a>
        </div>
      </div>
    </footer>
  )
}
