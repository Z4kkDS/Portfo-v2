"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { teacherData } from "@/lib/data"
import { BookOpen, GraduationCap, User, Award } from "lucide-react"

export function ExpertiseSection() {
  const getIcon = (iconName: string) => {
    const icons = {
      BookOpen: <BookOpen className="h-6 w-6 text-amber-500 drop-shadow-lg" />,
      GraduationCap: <GraduationCap className="h-6 w-6 text-amber-500 drop-shadow-lg" />,
      User: <User className="h-6 w-6 text-amber-500 drop-shadow-lg" />,
      Award: <Award className="h-6 w-6 text-amber-500 drop-shadow-lg" />,
    }
    return icons[iconName as keyof typeof icons] || <BookOpen className="h-6 w-6 text-amber-500 drop-shadow-lg" />
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
          Áreas de Expertise
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teacherData.expertise.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-stone-900/70 to-stone-800/50 border-stone-700/40 hover:border-amber-700/50 transition-all duration-300 h-full backdrop-blur-md group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-700/30 to-amber-600/40 rounded-xl flex items-center justify-center mb-4 group-hover:from-amber-600/40 group-hover:to-amber-500/50 transition-all duration-300">
                    {getIcon(area.icon)}
                  </div>
                  <CardTitle className="text-stone-100 group-hover:text-amber-100 transition-colors drop-shadow-sm">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-stone-200/90 space-y-3">
                    {area.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3 group-hover:text-stone-100 transition-colors">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex-shrink-0"></div>
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
