"use client"

import { AnimatedSection } from "./animated-section"

export function Location() {
  return (
    <section className="bg-[#F8F8FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#0A0A0A] mb-4">
            Nuestra ubicación
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <AnimatedSection className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=Hospitales+Star+Medica+Ciudad+Juarez+Chihuahua&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Orthopedic Center en Hospitales Star Médica"
              />
            </div>
          </AnimatedSection>

          {/* Info Box */}
          <AnimatedSection delay={100} className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-xl text-[#0A0A0A] mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2BB8F2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2BB8F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A]">
                      Ubicación
                    </div>
                    <div className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                      Hospitales Star Médica · Consultorio 909
                    </div>
                    <div className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                      Cd. Juárez, Chihuahua
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2BB8F2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2BB8F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A]">
                      Teléfono
                    </div>
                    <div className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                      (656) 113-2264
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2BB8F2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2BB8F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A]">
                      Horarios
                    </div>
                    <div className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                      Lun–Vie 9:00–19:00
                    </div>
                    <div className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                      Sáb 9:00–13:00 · Dom urgencias
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Hospitales+Star+Medica+Ciudad+Juarez"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-[#2458D9] text-[#F8F8FA] px-6 py-3 rounded-lg font-[family-name:var(--font-poppins)] font-semibold text-center hover:bg-[#5963C7] transition-colors inline-flex items-center justify-center gap-2"
              >
                Abrir en Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
