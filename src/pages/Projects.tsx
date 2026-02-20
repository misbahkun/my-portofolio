import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Helmet } from 'react-helmet-async'

export function Projects() {
  return (
    <div className="prose dark:prose-invert">
      <Helmet>
        <title>Projects — Misbahudin</title>
        <meta name="description" content="A collection of projects I've built — web apps, APIs, and more using React, Laravel, Go, and Next.js." />
        <meta property="og:title" content="Projects — Misbahudin" />
        <meta property="og:description" content="A collection of projects I've built — web apps, APIs, and more using React, Laravel, Go, and Next.js." />
      </Helmet>
      <h1 className="text-center mt-5">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
