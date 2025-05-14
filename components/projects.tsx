"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Emetix E-commerce",
      description:
        "A fully responsive e-commerce platform for electronics with product catalog, cart functionality, and checkout process.",
      image: "/ecommerce-project.jpeg",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Financial Dashboard",
      description:
        "Interactive financial analytics dashboard with real-time data visualization and advanced filtering capabilities.",
      image: "/analytics-project.jpeg",
      tags: ["React", "D3.js", "TypeScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my skills and projects.",
      image: "/portfolio-project.png",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="bg-background py-20">
      <div className="container">
        <h3 className="mb-4 text-center text-3xl font-bold tracking-tight">Projects</h3>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Here are some of my recent projects. Each project reflects my passion for creating intuitive and engaging user
          experiences.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
