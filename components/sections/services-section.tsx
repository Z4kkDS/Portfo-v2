"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { developerData } from "@/lib/data"
import { Code, Smartphone, Globe, Palette, Database, Zap } from "lucide-react"

interface ServicesSectionProps {
  onNavigate?: (section: string) => void
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    const icons = {
      Code: <Code className="h-8 w-8 text-blue-400" />,
      Smartphone: <Smartphone className="h-8 w-8 text-blue-400" />,
      Globe: <Globe className="h-8 w-8 text-blue-400" />,
      Palette: <Palette className="h-8 w-8 text-blue-400" />,
      Database: <Database className="h-8 w-8 text-blue-400" />,
      Zap: <Zap className="h-8 w-8 text-blue-400" />,
    }
    return icons[iconName as keyof typeof icons] || <Code className="h-8 w-8 text-blue-400" />
  }

  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4 text-slate-100"
        >
          Servicios
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
          Soluciones tecnológicas completas para hacer crecer tu negocio
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developerData.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/40 hover:border-blue-600/50 transition-all duration-300 h-full backdrop-blur-sm group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <CardTitle className="text-slate-100 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                    <span className="text-slate-400 text-sm ml-1">{service.priceUnit}</span>
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
