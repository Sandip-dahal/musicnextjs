import Link from "next/link"
import { Button } from "@/components/ui/moving-border"



function page() {
  return (
   <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        <div className="max-w-2xl mx-auto p-4 relative z-10">

            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 dark:text-white text-gray"> ADVANCED COMPOSITION</h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                Advanced composition moves beyond basic chords and scales into the art of shaping a piece with intention 
                — how tension builds and releases, how themes develop and transform, and how every element serves the emotional arc of the music. 
                At this level, composers explore modulation (shifting between keys to create movement or surprise), counterpoint (weaving multiple independent melodic lines that work together harmonically), and advanced harmony like extended and altered chords that add color and complexity beyond simple triads. 
                Structure becomes just as important as the notes themselves — understanding how to build a piece across sections (verse, bridge, development, recapitulation) so it feels cohesive rather than random. 
                Advanced composers also learn orchestration and arrangement, deciding which instruments or voices carry which parts to achieve a specific texture or emotional weight. 
                Ultimately, advanced composition is less about following rules and more about knowing them well enough to bend or break them purposefully — turning technical mastery into genuine artistic voice.
            </p>
            <Link href={"/contact"}>
            <Button borderRadius="1.8rem">
                Contact Us
            </Button>
            </Link>
        </div>
    </div>
  )
}

export default page