"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export function Hero() {
  const badges = ["Cirugía de Columna", "Cirugía de Rodilla", "Artroscopia"]
  
  const stats = [
    { value: "15+", label: "años de experiencia" },
    { value: "2,400+", label: "pacientes" },
    { value: "98%", label: "satisfacción" },
  ]

  return (
    <section id="inicio" className="bg-[#2458D9] pt-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatedSection className="text-[#F8F8FA]">
            <p className="font-[family-name:var(--font-inter)] text-[#2BB8F2] text-sm uppercase tracking-wider mb-4">
              HOSPITALES STAR MÉDICA · CONSULTORIO 909 · CD. JUÁREZ
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              Recupera tu movilidad, recupera tu vida.
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-lg text-[#F8F8FA]/90 mb-8 leading-relaxed max-w-xl">
              El Dr. Gustavo Monrroy combina más de 15 años de experiencia quirúrgica con tecnología mínimamente invasiva para devolverle calidad de vida a cada paciente.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-[#F8F8FA]/10 border border-[#F8F8FA]/30 px-4 py-2 rounded-full text-sm font-[family-name:var(--font-inter)]"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="#contacto"
                className="bg-[#F8F8FA] text-[#2458D9] px-8 py-4 rounded-lg font-[family-name:var(--font-poppins)] font-semibold text-center hover:bg-white transition-colors inline-flex items-center justify-center gap-2"
              >
                Agendar mi cita
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/5216561132264"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#F8F8FA] text-[#F8F8FA] px-8 py-4 rounded-lg font-[family-name:var(--font-poppins)] font-semibold text-center hover:bg-[#F8F8FA]/10 transition-colors"
              >
                Escribir por WhatsApp
              </Link>
            </div>

            <p className="text-[#F8F8FA]/70 text-sm font-[family-name:var(--font-inter)]">
              Consulta sin compromiso · Respondemos en menos de 2 horas
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#F8F8FA]/20">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#2BB8F2]">
                    {stat.value}
                  </div>
                  <div className="font-[family-name:var(--font-inter)] text-sm text-[#F8F8FA]/70 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={200} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Dr. Gustavo Monrroy - Especialista en Ortopedia y Traumatología"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2458D9]/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#F8F8FA] p-4 rounded-xl shadow-lg hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#2BB8F2]/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2BB8F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-poppins)] font-semibold text-[#0A0A0A] text-sm">
                    Certificado CMOT
                  </div>
                  <div className="font-[family-name:var(--font-inter)] text-[#A7A9B8] text-xs">
                    Consejo Mexicano de Ortopedia
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
