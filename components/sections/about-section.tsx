"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { developerData } from "@/lib/data"

interface AboutSectionProps {
  onNavigate?: (section: string) => void
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4 text-slate-100"
        >
          Sobre Mí
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10 z-10" />
              <Image
                src={developerData.personal.profileImage || "/placeholder.svg"}
                alt="Desarrollador trabajando"
                width={500}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 ring-1 ring-slate-700/50 rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">{developerData.about.description1}</p>
              <p className="text-lg text-slate-300 leading-relaxed">{developerData.about.description2}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl border border-slate-700/30 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">{developerData.personal.projectsCompleted}+</div>
                <div className="text-sm text-slate-400">Proyectos Completados</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl border border-slate-700/30 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">{developerData.personal.clientsSatisfied}+</div>
                <div className="text-sm text-slate-400">Clientes Satisfechos</div>
              </motion.div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">Tecnologías Principales</h3>
              <div className="flex flex-wrap gap-3">
                {developerData.about.mainTechnologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
