"use client"

import Link from "next/link"
import { Mountain, Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Track scroll position for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-lg' 
        : 'bg-background/70 backdrop-blur-sm border-b border-border/20'
    }`}>
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50 group">
          <div className="relative">
            <Mountain className="h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Acme SaaS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Link 
              href="#features" 
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="#pricing" 
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="#faq" 
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              asChild 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href="#contact" className="flex items-center space-x-2">
                <span>Get Started</span>
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className={`h-10 w-10 p-0 rounded-full transition-all duration-300 ${
              isMenuOpen 
                ? 'bg-primary/10 text-primary rotate-90' 
                : 'hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-16 left-0 right-0 transition-all duration-300 ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-xl">
          <nav className="container px-4 py-6 space-y-4">
            <div className="space-y-3">
              <Link 
                href="#features" 
                className="block text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/5 group"
                onClick={toggleMenu}
              >
                <span className="flex items-center justify-between">
                  Features
                  <span className="w-0 group-hover:w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300" />
                </span>
              </Link>
              <Link 
                href="#pricing" 
                className="block text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/5 group"
                onClick={toggleMenu}
              >
                <span className="flex items-center justify-between">
                  Pricing
                  <span className="w-0 group-hover:w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300" />
                </span>
              </Link>
              <Link 
                href="#faq" 
                className="block text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/5 group"
                onClick={toggleMenu}
              >
                <span className="flex items-center justify-between">
                  FAQ
                  <span className="w-0 group-hover:w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300" />
                </span>
              </Link>
            </div>
            
            <div className="pt-4 border-t border-border/20">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="#contact" onClick={toggleMenu} className="flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}