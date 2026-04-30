"use client"

import Link from "next/link"

export function Footer() {
  const specialties = [
    { label: "Cirugía de Columna", href: "#especialidades" },
    { label: "Cirugía de Rodilla", href: "#especialidades" },
    { label: "Artroscopia", href: "#especialidades" },
    { label: "Lesiones Deportivas", href: "#especialidades" },
    { label: "Reemplazo Articular", href: "#especialidades" },
    { label: "Medicina Regenerativa", href: "#especialidades" },
  ]

  const legalLinks = [
    { label: "Aviso de privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Política de cookies", href: "#" },
  ]

  return (
    <footer className="bg-[#0A0A0A] text-[#F8F8FA] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <Link href="#inicio" className="inline-block mb-4">
              <span className="font-[family-name:var(--font-poppins)] font-bold text-lg text-[#2458D9]">
                ORTHOPEDIC CENTER
              </span>
              <br />
              <span className="font-[family-name:var(--font-poppins)] font-normal text-xs text-[#A7A9B8] tracking-[3px]">
                CD. JUÁREZ
              </span>
            </Link>
            <p className="font-[family-name:var(--font-inter)] text-[#A7A9B8] text-sm mb-6">
              Especialistas en columna, rodilla y ortopedia en Cd. Juárez.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#F8F8FA]/10 rounded-full flex items-center justify-center hover:bg-[#2458D9] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 36.6 36.6 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F8F8FA]/10 rounded-full flex items-center justify-center hover:bg-[#2458D9] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F8F8FA]/10 rounded-full flex items-center justify-center hover:bg-[#2458D9] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Specialties */}
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-lg mb-4">
              Especialidades
            </h3>
            <ul className="space-y-3">
              {specialties.map((specialty) => (
                <li key={specialty.label}>
                  <Link
                    href={specialty.href}
                    className="font-[family-name:var(--font-inter)] text-[#A7A9B8] hover:text-[#2BB8F2] transition-colors text-sm"
                  >
                    {specialty.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-lg mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 font-[family-name:var(--font-inter)] text-[#A7A9B8] text-sm">
              <li>Star Médica · Consultorio 909</li>
              <li>Cd. Juárez, Chihuahua</li>
              <li>
                <a href="tel:6561132264" className="hover:text-[#2BB8F2] transition-colors">
                  (656) 113-2264
                </a>
              </li>
              <li>
                <a href="mailto:contacto@orthopediccenter.mx" className="hover:text-[#2BB8F2] transition-colors">
                  contacto@orthopediccenter.mx
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-lg mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] text-[#A7A9B8] hover:text-[#2BB8F2] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#F8F8FA]/10 text-center">
          <p className="font-[family-name:var(--font-inter)] text-[#A7A9B8] text-sm">
            © 2025 Orthopedic Center Cd. Juárez · Dr. Gustavo Monrroy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
