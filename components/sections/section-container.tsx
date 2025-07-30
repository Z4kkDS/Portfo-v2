"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  isActive: boolean
  sectionId: string
}

export function SectionContainer({ children, isActive, sectionId }: SectionContainerProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key={sectionId}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-[calc(100vh-160px)] flex items-center justify-center py-16"
          id={sectionId}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
