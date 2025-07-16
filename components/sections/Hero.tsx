"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Sparkles, Zap, Shield } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium w-fit mx-auto lg:mx-0"
            >
              <Sparkles className="h-4 w-4" />
              New: AI-Powered Features
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight">
                Unlock Your{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Potential
                </span>{" "}
                with Our SaaS Solution
              </h1>
              <p className="max-w-2xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mx-auto lg:mx-0">
                Streamline your workflow, boost productivity, and achieve your goals faster with our intuitive and
                powerful platform designed for modern teams.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="#pricing">
                  Get Started Free
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link href="#features">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <span>Trusted by 10,000+ companies</span>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <span>99.9% Uptime</span>
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Placeholder for Hero Image/Illustration */}
            <div className="relative w-full max-w-lg lg:max-w-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Interactive Dashboard Preview
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-pulse delay-500" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent/20 rounded-full animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}