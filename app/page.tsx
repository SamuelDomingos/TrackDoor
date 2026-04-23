"use client"

import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { CTASection } from "@/components/home/cta-section"
import { Navbar } from "@/components/home/navbar"
import { HowItWorksSection } from "@/components/home/howItWorksSection"
import { TestimonialsSection } from "@/components/home/testimonialsSection"
import { VideoSection } from "@/components/home/videoSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
