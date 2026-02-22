# BayT Designs - Portfolio Website

A modern, responsive graphic design portfolio website built with Next.js, TailwindCSS, and Framer Motion.

## 🎨 Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Micro-interactions and page transitions with Framer Motion
- **SEO Optimized**: Built-in SEO optimization and meta tags
- **TypeScript**: Full TypeScript support for better development experience
- **Component-Based**: Reusable UI components with shadcn/ui
- **Content Management**: Simple JSON-based content management system

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui design system
- **Type Safety**: TypeScript
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
bayt-designs/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── about/          # About page
│   │   ├── contact/         # Contact page
│   │   ├── portfolio/       # Portfolio pages
│   │   ├── services/        # Services page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/          # Reusable components
│   │   ├── ui/             # Base UI components
│   │   └── Navbar.tsx      # Navigation component
│   ├── data/               # Content data
│   │   ├── about.ts        # About page content
│   │   ├── projects.ts     # Portfolio projects
│   │   └── services.ts     # Services data
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Tailwind utilities
│   └── types/              # TypeScript type definitions
│       └── index.ts        # Common types
├── public/                 # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bayt-designs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

The website uses a simple JSON-based content management system. You can easily update:

### Projects
Edit `src/data/projects.ts` to add, remove, or modify portfolio projects.

### Services
Update `src/data/services.ts` to change service offerings.

### About Content
Modify `src/data/about.ts` to update about page information, skills, and testimonials.

## 🎨 Customization

### Colors
The theme uses CSS custom properties. Update the color scheme in `src/app/globals.css`:

```css
:root {
  --primary: ...;
  --secondary: ...;
  /* etc */
}
```

### Typography
Font settings are in `src/app/layout.tsx`. Currently using Inter font.

### Animations
Custom animations are defined in `src/app/globals.css` and can be extended as needed.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

### Other Platforms
```bash
npm run build
npm start
```

The `out` directory contains the static files for deployment.

## 📱 Features Breakdown

### Home Page
- Hero section with animated background
- Featured projects showcase
- Services preview
- Client testimonials
- Call-to-action sections

### Portfolio Page
- Filterable project grid
- Category filtering
- Project cards with hover effects
- Responsive masonry layout

### Project Detail Page
- Large hero image
- Project information
- Image gallery
- Tools used
- Next project navigation

### About Page
- Company story
- Values section
- Skills and expertise
- Company timeline
- Client testimonials

### Services Page
- Service cards with features
- Process overview
- Call-to-action

### Contact Page
- Animated contact form
- Contact information
- FAQ section
- Social media links

## 🎯 Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for images
- Efficient bundle splitting
- CSS-in-JS with Tailwind
- Minimal JavaScript overhead

## 🔧 Development

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component

### Adding Components
1. Create component in `src/components/`
2. Follow the existing naming conventions
3. Use TypeScript for type safety

### Styling Guidelines
- Use Tailwind utility classes
- Follow the existing color scheme
- Maintain responsive design
- Use semantic HTML

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For any questions or support, please contact:
- Email: hello@baytdesigns.com
- Website: baytdesigns.com

---

Built with ❤️ by BayT Designs
