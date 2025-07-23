"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: any
}

export function AnimatedSection({ children, className, animation }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={animation?.initial || { opacity: 0, y: 60 }}
      animate={isInView ? animation?.animate || { opacity: 1, y: 0 } : {}}
      transition={animation?.transition || { duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
