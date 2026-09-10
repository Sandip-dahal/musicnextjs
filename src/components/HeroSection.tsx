import React from "react"
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
function HeroSection() {
  return (
    <div 
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center text-white">

        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> Master the art of music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Music doesn't ask where you come from, 
          what language you speak, 
          or what you believe — it simply asks you to listen, 
          and in that listening, it makes you whole.
          join us to unlock your true potential
        </p>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white  dark:border-slate-800"
      >
        <div className="mt-20"></div>
        <Link href={"/course"}>
        Explore Courses
        </Link>
        </Button>
        

      </div>
      </div>
  )
}

export default HeroSection