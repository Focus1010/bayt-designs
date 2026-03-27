import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { aboutContent, skills, timeline, testimonials } from '@/data/about'
import Link from 'next/link'
import { ArrowRight, Award, Target, Users, Zap } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                BayT Designs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {aboutContent.mission}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {aboutContent.story}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We specialize in creating visual identities that resonate with modern audiences, 
                with a particular focus on tech startups, Web3 projects, and innovative brands 
                looking to make their mark in the digital landscape.
              </p>
              <Button variant="gradient" size="xl" className="btn-premium hover-lift" asChild>
                <Link href="/portfolio" className="flex items-center gap-4">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dw3tqpt60/image/upload/v1774645350/photo_2026-03-27_22-02-00_mj3ozi.jpg"
                alt="BayT Designs Team"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
