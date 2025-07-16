"use client"

import { motion } from "framer-motion"
import { BarChart, Cloud, ShieldCheck, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Blazing Fast Performance",
    description: "Experience unparalleled speed and responsiveness with our optimized infrastructure.",
  },
  {
    icon: <Cloud className="h-6 w-6 text-primary" />,
    title: "Scalable Cloud Infrastructure",
    description: "Grow without limits. Our cloud-native architecture scales with your needs.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Your data is safe with us. We implement the highest security standards.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Actionable Analytics",
    description: "Gain deep insights into your operations with comprehensive data analytics.",
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features, Simple to Use</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Designed to make your work easier and more efficient.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center text-center p-6 h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
