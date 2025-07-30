"use client"

import { useState } from "react"
import { Navbar } from "@/components/navigation/navbar"
import { IconNavigation } from "@/components/navigation/icon-navigation"
import { Footer } from "@/components/layout/footer"
import { SectionContainer } from "@/components/sections/section-container"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  const sections = [
    { id: "hero", component: HeroSection },
    { id: "about", component: AboutSection },
    { id: "services", component: ServicesSection },
    { id: "skills", component: SkillsSection },
    { id: "projects", component: ProjectsSection },
    { id: "experience", component: ExperienceSection },
    { id: "contact", component: ContactSection },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-slate-950" />

      {/* Navigation */}
      <Navbar onNavigate={handleSectionChange} />
      <IconNavigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Main Content */}
      <main className="relative z-10 pt-20 pb-16">
        {sections.map(({ id, component: Component }) => (
          <SectionContainer key={id} isActive={activeSection === id} sectionId={id}>
            <Component onNavigate={handleSectionChange} />
          </SectionContainer>
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
