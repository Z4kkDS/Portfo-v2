"use client"

import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExpertiseSection } from "@/components/sections/expertise-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 via-30% to-amber-950/30 relative">
      {/* Background Pattern Global */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-900/60" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d97706' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ExpertiseSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
