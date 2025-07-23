"use client"

import { motion } from "framer-motion"
import { teacherData } from "@/lib/data"
import { Coffee, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 py-4 bg-gradient-to-t from-stone-950/90 to-stone-900/80 backdrop-blur-md border-t border-stone-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Coffee className="h-3 w-3 text-amber-600" />
            <p className="text-stone-300 text-sm drop-shadow-sm">
              © 2024 {teacherData.personal.name}. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center justify-center gap-1 text-stone-400 text-xs">
            <span>Transformando vidas a través de la educación personalizada</span>
            <Heart className="h-2 w-2 text-amber-600" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
