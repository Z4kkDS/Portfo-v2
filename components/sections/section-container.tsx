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
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.98,
      transition: {
        duration: 0.3,
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
          className="min-h-[calc(100vh-160px)] flex items-center justify-center py-8"
        >
          <div className="w-full">{children}</div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
