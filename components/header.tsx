"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🪴</span>
            <span className="text-xl font-semibold text-foreground lowercase">
              Eco<span className="text-primary">DIY</span>Apartment
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-sm text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/tutorials" className="text-sm text-foreground hover:text-primary transition-colors">
              Tutorials
            </Link>
            <Link href="/materials" className="text-sm text-foreground hover:text-primary transition-colors">
              Materials
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-in slide-in-from-top-2">
            <Input type="search" placeholder="Search eco projects, tutorials..." className="w-full" />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-2 animate-in slide-in-from-top-2">
            <Link href="/" className="text-sm text-foreground hover:text-primary transition-colors py-2">
              Home
            </Link>
            <Link href="/projects" className="text-sm text-foreground hover:text-primary transition-colors py-2">
              Projects
            </Link>
            <Link href="/tutorials" className="text-sm text-foreground hover:text-primary transition-colors py-2">
              Tutorials
            </Link>
            <Link href="/materials" className="text-sm text-foreground hover:text-primary transition-colors py-2">
              Materials
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:text-primary transition-colors py-2">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
