"use client"

import Image from "next/image"
import { AnimatedSection } from "./animated-section"

export function About() {
  const credentials = [
    "Médico Cirujano — Universidad Autónoma de Chihuahua",
    "Especialidad en Ortopedia y Traumatología — Hospital Central",
    "Alta Especialidad en Cirugía de Columna — UNAM",
    "Certificado por el Consejo Mexicano de Ortopedia y Traumatología",
  ]

  return (
    <section id="acerca" className="bg-[#F5F4FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prp.jpg`}
                alt="Dr. Gustavo Monroy en consulta con paciente"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#3535B0]/15 rounded-2xl" />
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={100}>
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#0A0A0A] mb-6 text-balance">
              Un especialista comprometido con tu recuperación.
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#0A0A0A]/80 leading-relaxed mb-4">
              El Dr. Gustavo Monroy es especialista en Ortopedia y Traumatología, con subespecialidad en Cirugía de Columna y Rodilla. Atiende en Hospitales Star Médica, Consultorio 909, Cd. Juárez, Chihuahua.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#0A0A0A]/80 leading-relaxed mb-8">
              Su enfoque combina precisión quirúrgica con trato cercano y humano. Cada paciente recibe una explicación clara de su diagnóstico, opciones de tratamiento y proceso de recuperación.
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#00C0F0] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-[family-name:var(--font-inter)] text-[#0A0A0A]/80">
                    {credential}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
