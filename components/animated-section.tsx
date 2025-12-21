"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale"
  delay?: number
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClasses = {
    fade: "opacity-0 transition-opacity duration-1000",
    "slide-up": "opacity-0 translate-y-20 transition-all duration-1000",
    "slide-left": "opacity-0 translate-x-20 transition-all duration-1000",
    "slide-right": "opacity-0 -translate-x-20 transition-all duration-1000",
    scale: "opacity-0 scale-95 transition-all duration-1000",
  }

  const visibleClasses = {
    fade: "opacity-100",
    "slide-up": "opacity-100 translate-y-0",
    "slide-left": "opacity-100 translate-x-0",
    "slide-right": "opacity-100 translate-x-0",
    scale: "opacity-100 scale-100",
  }

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? visibleClasses[animation] : ""} ${className}`}
    >
      {children}
    </div>
  )
}
