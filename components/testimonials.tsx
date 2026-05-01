"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    name: "Roberto C.",
    treatment: "Cirugía de Columna",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    quote: "Tenía una hernia que no me dejaba caminar. Me operé y a los 3 meses ya estaba corriendo. Excelente atención en Star Médica.",
  },
  {
    name: "Sofía R.",
    treatment: "Reconstrucción de LCA",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
    quote: "Me lesioné el ligamento jugando fútbol. La cirugía fue perfecta y hoy estoy de vuelta al 100%. Muy agradecida.",
  },
  {
    name: "Jorge M.",
    treatment: "Reemplazo de Rodilla",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&q=80",
    quote: "A mis 67 años tenía artrosis severa. La recuperación fue más rápida de lo esperado y ya no tengo dolor. Excelente decisión.",
  },
  {
    name: "Elena V.",
    treatment: "Artroscopia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote: "Desde la primera consulta sentí confianza. En una semana ya caminaba sin molestias. Muy profesional.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      items.push(testimonials[index])
    }
    return items
  }

  return (
    <section id="testimonios" className="bg-[#F5F4FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#0A0A0A] mb-4">
            Lo que dicen nuestros pacientes
          </h2>
        </AnimatedSection>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Desktop View - 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <AnimatedSection key={`${testimonial.name}-${index}`} delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>

          {/* Tablet View - 2 cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
            {getVisibleTestimonials().slice(0, 2).map((testimonial, index) => (
              <AnimatedSection key={`${testimonial.name}-${index}`} delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile View - 1 card */}
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 bg-[#3535B0] text-[#F5F4FA] rounded-full flex items-center justify-center hover:bg-[#4B45C4] transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 bg-[#3535B0] text-[#F5F4FA] rounded-full flex items-center justify-center hover:bg-[#4B45C4] transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#3535B0]" : "bg-[#E8E5F5]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E5F5] h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-[family-name:var(--font-poppins)] font-semibold text-[#0A0A0A]">
            {testimonial.name}
          </div>
          <div className="font-[family-name:var(--font-inter)] text-sm text-[#00C0F0]">
            {testimonial.treatment}
          </div>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-[#3535B0]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="font-[family-name:var(--font-inter)] text-[#0A0A0A]/80 leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  )
}
