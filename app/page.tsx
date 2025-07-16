import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CTA";
import FaqSection from "@/components/sections/Faq-Section";
import FeaturesGrid from "@/components/sections/Features";
import HeroSection from "@/components/sections/Hero";
import HowItWorksSection from "@/components/sections/HowItWorks";
import IntegrationsSection from "@/components/sections/Integrations";
import PricingSection from "@/components/sections/Pricinng";
import TestimonialsSection from "@/components/sections/Testimonials";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Navbar with responsive positioning */}
      <Navbar />
      
      {/* Main content with responsive spacing */}
      <main className="flex-1 w-full">
        {/* Hero Section - Full viewport on mobile, optimized spacing on larger screens */}
        <section className="w-full">
          <HeroSection />
        </section>
        
        {/* Features Grid - Responsive grid layout */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <FeaturesGrid />
        </section>
        
        {/* How It Works - Responsive step layout */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <HowItWorksSection />
        </section>
        
        {/* Testimonials - Responsive card grid */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <TestimonialsSection />
        </section>
        
        {/* Pricing - Responsive pricing cards */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </section>
        
        {/* Integrations - Responsive logo grid */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <IntegrationsSection />
        </section>
        
        {/* FAQ - Responsive accordion */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <FaqSection />
        </section>
        
        {/* CTA Section - Full width with responsive content */}
        <section className="w-full">
          <CtaSection />
        </section>
      </main>
      
      {/* Footer with responsive layout */}
      <Footer />
    </div>
  )
}