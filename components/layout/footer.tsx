"use client"

import { motion } from "framer-motion"
import { teacherData } from "@/lib/data"
import { Coffee, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 relative">
      {/* Overlay sutil para el footer */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Coffee className="h-4 w-4 text-amber-600" />
            <p className="text-stone-300 drop-shadow-sm">
              © 2024 {teacherData.personal.name}. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center justify-center gap-1 text-stone-400 text-sm">
            <span>Transformando vidas a través de la educación personalizada</span>
            <Heart className="h-3 w-3 text-amber-600" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
