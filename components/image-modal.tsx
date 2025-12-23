"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ImageModalProps {
  src: string
  alt: string
  title?: string
  description?: string
  children: React.ReactNode
}

export default function ImageModal({
  src,
  alt,
  title,
  description,
  children,
}: ImageModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-background/95 backdrop-blur-sm border-0">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
          />
          {(title || description) && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent rounded-b-lg">
              {title && <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>}
              {description && (
                <p className="text-muted-foreground text-sm">{description}</p>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

