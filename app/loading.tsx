export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Animated Logo */}
        <div className="w-24 h-24 flex items-center justify-center animate-pulse">
          <img 
            src="/logo/logo.png" 
            alt="BYZ AMAN E-COMMERCE AGENCY" 
            className="h-20 w-auto"
          />
        </div>

        {/* Loading Spinner */}
        <div className="absolute -inset-4">
          <div className="w-32 h-32 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    </div>
  )
}
