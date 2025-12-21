export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Animated Logo */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-4xl animate-pulse glow-primary">
          B
        </div>

        {/* Loading Spinner */}
        <div className="absolute -inset-4">
          <div className="w-32 h-32 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    </div>
  )
}
