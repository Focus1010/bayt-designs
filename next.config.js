/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    formats: ['image/webp', 'image/avif'],
  },
  metadataBase: new URL('https://bayt-designs.vercel.app'),
}

module.exports = nextConfig
