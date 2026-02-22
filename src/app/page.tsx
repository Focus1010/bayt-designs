import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Star, Zap, Shield, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-950 animate-background-pulse" />
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-blue-900/20 via-transparent to-transparent" />
          
          {/* Animated gradient mesh */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 animate-gradient" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-500/20 via-transparent to-blue-500/20 animate-gradient" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-0 left-1/4 w-3/4 h-1/2 bg-gradient-to-tr from-blue-700/20 via-transparent to-cyan-700/20 animate-gradient" style={{ animationDelay: '4s' }} />
          </div>
          
          {/* Floating gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/40 to-cyan-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/35 to-blue-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-blue-600/25 to-cyan-500/10 rounded-full blur-2xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] bg-gradient-to-br from-cyan-600/20 to-blue-500/8 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '5s' }} />
          
          {/* Particle effects */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-8 leading-tight tracking-tight">
              <span className="block text-foreground mb-3">Crafting Visual Identities</span>
              <span className="block text-transparent bg-clip-text gradient-text font-bold">
                That Make Brands Unforgettable
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-heading tracking-wide">
              Premium graphic design studio specializing in branding, social media, and creative assets for startups, Web3 projects, and tech brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button variant="gradient" size="xl" className="btn-premium hover-lift" asChild>
                <Link href="/portfolio" className="flex items-center gap-4">
                  <span>View Work</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" className="btn-premium hover-lift" asChild>
                <Link href="/contact" className="flex items-center gap-4">
                  <span>Start a Project</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-heading tracking-wide">
              Discover our latest work and see how we've helped brands stand out in the digital landscape with strategic visual design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Nexus Brand Identity',
                category: 'Brand Identity',
                description: 'Complete brand identity and visual system for a decentralized finance platform, including logo design, color palette, and comprehensive brand guidelines.',
                image: '/projects/nexus-brand.jpg',
                featured: true
              },
              {
                title: 'TechFlow Campaign Posters',
                category: 'Poster & Campaign',
                description: 'Dynamic poster design campaign for a B2B tech startup, featuring marketing materials, event graphics, and campaign visuals.',
                image: '/projects/techflow-social.jpg'
              },
              {
                title: 'MetaMinds Motion Graphics',
                category: 'Motion & Digital',
                description: 'Complete motion graphics and digital design for a Web3 gaming platform, including animated content, video graphics, and interactive elements.',
                image: '/projects/metaminds-nft.jpg'
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-8 card-premium hover-lift">
                  <div className="aspect-video gradient-bg opacity-90" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Button variant="glass" size="lg" className="animate-scale-in">
                      View Project
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-8 right-8">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full shadow-xl">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground group-hover:text-primary transition-all duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4 font-medium text-lg font-accent">{project.category}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-accent">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {['Illustrator', 'Figma', 'Photoshop'].slice(0, 3).map((tool) => (
                    <span key={tool} className="text-xs bg-muted/80 text-muted-foreground px-4 py-2 rounded-full font-medium border border-border/50">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Button variant="outline" size="xl" className="btn-premium hover-lift" asChild>
              <Link href="/portfolio" className="flex items-center gap-4">
                <span>View All Projects</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From brand identity to digital experiences, we offer comprehensive design solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Poster & Campaign Designs',
                description: 'Eye-catching poster designs and comprehensive campaign visuals that capture attention and drive engagement.'
              },
              {
                icon: Globe,
                title: 'Brand Identity Projects',
                description: 'Complete brand identity development including logos, color systems, typography, and comprehensive brand guidelines.'
              },
              {
                icon: Zap,
                title: 'Motion & Digital Projects',
                description: 'Dynamic motion graphics and digital design solutions that bring your brand to life with engaging animated content.'
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/services">
                All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                company: 'Nexus Protocol',
                content: 'BayT Designs transformed our vision into a stunning brand identity. Their understanding of the Web3 space is unmatched.'
              },
              {
                name: 'Marcus Rodriguez',
                company: 'TechFlow',
                content: 'Working with BayT Designs was a game-changer for our social media presence. Engagement increased by 300%.'
              },
              {
                name: 'Emily Watson',
                company: 'MetaMinds Studio',
                content: 'The NFT collection BayT Designs created for us exceeded all expectations. Creative, professional, and delivered on time.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 rounded-lg bg-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to bring your brand vision to life with stunning visual design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">BayT Designs</span>
              </div>
              <p className="text-muted-foreground">
                Crafting visual identities that make brands unforgettable.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Poster & Campaign Designs</li>
                <li>Brand Identity Projects</li>
                <li>Motion & Digital Projects</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
                <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Dribbble</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BayT Designs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
