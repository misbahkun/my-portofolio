export interface Project {
  title: string
  description: string
  image?: string
  github?: string
  private?: boolean
  demo?: string
  tags: string[]
}

export interface ContactItem {
  icon: 'gmail' | 'linkedin' | 'instagram' | 'github'
  label: string
  href: string
  color: string
  external?: boolean
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  lang: 'ID' | 'EN'
  content: string
}

export interface Experience {
  type: 'work' | 'education'
  title: string
  organization: string
  period: string
  description: string
  tags?: string[]
}
