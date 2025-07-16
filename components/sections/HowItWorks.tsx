"use client"

import { motion } from "framer-motion"
import { Lightbulb, Rocket, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Sign Up & Configure",
    description: "Easily create your account and set up your preferences in minutes.",
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Integrate Your Tools",
    description: "Connect seamlessly with your existing applications and services.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Launch & Grow",
    description: "Start leveraging our powerful features to achieve your business goals.",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is designed for simplicity and efficiency.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center text-center p-6 h-full">
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
