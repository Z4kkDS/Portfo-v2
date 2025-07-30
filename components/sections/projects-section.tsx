"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { developerData } from "@/lib/data"
import { Github, Eye } from "lucide-react"
import Image from "next/image"

interface ProjectsSectionProps {
  onNavigate?: (section: string) => void
}

export function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4 text-slate-100"
        >
          Proyectos Destacados
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Una selección de mis trabajos más recientes y destacados
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developerData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/40 hover:border-blue-600/50 transition-all duration-300 h-full backdrop-blur-sm group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.featured && <Badge className="bg-blue-600/90 text-white border-0">Destacado</Badge>}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-slate-100 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
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
