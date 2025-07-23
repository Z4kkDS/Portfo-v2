"use client"

import { useState } from "react"
import { Navbar } from "@/components/navigation/navbar"
import { IconNavigation } from "@/components/navigation/icon-navigation"
import { SectionContainer } from "@/components/sections/section-container"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExpertiseSection } from "@/components/sections/expertise-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 via-30% to-amber-950/30 relative overflow-hidden">
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

      {/* Navbar - Siempre visible */}
      <Navbar onNavigate={handleSectionChange} />

      {/* Icon Navigation */}
      <IconNavigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Content with relative positioning */}
      <div className="relative z-10 pt-20">
        <SectionContainer isActive={activeSection === "hero"} sectionId="hero">
          <HeroSection onNavigate={handleSectionChange} />
        </SectionContainer>

        <SectionContainer isActive={activeSection === "about"} sectionId="about">
          <AboutSection />
        </SectionContainer>

        <SectionContainer isActive={activeSection === "experience"} sectionId="experience">
          <ExperienceSection />
        </SectionContainer>

        <SectionContainer isActive={activeSection === "education"} sectionId="education">
          <EducationSection />
        </SectionContainer>

        <SectionContainer isActive={activeSection === "expertise"} sectionId="expertise">
          <ExpertiseSection />
        </SectionContainer>

        <SectionContainer isActive={activeSection === "contact"} sectionId="contact">
          <ContactSection />
        </SectionContainer>
      </div>

      {/* Footer - Siempre visible */}
      <Footer />
    </main>
  )
}
