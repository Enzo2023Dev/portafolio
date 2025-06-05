export function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden dark:bg-black-pearl-950 ${className}`}>
      <div className="absolute -top-40 -left-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-3xl dark:from-purple-300 dark:to-cyan-300" />
      <div className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 blur-3xl dark:from-pink-200 dark:to-blue-200" />
    </div>
  )
}
