"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="relative min-h-[calc(100vh-4rem)] bg-[#f5f0ff] px-4 py-8 dark:bg-purple-950/20">
      <div className="container mx-auto flex flex-col items-center justify-center pt-6 md:flex-row md:items-center md:justify-between md:gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Hi, I'm <span className="text-primary">Oddy</span>
          </h2>

          <p className="mb-8 text-xl text-muted-foreground/90 sm:text-2xl">
            I love coding. I'm a passionate Web Developer and UI/UX Designer with a focus on creating beautiful,
            functional, and accessible digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button onClick={scrollToProjects} size="lg" className="bg-primary px-8 py-6 text-lg hover:bg-primary/90">
              View My Work
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 px-8 py-6 text-lg">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>

        {/* Portrait Image - Circular */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 md:mt-0"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 bg-white p-1 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <Image
              src="/oddy-portrait.png"
              alt="Oddy's portrait"
              width={400}
              height={400}
              className="h-full w-full rounded-full object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </Button>
      </motion.div>
    </section>
  )
}
