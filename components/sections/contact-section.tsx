"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { developerData } from "@/lib/data"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

interface ContactSectionProps {
  onNavigate?: (section: string) => void
}

export function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4 text-slate-100"
        >
          Contacto
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
          ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/60 to-slate-900/40 backdrop-blur-md border border-slate-700/30"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Email</div>
                    <div className="text-slate-100 font-semibold">{developerData.contact.email}</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/60 to-slate-900/40 backdrop-blur-md border border-slate-700/30"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Teléfono</div>
                    <div className="text-slate-100 font-semibold">{developerData.contact.phone}</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/60 to-slate-900/40 backdrop-blur-md border border-slate-700/30"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Ubicación</div>
                    <div className="text-slate-100 font-semibold">{developerData.contact.location}</div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-4">Sígueme en</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: developerData.contact.social.github, label: "GitHub" },
                  { icon: Linkedin, href: developerData.contact.social.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: developerData.contact.social.twitter, label: "Twitter" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-slate-100">Envíame un mensaje</CardTitle>
                <CardDescription className="text-slate-400">Te responderé en menos de 24 horas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Asunto</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none backdrop-blur-sm"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 py-3">
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
