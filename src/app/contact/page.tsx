'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'ayantola41@gmail.com',
          from: formData.email,
          subject: `New Project Inquiry: ${formData.projectType}`,
          text: `
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Message:
${formData.message}
          `.trim()
        })
      })

      if (response.ok) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', projectType: '', message: '' })
        }, 3000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setIsSubmitting(false)
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at ayantola41@gmail.com')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Get in {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    >
                      <option value="">Select a project type</option>
                      <option value="poster-campaign">Poster & Campaign Designs</option>
                      <option value="brand-identity">Brand Identity Projects</option>
                      <option value="motion-digital">Motion & Digital Projects</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  We're excited to hear about your project. Whether you have a specific brief or just want to explore ideas, 
                  we're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">ayantola41@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+234 915 193 4912</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM WAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Based in Nigeria (Available Worldwide)</p>
                    <p className="text-sm text-muted-foreground">Remote design services globally</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="hover-lift" asChild>
                    <a href="https://x.com/iambay_t" target="_blank" rel="noopener noreferrer">
                      X - @iambay_t
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="hover-lift" asChild>
                    <a href="https://instagram.com/iambay_t" target="_blank" rel="noopener noreferrer">
                      IG - @iambay_t
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="hover-lift" asChild>
                    <a href="https://tiktok.com/@bayt_designs" target="_blank" rel="noopener noreferrer">
                      TikTok - @bayt_designs
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about working with us.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary depending on scope and complexity. A typical branding project takes 2-4 weeks, while social media and Web3 projects can take 3-6 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "How do you price your projects?",
                answer: "We offer custom pricing based on project scope, timeline, and specific requirements. After our initial consultation, we'll provide a detailed proposal with transparent pricing and no hidden fees."
              },
              {
                question: "Do you work with startups and small businesses?",
                answer: "Absolutely! We love working with innovative startups and small businesses. We offer flexible pricing and can scale our services to match your budget and growth stage."
              },
              {
                question: "What file formats do you deliver?",
                answer: "We provide all necessary file formats including vector files (AI, SVG), high-resolution images (PNG, JPG), and source files (PSD, Figma). We'll ensure you have everything needed for both print and digital use."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
