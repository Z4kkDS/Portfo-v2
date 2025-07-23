"use client"

import { motion } from "framer-motion"
import { Home, User, Briefcase, GraduationCap, Award, Mail } from "lucide-react"

interface IconNavigationProps {
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export function IconNavigation({ activeSection, onSectionChange }: IconNavigationProps) {
  const navItems = [
    { id: "hero", icon: Home, label: "Inicio" },
    { id: "about", icon: User, label: "Sobre Mí" },
    { id: "experience", icon: Briefcase, label: "Experiencia" },
    { id: "education", icon: GraduationCap, label: "Educación" },
    { id: "expertise", icon: Award, label: "Expertise" },
    { id: "contact", icon: Mail, label: "Contacto" },
  ]

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
    >
      {navItems.map((item, index) => {
        const Icon = item.icon
        const isActive = activeSection === item.id

        return (
          <motion.div
            key={item.id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            className="relative group"
          >
            <motion.button
              onClick={() => onSectionChange(item.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border ${
                isActive
                  ? "bg-gradient-to-r from-amber-700/80 to-amber-600/80 border-amber-500/50 shadow-lg shadow-amber-500/25"
                  : "bg-gradient-to-r from-stone-800/60 to-stone-900/60 border-stone-700/50 hover:border-amber-700/50 hover:from-stone-700/70 hover:to-stone-800/70"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon
                className={`h-5 w-5 transition-colors duration-300 ${
                  isActive ? "text-white drop-shadow-lg" : "text-stone-300 group-hover:text-amber-200"
                }`}
              />
            </motion.button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gradient-to-r from-stone-900/90 to-stone-800/90 backdrop-blur-md border border-stone-700/50 rounded-lg text-stone-200 text-sm whitespace-nowrap pointer-events-none"
            >
              {item.label}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-stone-800/90 border-y-4 border-y-transparent" />
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
