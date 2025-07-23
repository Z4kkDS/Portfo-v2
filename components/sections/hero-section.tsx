"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { teacherData } from "@/lib/data"
import { Coffee, ArrowDown } from "lucide-react"

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 min-h-screen justify-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <Coffee className="h-5 w-5 text-amber-500 drop-shadow-lg" />
            <span className="text-amber-200/90 text-sm font-medium tracking-wide">Educación con dedicación</span>
          </motion.div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-stone-100 drop-shadow-lg">
            {teacherData.personal.subtitle}
            <motion.span
              className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Personalizadas
            </motion.span>
          </h1>

          <motion.p
            className="text-xl text-stone-300/90 mb-8 leading-relaxed drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {teacherData.personal.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              onClick={() => onNavigate("contact")}
            >
              Solicitar Clase
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-stone-600/50 text-stone-300 hover:bg-stone-800/50 bg-stone-900/30 hover:border-amber-600/50 backdrop-blur-sm"
              onClick={() => onNavigate("about")}
            >
              Conocer Más
            </Button>
          </motion.div>

          {/* Indicador de navegación */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-2 text-stone-400 text-sm"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span>Usa la navegación lateral para explorar</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="w-80 h-80 mx-auto rounded-full overflow-hidden relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-stone-800/40 z-10 rounded-full" />
              <Image
                src={teacherData.personal.profileImage || "/placeholder.svg"}
                alt={teacherData.personal.name}
                width={320}
                height={320}
                className="w-full h-full object-cover filter blur-[0.5px] group-hover:blur-0 transition-all duration-500 scale-110"
              />
              <div className="absolute inset-0 ring-4 ring-amber-700/30 ring-offset-4 ring-offset-transparent rounded-full shadow-2xl" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-700 to-amber-800 text-white p-4 rounded-xl shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
            >
              <div className="text-2xl font-bold">{teacherData.personal.yearsExperience}+</div>
              <div className="text-sm opacity-90">Años de experiencia</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
