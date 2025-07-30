"use client"

import { motion } from "framer-motion"
import { developerData } from "@/lib/data"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-0 left-0 right-0 z-30 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© 2024 {developerData.personal.name}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart className="h-3 w-3 text-red-500 fill-current" /> y código
            </span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: developerData.contact.social.github },
              { icon: Linkedin, href: developerData.contact.social.linkedin },
              { icon: Twitter, href: developerData.contact.social.twitter },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
