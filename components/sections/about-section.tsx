"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { teacherData } from "@/lib/data"

export function AboutSection() {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          Sobre Mí
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-stone-800/20 z-10" />
              <Image
                src={teacherData.personal.aboutImage || "/placeholder.svg"}
                alt="Enseñando en clase"
                width={400}
                height={400}
                className="w-full h-full object-cover filter blur-[0.3px] group-hover:blur-0 transition-all duration-500 scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-stone-700/50 rounded-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-stone-200/90 leading-relaxed drop-shadow-sm">{teacherData.about.description1}</p>
            <p className="text-lg text-stone-200/90 leading-relaxed drop-shadow-sm">{teacherData.about.description2}</p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-gradient-to-br from-stone-800/60 to-stone-900/60 rounded-xl border border-stone-700/30 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {teacherData.personal.totalStudents}+
                </div>
                <div className="text-sm text-stone-300">Estudiantes</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-gradient-to-br from-stone-800/60 to-stone-900/60 rounded-xl border border-stone-700/30 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {teacherData.personal.successRate}%
                </div>
                <div className="text-sm text-stone-300">Éxito</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
