"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

const areas = [
  "Columna",
  "Rodilla",
  "Hombro",
  "Cadera",
  "Ligamentos",
  "Meniscos",
]

export function PrpSection() {
  return (
    <section className="bg-[#F5F4FA] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <AnimatedSection className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto lg:mx-0">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prp.jpg`}
                alt="Terapia PRP - Plasma Rico en Plaquetas - Dr. Gustavo Monrroy"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-[#3535B0]/20 rounded-full blur-3xl" />
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={100} className="order-1 lg:order-2">
            <span className="inline-block bg-[#3535B0]/10 text-[#3535B0] text-xs font-[family-name:var(--font-poppins)] font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Medicina Regenerativa
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#0A0A0A] mb-3 text-balance">
              Terapia PRP
            </h2>
            <p className="font-[family-name:var(--font-poppins)] text-[#3535B0] text-lg font-medium mb-4">
              Plasma Rico en Plaquetas
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#0A0A0A]/75 leading-relaxed mb-6">
              Utilizamos tu propia sangre para extraer factores de crecimiento concentrados que estimulan la regeneración natural del tejido dañado. Es una alternativa mínimamente invasiva que reduce el dolor y acelera la recuperación sin necesidad de cirugía.
            </p>

            {/* Areas */}
            <div className="mb-8">
              <p className="font-[family-name:var(--font-poppins)] font-semibold text-[#0A0A0A] mb-3 text-sm uppercase tracking-wide">
                Indicado para
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="bg-white border border-[#3535B0]/20 text-[#3535B0] px-4 py-1.5 rounded-full text-sm font-[family-name:var(--font-inter)] font-medium shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "Sin cirugía ni hospitalización",
                "Recuperación más rápida",
                "Procedimiento en consultorio — mismo día",
                "Resultados desde la primera sesión",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#00C0F0]/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#00C0F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-[family-name:var(--font-inter)] text-[#0A0A0A]/80 text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2A2A8E] to-[#3535B0] text-[#F5F4FA] px-8 py-4 rounded-lg font-[family-name:var(--font-poppins)] font-semibold hover:from-[#3535B0] hover:to-[#4B45C4] transition-all shadow-lg"
            >
              Consultar sobre Terapia PRP
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
