import Link from "next/link"
import { Button, MovingBorder } from "@/components/ui/moving-border"


function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        <div className="max-w-2xl mx-auto p-4 relative z-10">

            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 dark:text-white text-gray">MUSIC PRODUCTION</h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
               Music production is the process of taking a song from a raw idea to a fully realized, polished recording — it's where creativity meets technical craft. It starts with recording, capturing vocals and instruments with the right microphones, levels, and performances, then moves into arranging, deciding how each element fits together across the timeline to build energy and keep listeners engaged. From there, mixing balances every track's volume, tone, and spatial placement so nothing competes for attention and everything sits together cohesively, while mastering puts the final polish on the entire song, ensuring it sounds loud, clear, and consistent across every speaker or platform it's played on. Modern production also relies heavily on DAWs (Digital Audio Workstations) like Ableton, Logic, or Pro Tools, along with virtual instruments, samples, and effects that give producers near-limitless creative control. Ultimately, music production is both technical and artistic — understanding the tools deeply enough that they disappear, leaving only the song and the emotion it was built to carry.
            </p>

            <div className="flew justify-center gap-4"> 
            <Link href={"/contact"}>
            <Button borderRadius="1.8rem"
            className="px-4 py-4 mx-4">
                Contact Us
            </Button>
            </Link>
            
            
            <Button borderRadius = '1.75rem'
            className="px-4 py-4 mx-4">
                <h1>Follow Us</h1>
            </Button>
            </div>
        </div>
    </div>
  )
}

export default page