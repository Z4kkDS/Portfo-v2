"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { teacherData } from "@/lib/data"
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations"

export function AboutSection() {
  return (
    <section id="about" className="py-16 relative">
      {/* Overlay sutil para esta sección */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-800/30 to-stone-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent drop-shadow-lg">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full"></div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation={fadeInLeft}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative group">
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
            </AnimatedSection>

            <AnimatedSection animation={fadeInRight}>
              <div className="space-y-6">
                <p className="text-lg text-stone-200/90 leading-relaxed drop-shadow-sm">
                  {teacherData.about.description1}
                </p>
                <p className="text-lg text-stone-200/90 leading-relaxed drop-shadow-sm">
                  {teacherData.about.description2}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-stone-800/60 to-stone-900/60 rounded-xl border border-stone-700/30 backdrop-blur-sm"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      {teacherData.personal.totalStudents}+
                    </div>
                    <div className="text-sm text-stone-300">Estudiantes</div>
                  </motion.div>
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-stone-800/60 to-stone-900/60 rounded-xl border border-stone-700/30 backdrop-blur-sm"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      {teacherData.personal.successRate}%
                    </div>
                    <div className="text-sm text-stone-300">Éxito</div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
