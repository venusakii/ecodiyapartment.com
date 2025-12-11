import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-secondary/10 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl animate-float">🪴</span>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-3 text-balance">Build Green. Live Simple.</h3>
          <p className="text-muted-foreground mb-6 text-balance">
            Get monthly small-space eco project ideas delivered to your inbox
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="flex-1" />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe 🌱
            </Button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Projects
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/materials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Eco Materials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects?category=plants"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  🪴 Plant Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=furniture"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  🪚 Furniture & Storage
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=lighting"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  🕯️ Lighting & Decor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 EcoDIYApartment.com — All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
