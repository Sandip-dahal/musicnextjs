"use client"

import { Button } from "@/components/ui/moving-border"
import Link from "next/link"

function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        <div className="max-w-2xl mx-auto p-4 relative z-10">

            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 dark:text-white text-gray"> BASIC MUSIC THEORY</h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                Music theory is the framework that explains how musical sounds work together to create the songs we hear every day. 
                At its core, it starts with the twelve notes of the chromatic scale — the same building blocks used in every genre, from classical to rock to pop. 
                From these notes, we build scales, which are specific patterns of notes that give a piece of music its mood; a major scale tends to sound bright and happy, while a minor scale often feels more emotional or melancholic. 
                Stack certain notes from a scale together and you get a chord — the harmonic foundation beneath most melodies, whether it's three notes forming a simple triad on a piano or a full band playing together. 
                Chords don't exist in isolation either; 
                they follow chord progressions, common patterns (like the famous I-IV-V-I progression) that give songs their sense of movement, tension, and resolution. 
                Layered on top of harmony is rhythm — the timing and pulse of music, measured in beats and organized into patterns called time signatures, which is what makes you tap your foot or nod your head along to a song. 
                Finally, melody ties it all together: a sequence of single notes, drawn from the underlying scale and moving over the chord progression, that becomes the memorable, singable part of a piece — the part you hum after the song ends. 
                Understanding these fundamentals — notes, scales, chords, rhythm, and melody — doesn't just help you analyze music theoretically; 
                it gives you the practical tools to actually play an instrument, write your own songs, or improvise confidently, because you start to hear why music works the way it does, not just that it does.
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