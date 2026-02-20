import type { BlogPost } from '../types'

const modules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n?([\s\S]*)/)
  if (!match) return { data: {}, content: raw }

  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const colonIndex = line.indexOf(':')
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim()
      data[key] = value
    }
  }

  return { data, content: match[2].trim() }
}

export const blogPosts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace('../content/blog/', '').replace('.md', '')
    const { data, content } = parseFrontmatter(raw as string)
    return {
      slug,
      title: data.title ?? '',
      date: data.date ?? '',
      lang: (data.lang as 'ID' | 'EN') ?? 'EN',
      content,
    }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
