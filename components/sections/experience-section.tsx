"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { developerData } from "@/lib/data"

interface ExperienceSectionProps {
  onNavigate?: (section: string) => void
}

export function ExperienceSection({ onNavigate }: ExperienceSectionProps) {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4 text-slate-100"
        >
          Experiencia Profesional
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {developerData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/40 hover:border-blue-600/50 transition-all duration-300 backdrop-blur-sm group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-slate-100 group-hover:text-blue-300 transition-colors">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-lg">{exp.company}</CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        exp.current
                          ? "bg-blue-600/20 text-blue-300 border-blue-500/30"
                          : "bg-slate-700/50 text-slate-300 border-slate-600/50"
                      }
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-slate-200 font-medium">Logros principales:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-slate-800/50 text-slate-300 border-slate-600/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
