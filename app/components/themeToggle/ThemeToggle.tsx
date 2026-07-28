"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
   
   const { theme, setTheme } = useTheme()

   return (
      <button
         type="button"
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         aria-label="Toggle theme"
      >
         <Sun className="lg:size-4 size-5 dark:hidden" />
         <Moon className="lg:size-4 size-5 hidden dark:block" />
      </button>
   )
}