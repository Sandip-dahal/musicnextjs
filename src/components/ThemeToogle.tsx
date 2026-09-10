// components/theme-toggle.tsx
"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="p-2 rounded-md text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
>
  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
</button>
  )
}