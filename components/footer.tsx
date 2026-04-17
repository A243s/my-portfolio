"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterTheme {
  background: string
  foreground: string
  accent: string
  muted: string
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function ItchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
      <path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.96-63.73C96.65 300.46 109.54 223 161.87 223z"/>
    </svg>
  )
}

export function Footer({ theme }: { theme?: FooterTheme }) {
  const containerStyle = theme
    ? { backgroundColor: theme.background, borderColor: theme.muted }
    : undefined

  const iconStyle = theme ? { color: theme.foreground } : undefined
  const emailStyle = theme ? { color: theme.foreground } : undefined
  const navStyle = theme ? { color: theme.foreground } : undefined

  return (
    <footer
      className={cn(
        "",
        !theme && "bg-background"
      )}
      style={containerStyle}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-14 md:py-16 flex items-center justify-between">
        {/* Social icons */}
        <div className="flex items-center gap-16 md:gap-20">
          <a
            href="https://linkedin.com/in/lmouidini/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("transition-all duration-200 hover:scale-125 hover:opacity-70", !theme && "text-foreground")}
            style={iconStyle}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/resveram/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("transition-all duration-200 hover:scale-125 hover:opacity-70", !theme && "text-foreground")}
            style={iconStyle}
            aria-label="Instagram"
          >
            <InstagramIcon className="w-8 h-8" />
          </a>
          <a
            href="https://resveram.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("transition-all duration-200 hover:scale-125 hover:opacity-70", !theme && "text-foreground")}
            style={iconStyle}
            aria-label="itch.io"
          >
            <ItchIcon className="w-8 h-8" />
          </a>
        </div>

        {/* Email */}
        <a
          href="mailto:Lmouidini@outlook.com"
          className={cn("transition-all duration-200 hover:opacity-70 text-base md:text-lg font-medium hidden sm:inline", !theme && "text-foreground")}
          style={emailStyle}
        >
          Lmouidini@outlook.com
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-10 md:gap-12">
          <Link
            href="/"
            className={cn("transition-all duration-200 hover:scale-110 hover:opacity-70 text-base md:text-lg font-semibold", !theme && "text-foreground")}
            style={navStyle}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={cn("transition-all duration-200 hover:scale-110 hover:opacity-70 text-base md:text-lg font-semibold", !theme && "text-foreground")}
            style={navStyle}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={cn("transition-all duration-200 hover:scale-110 hover:opacity-70 text-base md:text-lg font-semibold", !theme && "text-foreground")}
            style={navStyle}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
