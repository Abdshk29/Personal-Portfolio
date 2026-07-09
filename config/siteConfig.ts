export const siteConfig = {
  name: 'Muhammad Abdullah',
  title: 'AI/ML Engineer',
  description:
    'An Artificial Intelligence graduate with hands-on experience in AI, Machine Learning, Computer Vision, and full-stack development. Passionate about building real-world, data-driven solutions through intelligent automation and modern technologies.',
  email: 'abdshk28@gmail.com',
  whatsapp: '923066968696', // digits only (international format without +)
  github: 'https://github.com/Abdshk29',
  linkedin: 'https://www.linkedin.com/in/muhammad-abdullah/',
  instagram: '',
  resumeUrl: '/resume.pdf',
  avatar: '/profile.svg',
  tagline: 'AI/ML Engineer — building production-ready AI systems',
}

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export const skills = {
  languages: ['Python', 'SQL', 'JavaScript', 'HTML/CSS', 'Java'],
  AI: ['LLMs', 'RAG', 'Fine-tuning', 'Computer Vision', 'NLP', 'TensorFlow', 'PyTorch'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  backend: ['FastAPI', 'Node.js', 'Express', 'Supabase', 'Firebase', 'MongoDB'],
  tools: ['GitHub', 'VS Code', 'Docker', 'n8n', 'Kaggle', 'Google Colab', 'Jupyter Notebook'],
}

export const projects = [
  {
    name: 'AasaanLearn (Final Year Project)',
    description:
      'AI-based accessibility platform that converts uploaded PDFs into flashcards and auto-generated quizzes tailored for dyslexic, autistic, and visually-impaired students.',
    tags: ['Next.js', 'FastAPI', 'Firebase', 'OpenAI', 'Edge TTS', 'Accessibility'],
    repoUrl: 'https://github.com/Abdshk29/aasaanlearn',
    liveUrl: '',
  },
  {
    name: 'Flash Quiz+',
    description: 'Interactive quiz platform with AI-generated questions and adaptive learning paths.',
    tags: ['Next.js', 'Node.js', 'Supabase', 'Gemini AI'],
    repoUrl: '',
    liveUrl: '',
  },
  {
    name: 'NextGen Tech',
    description: 'Tech website for startups to establish a digital presence and engage users.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'TypeScript'],
    repoUrl: '',
    liveUrl: '',
  },
  {
    name: 'Scholarship Eligibility Checker',
    description: 'n8n + Gemini AI workflow that extracts academic details from CNICs and transcripts, matches students with eligible scholarships in real time.',
    tags: ['n8n', 'Gemini', 'Automation'],
    repoUrl: '',
    liveUrl: '',
  },
]

export const experience = [
  {
    role: 'AI Automation Intern',
    company: 'CodeCelix',
    duration: 'Oct 2025 - Nov 2025',
    description: [
      'Provided AI-powered solutions using modern tech stack',
      'Built Speech-to-Text applications and other AI prototypes',
      'Designed and implemented automation workflows using n8n and LLMs',
    ],
  },
]

export const aboutContent = {
  intro:
    'An Artificial Intelligence graduate with hands-on experience in AI, Machine Learning, Computer Vision, and full-stack development. Passionate about building real-world, data-driven solutions through intelligent automation and modern technologies.',
  focus: [
    'Building AI-powered applications that solve real-world problems',
    'Full-stack development with modern frameworks and tools',
    'LLM integration, RAG systems, and AI automation',
    'Accessibility-first design and inclusive technology',
  ],
  currentlyBuilding:
    "Developing education-focused AI tools and AI automation workflows; awarded 1st position for final year project (AasaanLearn).",
}
