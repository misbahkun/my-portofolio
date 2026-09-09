import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    type: 'work',
    title: 'Fullstack Developer Intern',
    organization: 'Startup Tech Tegal',
    period: 'Sep 2026 — Des 2026',
    description:
      'Developed and maintained web applications using Laravel and React. Handled code reviews, git workflow with staging/production branches, and collaborated with the team on feature development.',
    tags: ['Laravel', 'React', 'MySQL', 'Git'],
  },
  {
    type: 'work',
    title: 'Freelance Web Developer',
    organization: 'Self-employed',
    period: 'Jan 2026 — Ags 2026',
    description:
      'Built custom web solutions for local businesses including booking systems and landing pages. Focused on clean UI/UX and responsive design.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js'],
  },
  {
    type: 'education',
    title: 'S1 Teknik Informatika',
    organization: 'Politeknik Harapan Bersama Tegal',
    period: '2023 — 2027',
    description:
      'Studying informatics engineering with focus on web development, mobile development, and machine learning.',
    tags: ['Computer Science', 'Web Dev', 'Machine Learning'],
  },
]
