"use client"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Innovations",
    quote:
      "This SaaS solution has revolutionized our workflow. The intuitive interface and powerful features have significantly boosted our team's productivity.",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Founder, Creative Hub",
    quote:
      "Outstanding support and a product that truly delivers. We've seen a remarkable improvement in our project management since adopting this platform.",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    rating: 5,
  },
  {
    name: "Emily White",
    title: "Lead Developer, CodeCrafters",
    quote:
      "The scalability and reliability are unmatched. It seamlessly integrates with our existing tools, making our development process much smoother.",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from businesses that have transformed their operations with our platform.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="flex-row items-center gap-4 pb-2">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className={`${testimonial.gradient} text-white font-semibold`}>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.title}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 flex-1">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    {'"'}
                    {testimonial.quote}
                    {'"'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}