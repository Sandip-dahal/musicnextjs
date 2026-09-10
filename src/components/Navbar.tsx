"use client"
import React, { act, useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { ThemeToggle } from './ThemeToogle';

function Navbar({ className}: {className?: string} ) {

  const [active , setActive] = useState<string |null> (null)
  return (
    <div className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}>
      <Menu setActive={ setActive}>
        <Link href={"/"}>
        <MenuItem setActive= {setActive} active={active} item='Home'>
       
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item='Our Courses'>
        
        <div className='flex flex-col space-y-4 text-sm'>
        <HoveredLink href = "/course">All Courses</HoveredLink>
        <HoveredLink href = "/course/basicMusicTheory">Basic Music Theory</HoveredLink>
        <HoveredLink href = "/course/advancedComposition">Advanced Composition</HoveredLink>
        <HoveredLink href = "/course/songWritting">SongWritting</HoveredLink>
        <HoveredLink href = "/course/musicProduction">Music Production</HoveredLink>
        </div>

        </MenuItem>

        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item ="Contact Us">

        </MenuItem>
        </Link>
        <ThemeToggle />
      </Menu>
      
    </div>
  )
}

export default Navbar