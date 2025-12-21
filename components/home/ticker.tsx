"use client"

export default function Ticker() {
  return (
    <div className="py-8 bg-gradient-to-r from-primary via-secondary to-accent overflow-hidden">
      <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-2xl font-bold text-white px-8">Creative Agency</span>
            <span className="text-2xl text-white/50">•</span>
            <span className="text-2xl font-bold text-white px-8">Digital Studio</span>
            <span className="text-2xl text-white/50">•</span>
            <span className="text-2xl font-bold text-white px-8">E-Commerce Experts</span>
            <span className="text-2xl text-white/50">•</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  )
}
