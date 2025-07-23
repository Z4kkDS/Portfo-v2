"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { teacherData } from "@/lib/data"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function EducationSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Maestría":
      case "Licenciatura":
        return <GraduationCap className="h-6 w-6 text-amber-500 drop-shadow-lg" />
      default:
        return <Award className="h-6 w-6 text-amber-500 drop-shadow-lg" />
    }
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Maestría":
        return "bg-gradient-to-r from-amber-700/40 to-amber-600/40 text-amber-200 border-amber-700/50"
      case "Licenciatura":
        return "bg-gradient-to-r from-stone-600/40 to-stone-500/40 text-stone-200 border-stone-600/50"
      case "Certificación":
        return "bg-gradient-to-r from-green-700/40 to-green-600/40 text-green-200 border-green-700/50"
      default:
        return "bg-gradient-to-r from-blue-700/40 to-blue-600/40 text-blue-200 border-blue-700/50"
    }
  }

  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          Formación Académica
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {teacherData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-stone-800/70 to-stone-900/50 border-stone-700/40 hover:border-amber-700/50 transition-all duration-300 h-full backdrop-blur-md group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-amber-600/30 to-amber-700/30 rounded-lg">
                      {getIcon(edu.type)}
                    </div>
                    <Badge variant="secondary" className={getBadgeColor(edu.type)}>
                      {edu.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-stone-100 group-hover:text-amber-100 transition-colors drop-shadow-sm">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-stone-300">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-stone-200/80 mb-3">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <p className="text-stone-200/90 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
