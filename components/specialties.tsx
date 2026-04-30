"use client"

import { AnimatedSection } from "./animated-section"

const specialties = [
  {
    title: "Cirugía de Columna",
    description: "Tratamiento de hernias, estenosis y fracturas vertebrales con técnicas mínimamente invasivas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Cirugía de Rodilla",
    description: "Reconstrucción de ligamentos, meniscos y cartílago. Incluye artroscopia y reemplazo total.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Artroscopia",
    description: "Procedimiento mínimamente invasivo con cámara artroscópica. Mínimas cicatrices y recuperación acelerada.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Lesiones Deportivas",
    description: "Atención para atletas: desgarres, fracturas de estrés y lesiones ligamentarias.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Reemplazo Articular",
    description: "Prótesis de última generación para artrosis avanzada de rodilla y cadera.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Medicina Regenerativa",
    description: "PRP e infiltraciones para dolor musculoesquelético sin necesidad de cirugía.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
]

export function Specialties() {
  return (
    <section id="especialidades" className="bg-[#D9D9DE] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#0A0A0A] mb-4">
            Especialidades y procedimientos
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#A7A9B8] max-w-2xl mx-auto">
            Ofrecemos atención integral en ortopedia y traumatología con las técnicas más avanzadas
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <AnimatedSection key={specialty.title} delay={index * 100}>
              <div className="bg-[#F8F8FA] rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 group border-t-0 hover:border-t-[3px] hover:border-[#2458D9]">
                <div className="w-14 h-14 bg-[#2BB8F2]/10 rounded-xl flex items-center justify-center text-[#2BB8F2] mb-4 group-hover:bg-[#2458D9] group-hover:text-[#F8F8FA] transition-colors">
                  {specialty.icon}
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-xl text-[#0A0A0A] mb-3">
                  {specialty.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#A7A9B8] leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
