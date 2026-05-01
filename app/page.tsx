"use client"

import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Specialties } from "@/components/specialties"
import { PrpSection } from "@/components/prp-section"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <PrpSection />
      <WhyUs />
      <Testimonials />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  )
}
