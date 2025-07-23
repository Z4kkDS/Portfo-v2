"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { teacherData } from "@/lib/data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 relative">
      {/* Overlay específico para esta sección */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-stone-900/40 to-stone-950/30" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent drop-shadow-lg">
            Experiencia Profesional
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full"></div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teacherData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-stone-900/70 to-stone-800/50 border-stone-700/40 hover:border-amber-700/50 transition-all duration-300 hover:shadow-2xl backdrop-blur-md group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-stone-100 group-hover:text-amber-100 transition-colors drop-shadow-sm">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-stone-300">{exp.company}</CardDescription>
                      </div>
                      <Badge
                        variant="secondary"
                        className={
                          exp.current
                            ? "bg-gradient-to-r from-amber-700/40 to-amber-600/40 text-amber-200 border-amber-700/50"
                            : "bg-gradient-to-r from-stone-700/60 to-stone-600/60 text-stone-200 border-stone-600/50"
                        }
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-stone-200/90">
                    <p className="mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="list-none space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
