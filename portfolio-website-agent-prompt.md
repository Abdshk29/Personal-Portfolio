# Portfolio Website Build Prompt

Copy everything below the line into your AI coding agent.

---

## Task

Build a personal portfolio website using **Next.js 15 (App Router)** with **TypeScript** and **Tailwind CSS**. This is for a Final-Year AI/ML student targeting jobs and freelance clients, so the design must look like it was built by a professional product designer — NOT like a generic AI-generated ("vibe coded") template. No purple gradients on dark backgrounds, no cookie-cutter glassmorphism cards, no default Tailwind UI clones, no cheesy floating blob shapes, no excessive emojis.

## Tech Stack

- Next.js 15, App Router, TypeScript
- Tailwind CSS (v4 if available, otherwise latest v3)
- Framer Motion for subtle, purposeful micro-interactions only (no gratuitous animation)
- lucide-react for icons
- next/font for typography (self-hosted, no FOUT)
- Fully static — no backend/database needed. Deployment target is Vercel, but do not add any Vercel-specific config beyond what's default.

## Design Direction

- Pick ONE deliberate design language and execute it consistently: a clean, editorial, "engineer-portfolio" aesthetic — generous whitespace, a strong type scale, a restrained color palette (1 neutral base + 1 accent color, used sparingly), and real grid alignment.
- Typography-led design: use a distinctive but professional font pairing (e.g., a geometric sans for headings + a readable sans/serif for body). Avoid Inter-only defaults if possible — consider something like Geist, Söhne-style, or a serif/sans pairing for character.
- Light mode by default, with a dark mode toggle (persist choice in localStorage, respect prefers-color-scheme on first load).
- No stock hero illustrations, no AI-generated blob art, no generic "coding" gifs. If any imagery is used, keep it minimal — this should be typography + layout driven.
- Fully responsive: mobile-first, test breakpoints at 375px, 768px, 1024px, 1440px. Navigation collapses into a clean mobile menu (not a cluttered hamburger drawer with animations for the sake of it).
- Accessible: proper semantic HTML, ARIA labels on icon-only buttons/links, visible focus states, color contrast passing WCAG AA, keyboard navigable.
- Subtle scroll-triggered fade/slide-in on section entry is fine; avoid parallax gimmicks, typewriter effects, or particle backgrounds.

## Site Structure / Sections

1. **Navbar** — sticky, minimal, logo/name on the left, nav links + dark mode toggle on right. Mobile: clean collapsible menu.
2. **Hero Section**
   - Name, professional title (e.g., "AI/ML Engineer" or "Final-Year AI Student & Builder" — I'll finalize wording), one-line value proposition.
   - Two CTAs: "Download Resume" (button, links to a PDF in /public) and "Get in Touch" (scrolls to contact section).
   - Small line noting current status (e.g., "Final-year AI student at NTU, building production AI systems").
3. **About Section** — 2–3 short paragraphs about background, focus areas (AI/ML, full-stack, automation), and what I'm currently building. Keep it human, not corporate-jargon-heavy.
4. **Skills Section** — grouped by category (e.g., Languages, AI/ML, Frontend, Backend, Tools/Infra). Display as clean grouped tags/badges, not progress bars or star ratings (those look unprofessional/unverifiable).
5. **Projects Section** — card grid (2–3 columns desktop, 1 column mobile). Each project card includes:
   - Project name
   - 1–2 line description
   - Tech stack tags
   - "View Repo" link (GitHub icon + link, opens in new tab)
   - Optional "Live Demo" link if applicable
   - Use a placeholder array of project objects at the top of the component so I can edit title/description/repoUrl/liveUrl/tags easily. Pre-fill with these projects as placeholders (I'll edit details):
     - AasaanLearn — AI-powered accessibility platform for students with dyslexia, visual impairment, and autism (FastAPI, Next.js, Supabase, Gemini)
     - ScholarAI — n8n/Gemini-based scholarship eligibility checker with full SaaS frontend
     - Erasure — in-browser background removal app using WebAssembly AI
     - Fashion Recommendation System
     - Course Recommendation Chatbot
     - Scholarship Eligibility Checker
   - GitHub base: `https://github.com/Abdshk29` — use this to construct/placeholder repo links.
6. **Experience Section** — simple timeline/list style (not a flashy animated timeline). Include: AI Automation Intern @ CodeCelix, with a short description of responsibilities/impact (placeholder text I'll edit).
7. **Contact Section**
   - Email (mailto: link) — placeholder: `your.email@example.com`
   - WhatsApp — button/link using `https://wa.me/<number>` format (placeholder number, I'll insert my real one)
   - Social icon links: GitHub, LinkedIn, Instagram — placeholder URLs, using lucide-react icons, all opening in new tabs with `rel="noopener noreferrer"`
   - Keep this section simple — icon row + direct links. Do NOT build a contact form (no backend), just direct contact methods.
8. **Footer** — minimal: name, © year (dynamic via `new Date().getFullYear()`), maybe a "Built with Next.js" note.

## Functional Requirements

- Resume download button links to `/public/resume.pdf` (create the public folder structure with a placeholder file path, I will replace the actual PDF).
- All social/contact links pulled from a single `config.ts` or `siteConfig` object at the top level (not hardcoded across components) so I can update email, phone, and URLs in ONE place:
  ```ts
  export const siteConfig = {
    name: "",
    title: "",
    email: "",
    whatsapp: "", // digits only, e.g. "923001234567"
    github: "https://github.com/Abdshk29",
    linkedin: "",
    instagram: "",
    resumeUrl: "/resume.pdf",
  }
  ```
- Smooth scroll for in-page nav links.
- SEO basics: proper `metadata` export in layout.tsx (title, description, Open Graph tags, favicon).
- Lighthouse-friendly: optimized images via `next/image`, no layout shift, minimal JS bundle.

## Code Quality Requirements

- Clean component structure: separate components per section (`Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx`, `Footer.tsx`, `Navbar.tsx`) inside `components/`.
- Use TypeScript interfaces/types for all data structures (projects, skills, experience).
- Tailwind config should define the custom color palette and font families as design tokens rather than using arbitrary values scattered through components.
- Add comments only where logic is non-obvious — don't over-comment.
- Include a `README.md` with setup instructions and a note on where to edit personal info (`siteConfig`, projects array, resume PDF).

## Deliverable

Provide the full project structure and all file contents so it runs immediately with `npm install && npm run dev`. Do not include deployment steps — I will deploy to Vercel myself later.

---

## Notes for me to fill in before/after handing this to the agent:
- My real email, WhatsApp number, LinkedIn URL, Instagram URL (`@abdullh._.fr`)
- Actual repo URLs for each project (agent will placeholder `github.com/Abdshk29/project-name`)
- Final resume PDF file
- Final wording for title/tagline/about section
