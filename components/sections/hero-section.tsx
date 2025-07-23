"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { teacherData } from "@/lib/data"
import { ArrowRight, ChevronDown } from "lucide-react"

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
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-stone-100">
            {teacherData.personal.subtitle.split(" ")[0]} {teacherData.personal.subtitle.split(" ")[1]}
            <motion.span
              className="block text-amber-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Personalizadas
            </motion.span>
          </h1>
          <p className="text-xl text-stone-300/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            {teacherData.personal.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={() => onNavigate?.("contact")}
            size="lg"
            className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Solicitar Clase Gratuita
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => onNavigate?.("about")}
            variant="outline"
            size="lg"
            className="border-stone-600 text-stone-300 hover:bg-stone-800/50 hover:text-amber-200 transition-all duration-300"
          >
            Conocer Más
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-8 text-stone-400"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">{teacherData.personal.experience}+</div>
            <div className="text-sm">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">{teacherData.personal.totalStudents}+</div>
            <div className="text-sm">Estudiantes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">{teacherData.personal.successRate}%</div>
            <div className="text-sm">Éxito</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <p className="text-stone-400 text-sm">Usa los iconos de la derecha para navegar</p>
          <ChevronDown className="h-5 w-5 text-amber-500 animate-bounce" />
        </motion.div>
      </div>
    </div>
  )
}
