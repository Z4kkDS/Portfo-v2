"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { developerData } from "@/lib/data"
import { ArrowRight, ChevronDown, Download } from "lucide-react"

interface HeroSectionProps {
  onNavigate?: (section: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-blue-400 text-lg mb-4 font-medium"
          >
            {developerData.personal.greeting}
          </motion.p>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-100">
            {developerData.personal.name}
            <motion.span
              className="block text-blue-400 text-3xl lg:text-5xl mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {developerData.personal.title}
            </motion.span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            {developerData.personal.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={() => onNavigate?.("projects")}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Ver Proyectos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={() => onNavigate?.("contact")}
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
          >
            Contactar
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 transition-all duration-300 group"
          >
            <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            Descargar CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-8 text-slate-400"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{developerData.personal.experience}+</div>
            <div className="text-sm">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{developerData.personal.projectsCompleted}+</div>
            <div className="text-sm">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{developerData.personal.clientsSatisfied}+</div>
            <div className="text-sm">Clientes Satisfechos</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <p className="text-slate-400 text-sm">Explora mi trabajo y habilidades</p>
          <ChevronDown className="h-5 w-5 text-blue-400 animate-bounce" />
        </motion.div>
      </div>
    </div>
  )
}
