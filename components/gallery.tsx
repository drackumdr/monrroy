"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"

const images = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&q=80",
  "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=500&q=80",
  "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=500&q=80",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&q=80",
  "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=500&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
  "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&q=80",
  "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&q=80",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&q=80",
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="bg-[#D9D9DE] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#0A0A0A] mb-4">
            Nuestras instalaciones
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#A7A9B8] max-w-2xl mx-auto">
            Hospitales Star Médica cuenta con tecnología de punta y espacios diseñados para tu comodidad
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <button
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer w-full"
              >
                <Image
                  src={image}
                  alt={`Instalaciones de Orthopedic Center ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/30 transition-colors flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-[#F8F8FA] opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-[#F8F8FA] hover:text-[#2BB8F2] transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F8F8FA]/10 hover:bg-[#F8F8FA]/20 rounded-full flex items-center justify-center text-[#F8F8FA] transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              className="relative max-w-4xl max-h-[80vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentImage]}
                alt={`Instalaciones de Orthopedic Center ${currentImage + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F8F8FA]/10 hover:bg-[#F8F8FA]/20 rounded-full flex items-center justify-center text-[#F8F8FA] transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#F8F8FA] font-[family-name:var(--font-inter)]">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
