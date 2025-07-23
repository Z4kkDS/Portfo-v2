"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Briefcase, GraduationCap, Award, Mail, Home } from "lucide-react"

interface IconNavProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function IconNavigation({ activeSection, onSectionChange }: IconNavProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { id: "hero", label: "Inicio", icon: Home },
    { id: "about", label: "Sobre Mí", icon: User },
    { id: "experience", label: "Experiencia", icon: Briefcase },
    { id: "education", label: "Educación", icon: GraduationCap },
    { id: "expertise", label: "Expertise", icon: Award },
    { id: "contact", label: "Contacto", icon: Mail },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
        >
          <div className="flex flex-col gap-4 p-4 bg-gradient-to-b from-stone-900/90 to-stone-800/90 backdrop-blur-md rounded-2xl border border-stone-700/50 shadow-2xl">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="relative group"
                >
                  <motion.button
                    onClick={() => onSectionChange(item.id)}
                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg"
                        : "bg-stone-800/50 text-stone-400 hover:bg-stone-700/70 hover:text-amber-400"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />

                    {/* Indicador activo */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-xl ring-2 ring-amber-400/50 ring-offset-2 ring-offset-transparent"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-stone-900/95 text-stone-200 text-sm rounded-lg border border-stone-700/50 backdrop-blur-sm whitespace-nowrap pointer-events-none"
                  >
                    {item.label}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-stone-900/95" />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
