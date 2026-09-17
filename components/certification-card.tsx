"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CertificationCardProps {
  title: string
  description: string
  category: string
  verifyUrl?: string
}

export function CertificationCard({ title, description, category, verifyUrl = "#" }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-cyan-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-emerald-400/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative p-6 flex flex-col h-full">
          <div className="mb-4">
            <Badge variant="secondary" className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300">
              {category}
            </Badge>
          </div>

          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-zinc-400 mb-6 flex-grow">{description}</p>

          <div className="pt-4 border-t border-zinc-700/50">
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-emerald-400 hover:to-cyan-500 border-0"
              asChild
            >
              <a href={verifyUrl} target="_blank" rel="noopener noreferrer">
                Verify Credential
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
