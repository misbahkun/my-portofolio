import { Helmet } from 'react-helmet-async'
import { MdWork, MdSchool } from 'react-icons/md'
import { experiences } from '../data/experiences'
import type { Experience as ExperienceType } from '../types'

function TimelineEntry({ entry }: { entry: ExperienceType }) {
  const isWork = entry.type === 'work'

  return (
    <div className="group relative flex gap-5 pb-10 last:pb-0">
      {/* Vertical line connector */}
      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-200 dark:bg-zinc-700 group-last:hidden" />

      {/* Icon dot */}
      <div
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
          isWork
            ? 'border-emerald-400 bg-emerald-50 text-emerald-600 dark:border-emerald-500 dark:bg-emerald-950 dark:text-emerald-400'
            : 'border-blue-400 bg-blue-50 text-blue-600 dark:border-blue-500 dark:bg-blue-950 dark:text-blue-400'
        }`}
      >
        {isWork ? (
          <MdWork className="h-5 w-5" />
        ) : (
          <MdSchool className="h-5 w-5" />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-800/40">
        {/* Header */}
        <div className="mb-3 flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <div>
            <h3 className="m-0 text-base font-bold leading-tight">
              {entry.title}
            </h3>
            <p className="m-0 mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              {entry.organization}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
              isWork
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
            }`}
          >
            {entry.period}
          </span>
        </div>

        {/* Description */}
        <p className="m-0 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {entry.description}
        </p>

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-[.7rem] text-gray-600 dark:bg-zinc-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <div className="prose dark:prose-invert">
      <Helmet>
        <title>Experience — Misbahudin</title>
        <meta
          name="description"
          content="Work experience and education background — internships, freelance projects, and university studies in informatics engineering."
        />
        <meta property="og:title" content="Experience — Misbahudin" />
        <meta
          property="og:description"
          content="Work experience and education background — internships, freelance projects, and university studies in informatics engineering."
        />
      </Helmet>

      <h1 className="text-center mt-5">Experience</h1>

      <div className="not-prose">
        {experiences.map((entry) => (
          <TimelineEntry key={`${entry.type}-${entry.organization}`} entry={entry} />
        ))}
      </div>
    </div>
  )
}
