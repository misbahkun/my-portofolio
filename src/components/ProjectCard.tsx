import { MdOpenInNew } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden not-prose">
      {project.image && (
        <a
          href={project.github || project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
        </a>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h5 className="font-bold text-lg my-0">{project.title}</h5>
          <div className="flex items-center gap-2 shrink-0">
            {project.github && (
              project.private ? (
                <span
                  title="Private repository"
                  className="opacity-30 cursor-not-allowed text-gray-500"
                >
                  <FaGithub className="w-5 h-5" />
                </span>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${project.title} Github link`}
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                title={`${project.title} Live demo`}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <MdOpenInNew className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 my-0 mb-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[.7rem] px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
