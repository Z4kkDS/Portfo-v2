"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { teacherData } from "@/lib/data"
import { Mail, Phone, MapPin, Coffee } from "lucide-react"

export function ContactSection() {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          Contacto
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-stone-200/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
        >
          ¿Listo para mejorar tus calificaciones? Contáctame para programar tu primera clase.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent mb-6 drop-shadow-sm">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-stone-800/60 to-stone-900/40 backdrop-blur-md border border-stone-700/30"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-700/40 to-amber-600/50 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-stone-300 text-sm">Email</div>
                  <div className="text-stone-100 font-semibold">{teacherData.contact.email}</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-stone-800/60 to-stone-900/40 backdrop-blur-md border border-stone-700/30"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-700/40 to-amber-600/50 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-stone-300 text-sm">Teléfono</div>
                  <div className="text-stone-100 font-semibold">{teacherData.contact.phone}</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-stone-800/60 to-stone-900/40 backdrop-blur-md border border-stone-700/30"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-700/40 to-amber-600/50 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-stone-300 text-sm">Ubicación</div>
                  <div className="text-stone-100 font-semibold">{teacherData.contact.location}</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-br from-stone-800/70 to-stone-900/50 rounded-xl border border-stone-700/40 backdrop-blur-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-5 w-5 text-amber-500" />
                <h4 className="text-lg font-semibold text-stone-100">Modalidades de Clase</h4>
              </div>
              <ul className="text-stone-200/90 space-y-3">
                {teacherData.classModalities.map((modality, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex-shrink-0"></div>
                    <span>{modality}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-stone-800/70 to-stone-900/50 border-stone-700/40 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-stone-100">Solicitar Información</CardTitle>
                <CardDescription className="text-stone-300">
                  Completa el formulario y te contactaré en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-200 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gradient-to-r from-stone-900/70 to-stone-800/70 border border-stone-600/40 rounded-xl text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all backdrop-blur-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-200 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gradient-to-r from-stone-900/70 to-stone-800/70 border border-stone-600/40 rounded-xl text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all backdrop-blur-sm"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-200 mb-2">Materia de interés</label>
                  <select className="w-full px-4 py-3 bg-gradient-to-r from-stone-900/70 to-stone-800/70 border border-stone-600/40 rounded-xl text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all backdrop-blur-sm">
                    <option>Selecciona una materia</option>
                    <option>Matemáticas</option>
                    <option>Física</option>
                    <option>Química</option>
                    <option>Preparación de exámenes</option>
                    <option>Apoyo académico general</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-200 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gradient-to-r from-stone-900/70 to-stone-800/70 border border-stone-600/40 rounded-xl text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all resize-none backdrop-blur-sm"
                    placeholder="Cuéntame sobre tus necesidades académicas..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 py-3">
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
