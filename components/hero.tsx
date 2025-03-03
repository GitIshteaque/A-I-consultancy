"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-white opacity-80" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </svg>
    </div>
  )
}

function BackgroundGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[140%] h-[140%] md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
    </div>
  )
}

export default function Hero() {
  const title = "Your Partner in Business Growth and Automation"
  const words = title.split(" ")

  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black">
      <BackgroundGlow />
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold 
                     mb-6 sm:mb-8 md:mb-10 tracking-tighter px-4 sm:px-0
                     break-words hyphens-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/80">
              {title}
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 
                     max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering your business with innovative solutions and strategic growth
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 
                     px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-full sm:w-auto inline-block group relative bg-gradient-to-b 
                        from-white/10 to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <Button
                variant="ghost"
                className="w-full sm:w-auto rounded-[1.15rem] px-6 sm:px-8 py-4 sm:py-6 
                        text-base sm:text-lg font-semibold backdrop-blur-md 
                        bg-black/95 hover:bg-black/90 text-white transition-all duration-500 
                        group-hover:-translate-y-0.5 border border-white/10
                        hover:shadow-md hover:shadow-white/5 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    Discover Excellence
                  </span>
                  <span className="ml-2 sm:ml-3 opacity-70 group-hover:opacity-100 inline-block transition-all">
                    →
                  </span>
                </span>
              </Button>
            </div>

            <Button
              variant="ghost"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg
                      text-white border border-white/10 hover:bg-white/5 
                      transition-all duration-300 rounded-[1.15rem]"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

