import Link from "next/link"
import { Button } from "@/components/ui/moving-border"



function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        <div className="max-w-2xl mx-auto p-4 relative z-10">

            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 dark:text-white text-gray"> SONG WRITTING</h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                Songwriting is where music theory meets storytelling — the craft of turning an idea, feeling, or experience into a structure that resonates with listeners. 
                At its heart, it combines melody (the memorable line people sing back), lyrics (the words that carry meaning and emotion), and harmony (the chords that support and color the mood) into a unified whole. 
                Great songwriting also relies on structure — knowing how to build verses that set up a story, choruses that deliver the emotional payoff, and bridges that offer contrast before returning home. Beyond technique, songwriting is deeply personal: it's about finding your own voice, drawing from real experiences or imagination, and learning to edit ruthlessly until every word and note earns its place. 
                Whether you're writing a simple acoustic ballad or a full-band anthem, songwriting is a skill built through practice — learning the rules well enough to know when breaking them serves the song better.
            </p>
            <div className="mt-20">
            <Link href={"/contact"}>
            <Button borderRadius="1.8rem">
                Contact Us
            </Button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default page