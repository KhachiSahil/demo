import Hero from "@/components/Hero"
import TrustSection from "@/components/TrustSection"
import PainPointsSection from "@/components/PainPointsSection"
import ServicesSection from "@/components/ServicesSection"
import LeadMagnetSection from "@/components/LeadMagnetSection"
import ProcessSection from "@/components/ProcessSection"
import AdvantageSection from "@/components/Advantage"
import TestimonialsSection from "@/components/TestimonialsSection"
import FinalCTA from "@/components/FinalCTA"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
      <Hero />
      <TrustSection />
      <PainPointsSection />
      <ServicesSection />
      <LeadMagnetSection />
      <ProcessSection />
      <AdvantageSection />
      <TestimonialsSection />
      <FinalCTA />
      <AboutSection />
      <Footer/>
    </main>
  )
}

