"use client"

import { motion } from "framer-motion"
import { Home, User, Briefcase, Code, FolderOpen, Award, Mail } from "lucide-react"

interface IconNavigationProps {
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export function IconNavigation({ activeSection, onSectionChange }: IconNavigationProps) {
  const navItems = [
    { id: "hero", icon: Home, label: "Inicio" },
    { id: "about", icon: User, label: "Sobre Mí" },
    { id: "services", icon: Briefcase, label: "Servicios" },
    { id: "skills", icon: Code, label: "Habilidades" },
    { id: "projects", icon: FolderOpen, label: "Proyectos" },
    { id: "experience", icon: Award, label: "Experiencia" },
    { id: "contact", icon: Mail, label: "Contacto" },
  ]

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
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
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md border ${
                isActive
                  ? "bg-gradient-to-r from-blue-600/90 to-indigo-600/90 border-blue-500/50 shadow-lg shadow-blue-500/25"
                  : "bg-gradient-to-r from-slate-800/70 to-slate-900/70 border-slate-700/50 hover:border-blue-600/50 hover:from-slate-700/80 hover:to-slate-800/80"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon
                className={`h-5 w-5 transition-colors duration-300 ${
                  isActive ? "text-white drop-shadow-lg" : "text-slate-300 group-hover:text-blue-400"
                }`}
              />
            </motion.button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gradient-to-r from-slate-950/95 to-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg text-slate-200 text-sm whitespace-nowrap pointer-events-none shadow-xl"
            >
              {item.label}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-900/95 border-y-4 border-y-transparent" />
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
