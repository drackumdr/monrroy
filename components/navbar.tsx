"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#acerca", label: "Acerca" },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gradient-to-r from-[#2A2A8E] to-[#3535B0] shadow-lg" : "bg-[#3535B0]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center">
            <img
              src="logo-real.png"
              alt="Orthopedic Center Cd. Juárez"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-inter)] text-[#F8F8FA] hover:text-[#00C0F0] transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="bg-[#F5F4FA] text-[#3535B0] px-5 py-2.5 rounded-lg font-[family-name:var(--font-poppins)] font-semibold text-sm hover:bg-white transition-colors"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#F8F8FA] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[#F8F8FA] hover:text-[#00C0F0] transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="bg-[#F5F4FA] text-[#3535B0] px-5 py-2.5 rounded-lg font-[family-name:var(--font-poppins)] font-semibold text-sm text-center hover:bg-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agendar Cita
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
