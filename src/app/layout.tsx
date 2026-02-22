import type { Metadata } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins' 
})
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk' 
})

export const metadata: Metadata = {
  title: 'BayT Designs - Crafting Visual Identities That Make Brands Unforgettable',
  description: 'Premium graphic design studio specializing in branding, social media, and creative assets for startups, Web3 projects, and tech brands.',
  keywords: ['graphic design', 'branding', 'social media', 'web3', 'creative studio', 'logo design', 'visual identity'],
  authors: [{ name: 'BayT Designs' }],
  openGraph: {
    title: 'BayT Designs - Premium Creative Studio',
    description: 'Crafting Visual Identities That Make Brands Unforgettable',
    type: 'website',
    url: 'https://baytdesigns.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BayT Designs - Premium Creative Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayT Designs - Premium Creative Studio',
    description: 'Crafting Visual Identities That Make Brands Unforgettable',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
