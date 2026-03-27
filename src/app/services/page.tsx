import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { services } from '@/data/services'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const iconMap: { [key: string]: any } = {
  sparkles: CheckCircle,
  'share-2': CheckCircle,
  cube: CheckCircle,
  palette: CheckCircle,
}

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and engage your audience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || CheckCircle
              return (
                <div key={service.id} className="bg-card p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6">
                    Learn More
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your brand, goals, and target audience.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive design strategy tailored to your needs.'
              },
              {
                step: '03',
                title: 'Design',
                description: 'Our team creates stunning visuals that bring your vision to life.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'We deliver polished designs ready for implementation across all platforms.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950/50 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-heading">
            Let's discuss your project and create something amazing together. Transform your vision into reality with our strategic design expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button variant="gradient" size="xl" className="btn-premium hover-lift" asChild>
              <Link href="/contact" className="flex items-center gap-4">
                Start Your Project
                <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="btn-premium hover-lift" asChild>
              <Link href="/portfolio" className="flex items-center gap-4">
                View Our Work
                <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
