"use client"

import { motion, AnimatePresence } from "framer-motion"
import type React from "react"

interface SectionContainerProps {
  children: React.ReactNode
  isActive: boolean
  sectionId: string
}

export function SectionContainer({ children, isActive, sectionId }: SectionContainerProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key={sectionId}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-screen flex items-center justify-center py-16"
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
