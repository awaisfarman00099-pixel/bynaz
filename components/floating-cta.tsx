"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-24 right-8 z-40">
        {isOpen && (
          <div className="mb-4 glass p-4 rounded-2xl animate-in slide-in-from-bottom duration-300 max-w-xs">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-muted-foreground">
              <X size={16} />
            </button>
            <p className="text-sm mb-3">Need help? Get in touch with us!</p>
            <div className="space-y-2">
              <Button asChild size="sm" className="w-full bg-gradient-to-r from-primary to-secondary" variant="default">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="sm" className="w-full bg-transparent" variant="outline">
                <a href="https://wa.me/923147860366" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary glow-primary hover:opacity-90 transition-all"
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    </>
  )
}
