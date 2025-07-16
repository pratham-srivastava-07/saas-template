"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing plans, including a free tier, monthly subscriptions, and custom enterprise solutions. Visit our pricing page for details.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial for our Pro plan. No credit card required to get started!",
  },
  {
    question: "How secure is my data?",
    answer:
      "Your data security is our top priority. We use industry-standard encryption, regular security audits, and comply with GDPR and other regulations.",
  },
  {
    question: "Can I integrate with other tools?",
    answer:
      "We provide extensive API documentation and native integrations with popular tools like Slack, Salesforce, and Zapier.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 email support for all plans, with priority and phone support available for our Pro and Enterprise customers.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to the most common questions about our service.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
