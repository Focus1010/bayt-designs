export interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  images?: string[]
  tools: string[]
  client?: string
  year?: number
  featured?: boolean
  slug: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Testimonial {
  id: string
  name: string
  company: string
  content: string
  avatar?: string
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
  type: 'milestone' | 'project' | 'achievement'
}
