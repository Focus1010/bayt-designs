import { Skill, TimelineItem, Testimonial } from '@/types'

export const skills: Skill[] = [
  { name: 'Canva', level: 95, category: 'Design Software' },
  { name: 'Adobe Photoshop', level: 90, category: 'Design Software' },
  { name: 'Adobe Illustrator', level: 85, category: 'Design Software' },
  { name: 'Figma', level: 80, category: 'Design Software' },
  { name: 'Pixellab', level: 85, category: 'Design Software' },
  { name: 'Brand Strategy', level: 90, category: 'Strategy' },
  { name: 'Marketing Design', level: 88, category: 'Marketing' },
  { name: 'Typography', level: 85, category: 'Design Principles' },
  { name: 'Color Theory', level: 85, category: 'Design Principles' },
  { name: 'Layout Design', level: 88, category: 'Design Principles' }
]

export const timeline: TimelineItem[] = [
  {
    id: '1',
    year: '2024',
    title: 'BayT Designs Founded',
    description: 'Founded BayT Designs in Lagos, Nigeria, focusing on strategic visual design for brands.',
    type: 'milestone'
  },
  {
    id: '2',
    year: '2023',
    title: 'Marketing Design Expertise',
    description: 'Developed expertise in marketing design, working with startups and digital brands on campaign visuals.',
    type: 'milestone'
  },
  {
    id: '3',
    year: '2019',
    title: 'Design Journey Began',
    description: 'Started professional design career, combining marketing background with creative design skills.',
    type: 'milestone'
  },
  {
    id: '4',
    year: '2018',
    title: 'Marketing Foundation',
    description: 'Built strong foundation in marketing principles that inform strategic design decisions.',
    type: 'milestone'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    company: 'TechFlow Startup',
    content: 'Ayantola created amazing campaign visuals for our product launch. Her strategic approach to design helped us stand out in a crowded market. The results exceeded our expectations!',
    avatar: '/testimonials/sarah.jpg'
  },
  {
    id: '2',
    name: 'Michael Roberts',
    company: 'Digital Marketing Agency',
    content: 'Working with BayT Designs has been fantastic. The social media designs and marketing materials are consistently high-quality and deliver great engagement for our clients.',
    avatar: '/testimonials/michael.jpg'
  },
  {
    id: '3',
    name: 'Emily Watson',
    company: 'E-commerce Brand',
    content: 'The brand identity package BayT Designs created for us perfectly captures our essence. Professional, creative, and delivered on time. Highly recommend!',
    avatar: '/testimonials/emily.jpg'
  }
]

export const aboutContent = {
  title: "About BayT Designs",
  subtitle: "Strategic Visual Design That Drives Results",
  description: "I'm Ayantola Ayomide, a creative and detail-oriented Graphic Designer based in Lagos, Nigeria, and founder of BayT Designs. With a background in Marketing and over five years of hands-on design experience, I specialize in creating strategic visual identities and high-impact marketing designs that help brands stand out and communicate clearly.",
  story: "My work focuses on brand identity development, social media design, campaign visuals, and marketing materials. I combine creativity with strategic thinking to transform ideas into clean, modern, and engaging visual solutions that strengthen brand presence and drive results.",
  mission: "Beyond aesthetics, I believe design should communicate, connect, and convert. My goal is to build visuals that are not only beautiful but purposeful.",
  vision: "To help brands create meaningful connections through strategic visual design that drives business growth and audience engagement.",
  values: [
    {
      title: "Creativity",
      description: "Innovative design solutions that push boundaries and capture attention."
    },
    {
      title: "Strategy",
      description: "Purposeful design that aligns with your business goals and target audience."
    },
    {
      title: "Quality",
      description: "Meticulous attention to detail and commitment to excellence in every project."
    },
    {
      title: "Impact",
      description: "Design that drives results and creates meaningful connections with your audience."
    }
  ]
}
