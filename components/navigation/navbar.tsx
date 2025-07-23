"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { teacherData } from "@/lib/data"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "about", label: "Sobre Mí" },
    { id: "experience", label: "Experiencia" },
    { id: "education", label: "Educación" },
    { id: "expertise", label: "Expertise" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-stone-900/95 via-stone-800/95 to-stone-900/95 backdrop-blur-md border-b border-amber-900/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {teacherData.personal.name}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-stone-300 hover:text-amber-200 transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contacto
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-stone-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-stone-700/50 bg-gradient-to-r from-stone-900/80 to-stone-800/80 backdrop-blur-sm rounded-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-stone-300 hover:text-amber-200 hover:bg-stone-800/50 transition-all rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
