'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631829/Book_20260211_034220_0000_y2fsyh.png"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631828/1000289853.png_1_fskq0t.jpg"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631822/Book_20260131_162054_0000_tnpbvi.png"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631810/20250827_185603_qdfahv.png"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631806/Book_20260131_130102_0000_tyqd2e.png"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631803/1000289853_1.png_eqvudl.jpg"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631787/Our_Services_20250905_220222_0000_pgyfcp.png"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631787/Wokcity_flyer_design1_ybnrq6.jpg"
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631783/Easter_Flyer_Design_gfd6jm.jpg"
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631780/Ifed_Flyer_Design_ecesh1.png"
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631777/Our_Services_20250929_180644_0000_yii2m4.png"
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631777/20250807_082750_gvb2xd.jpg"
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631758/Entimos_Scents_dfk1jh.png"
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631754/1000006050.png_rm0rgv.jpg"
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631745/1000289853.png_pkk33o.jpg"
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631741/Invoice_Design_ypldhf.jpg"
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631733/New_Month_Design_aquyzl.jpg"
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631730/20250807_082732_mxzwab.jpg"
    },
    {
      id: 19,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631727/1000357591.png_1_mxiq2d.jpg"
    },
    {
      id: 20,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631723/1000391459.png_s3ed0y.jpg"
    },
    {
      id: 21,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631712/Book_20260104_214803_0000_qdiwkn.png"
    },
    {
      id: 22,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631686/FadLuxe_20260201_071804_0000_nq25zc.png"
    },
    {
      id: 23,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631682/Valentine_With_Ammies_Delight_qtlapg.png"
    },
    {
      id: 24,
      src: "https://res.cloudinary.com/dw3tqpt60/image/upload/v1774631650/1000302796.png_svakyy.jpg"
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Gallery Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Gallery
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Single Gallery Grid for all images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img 
                  src={image.src}
                  alt={`Gallery Image ${image.id}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={`Gallery Image ${galleryImages[selectedImage].id}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/70 text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing together. Get in touch to discuss your design needs.
          </p>
          <Button variant="gradient" size="xl" className="btn-premium hover-lift" asChild>
            <Link href="/contact" className="flex items-center gap-4">
              Start Your Project 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
