"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type="button"
      className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-600 relative transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-700"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <div
        className={`
          absolute w-5 h-5 rounded-full bg-white shadow-sm
          transition-transform duration-200 ease-in-out
          ${theme === "dark" ? "translate-x-6" : "translate-x-1"}
          top-0.5
        `}
      />
    </button>
  )
} 