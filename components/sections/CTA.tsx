"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center bg-primary text-primary-foreground p-8 md:p-12 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
          <p className="max-w-[700px] text-lg md:text-xl">
            Join thousands of satisfied users and transform your business today.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#pricing">Sign Up Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
