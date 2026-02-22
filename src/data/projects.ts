import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nexus Brand Identity',
    description: 'Complete brand identity and visual system for a decentralized finance platform, including logo design, color palette, and comprehensive brand guidelines.',
    category: 'Brand Identity',
    image: '/projects/nexus-brand.jpg',
    images: [
      '/projects/nexus-brand.jpg',
      '/projects/nexus-logo.jpg',
      '/projects/nexus-guidelines.jpg'
    ],
    tools: ['Illustrator', 'Figma', 'Photoshop'],
    client: 'Nexus Protocol',
    year: 2024,
    featured: true,
    slug: 'nexus-brand-identity'
  },
  {
    id: '2',
    title: 'TechFlow Campaign Posters',
    description: 'Dynamic poster design campaign for a B2B tech startup, featuring marketing materials, event graphics, and campaign visuals.',
    category: 'Poster & Campaign',
    image: '/projects/techflow-social.jpg',
    images: [
      '/projects/techflow-social.jpg',
      '/projects/techflow-templates.jpg',
      '/projects/techflow-animations.jpg'
    ],
    tools: ['Illustrator', 'After Effects', 'InDesign'],
    client: 'TechFlow',
    year: 2024,
    featured: true,
    slug: 'techflow-campaign-posters'
  },
  {
    id: '3',
    title: 'MetaMinds Motion Graphics',
    description: 'Complete motion graphics and digital design for a Web3 gaming platform, including animated content, video graphics, and interactive elements.',
    category: 'Motion & Digital',
    image: '/projects/metaminds-nft.jpg',
    images: [
      '/projects/metaminds-nft.jpg',
      '/projects/metaminds-traits.jpg',
      '/projects/metaminds-collection.jpg'
    ],
    tools: ['After Effects', 'Illustrator', 'Figma'],
    client: 'MetaMinds Studio',
    year: 2023,
    featured: true,
    slug: 'metaminds-motion-graphics'
  },
  {
    id: '4',
    title: 'DeFiLabs Logo System',
    description: 'Comprehensive logo design and brand system for a DeFi research platform, including variations and usage guidelines.',
    category: 'Brand Identity',
    image: '/projects/defilabs-logo.jpg',
    images: [
      '/projects/defilabs-logo.jpg',
      '/projects/defilabs-variations.jpg',
      '/projects/defilabs-guidelines.jpg'
    ],
    tools: ['Illustrator', 'Photoshop'],
    client: 'DeFiLabs',
    year: 2023,
    featured: false,
    slug: 'defilabs-logo-system'
  },
  {
    id: '5',
    title: 'StartupLaunch Brand Package',
    description: 'Complete brand package for a startup accelerator, including logo, business cards, presentation templates, and marketing materials.',
    category: 'Brand Identity',
    image: '/projects/startuplaunch-brand.jpg',
    images: [
      '/projects/startuplaunch-brand.jpg',
      '/projects/startuplaunch-cards.jpg',
      '/projects/startuplaunch-presentation.jpg'
    ],
    tools: ['Illustrator', 'InDesign', 'PowerPoint'],
    client: 'StartupLaunch',
    year: 2024,
    featured: false,
    slug: 'startuplaunch-brand-package'
  },
  {
    id: '6',
    title: 'CryptoCon Event Campaign',
    description: 'Comprehensive event campaign including poster designs, marketing materials, and digital assets for a cryptocurrency conference.',
    category: 'Poster & Campaign',
    image: '/projects/cryptovault-web.jpg',
    images: [
      '/projects/cryptovault-web.jpg',
      '/projects/cryptovault-mobile.jpg',
      '/projects/cryptovault-dashboard.jpg'
    ],
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
    client: 'CryptoCon',
    year: 2023,
    featured: false,
    slug: 'cryptocon-event-campaign'
  }
]

export const categories = [
  'All',
  'Poster & Campaign',
  'Brand Identity',
  'Motion & Digital'
]
