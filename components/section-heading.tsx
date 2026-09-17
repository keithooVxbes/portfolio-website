"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="text-center space-y-4">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full mx-auto mt-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  )
}
