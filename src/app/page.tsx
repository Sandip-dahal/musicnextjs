import HeroSection from "@/components/HeroSection"
import FeaturedCourses from "@/components/FeaturedCourses"
import WhyChooseUs from "@/components/WhyChooseUs"
import { MovingBorder } from "@/components/ui/moving-border"
import TestimonialsGridAndMovingCard from "@/components/MovingCards"
import UpcommingWebinar from "@/components/UpcommingWebinar"
import Instructor from "@/components/Instructor"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialished bg-grid-white/[0.02]">
      <h1 className="text-center text-2xl text-white"> music class</h1>
      
      <HeroSection  />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialsGridAndMovingCard />
      <UpcommingWebinar />
      <Instructor />
      <Footer />
    </main>
  )
    
}
