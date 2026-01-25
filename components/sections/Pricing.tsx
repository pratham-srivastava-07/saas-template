"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    frequency: "/month",
    features: ["5 Projects", "10 GB Storage", "Basic Analytics", "Email Support"],
    buttonText: "Choose Starter",
  },
  {
    name: "Pro",
    price: "$49",
    frequency: "/month",
    features: [
      "Unlimited Projects",
      "100 GB Storage",
      "Advanced Analytics",
      "Priority Email Support",
      "Custom Integrations",
    ],
    buttonText: "Choose Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "",
    features: [
      "All Pro Features",
      "Unlimited Storage",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "On-premise Deployment",
    ],
    buttonText: "Contact Sales",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find the perfect plan that fits your needs and budget.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`flex flex-col h-full ${plan.highlight ? "border-primary shadow-lg" : ""}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription>
                    {plan.price !== "Custom" ? (
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                    ) : (
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                    )}
                    {plan.frequency && <span className="text-muted-foreground">{plan.frequency}</span>}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.highlight ? "default" : "outline"}>
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
