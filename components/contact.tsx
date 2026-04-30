"use client"

import { useState } from "react"
import { AnimatedSection } from "./animated-section"

export function Contact() {
  const [formState, setFormState] = useState({
    nombre: "",
    telefono: "",
    email: "",
    motivo: "",
    mensaje: "",
    privacidad: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSuccess(true)
    setIsSubmitting(false)
    setFormState({
      nombre: "",
      telefono: "",
      email: "",
      motivo: "",
      mensaje: "",
      privacidad: false,
    })
  }

  return (
    <section id="contacto" className="bg-[#D9D9DE] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#0A0A0A] mb-4">
            Comienza tu recuperación hoy
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#A7A9B8] max-w-2xl mx-auto">
            Atendemos en Hospitales Star Médica, Consultorio 909. Respondemos en menos de 2 horas en días hábiles.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <AnimatedSection className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#2BB8F2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#2BB8F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-xl text-[#0A0A0A] mb-2">
                    ¡Gracias!
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                    Te contactamos en menos de 2 horas.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-[#2458D9] font-[family-name:var(--font-poppins)] font-medium hover:underline"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A] mb-2"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#D9D9DE] focus:border-[#2458D9] focus:ring-2 focus:ring-[#2458D9]/20 outline-none transition-colors font-[family-name:var(--font-inter)]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A] mb-2"
                      >
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        required
                        value={formState.telefono}
                        onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#D9D9DE] focus:border-[#2458D9] focus:ring-2 focus:ring-[#2458D9]/20 outline-none transition-colors font-[family-name:var(--font-inter)]"
                        placeholder="(656) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#D9D9DE] focus:border-[#2458D9] focus:ring-2 focus:ring-[#2458D9]/20 outline-none transition-colors font-[family-name:var(--font-inter)]"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="motivo"
                        className="block font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A] mb-2"
                      >
                        Motivo de consulta
                      </label>
                      <select
                        id="motivo"
                        value={formState.motivo}
                        onChange={(e) => setFormState({ ...formState, motivo: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#D9D9DE] focus:border-[#2458D9] focus:ring-2 focus:ring-[#2458D9]/20 outline-none transition-colors font-[family-name:var(--font-inter)] bg-white"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="columna">Dolor de columna</option>
                        <option value="rodilla">Dolor de rodilla</option>
                        <option value="deportiva">Lesión deportiva</option>
                        <option value="reemplazo">Reemplazo articular</option>
                        <option value="segunda">Segunda opinión</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A] mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      value={formState.mensaje}
                      onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#D9D9DE] focus:border-[#2458D9] focus:ring-2 focus:ring-[#2458D9]/20 outline-none transition-colors font-[family-name:var(--font-inter)] resize-none"
                      placeholder="Cuéntanos brevemente tu situación..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacidad"
                      required
                      checked={formState.privacidad}
                      onChange={(e) => setFormState({ ...formState, privacidad: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-[#D9D9DE] text-[#2458D9] focus:ring-[#2458D9]"
                    />
                    <label
                      htmlFor="privacidad"
                      className="font-[family-name:var(--font-inter)] text-sm text-[#A7A9B8]"
                    >
                      Acepto el aviso de privacidad *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2458D9] text-[#F8F8FA] px-8 py-4 rounded-lg font-[family-name:var(--font-poppins)] font-semibold hover:bg-[#5963C7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar solicitud
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection delay={100}>
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2458D9]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2458D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <a
                  href="tel:6561132264"
                  className="block w-full bg-[#2458D9] text-[#F8F8FA] px-4 py-3 rounded-lg font-[family-name:var(--font-poppins)] font-semibold text-center hover:bg-[#5963C7] transition-colors"
                >
                  Llamar ahora
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-poppins)] font-medium text-[#0A0A0A]">
                      WhatsApp
                    </div>
                    <div className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                      +52 656 113 2264
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/5216561132264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-[#F8F8FA] px-4 py-3 rounded-lg font-[family-name:var(--font-poppins)] font-semibold text-center hover:bg-[#128C7E] transition-colors"
                >
                  Escribir por WhatsApp
                </a>
              </div>

              {/* Email & Address */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2BB8F2] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                      contacto@orthopediccenter.mx
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2BB8F2] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-[family-name:var(--font-inter)] text-[#A7A9B8]">
                      Star Médica · Consultorio 909 · Cd. Juárez, Chih.
                    </span>
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
