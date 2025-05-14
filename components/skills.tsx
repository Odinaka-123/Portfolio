"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skills = [
    { name: "JavaScript", icon: "💻" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "WordPress", icon: "📝" },
    { name: "Figma", icon: "🖌️" },
    { name: "React", icon: "⚛️" },
    { name: "Java", icon: "☕" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="bg-white py-20 dark:bg-slate-900">
      <div className="container">
        <h3 className="mb-12 text-center text-3xl font-bold tracking-tight">My Skills</h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <span className="mb-2 text-3xl">{skill.icon}</span>
                  <h4 className="font-medium">{skill.name}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
