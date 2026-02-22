import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, User, ExternalLink } from 'lucide-react'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex(p => p.slug === params.slug)
  const nextProject = projects[currentIndex + 1] || projects[0]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.client && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Client:</span>
                    <span className="text-sm font-medium">{project.client}</span>
                  </div>
                )}
                {project.year && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Year:</span>
                    <span className="text-sm font-medium">{project.year}</span>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="bg-muted px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="gradient" size="lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Live Project
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(project.images || [project.image]).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Project Details</h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
            <p className="text-muted-foreground mb-8">
              The client needed a comprehensive visual identity that would stand out in the competitive {project.category.toLowerCase()} landscape. 
              They wanted something modern, memorable, and aligned with their brand values of innovation and excellence.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
            <p className="text-muted-foreground mb-8">
              We developed a complete brand system that included logo design, color palette, typography, and comprehensive brand guidelines. 
              The solution was designed to be versatile across all touchpoints, from digital platforms to print materials.
            </p>

            <h3 className="text-2xl font-semibold mb-4">The Results</h3>
            <p className="text-muted-foreground mb-8">
              The new brand identity received excellent feedback from stakeholders and customers alike. 
              It successfully positioned the client as a leader in their industry and provided a strong foundation for future marketing efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Next Project</h2>
              <p className="text-lg text-muted-foreground">{nextProject.title}</p>
            </div>
            <Button variant="gradient" size="lg" asChild>
              <Link href={`/portfolio/${nextProject.slug}`}>
                View Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
