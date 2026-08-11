'use client'

import { ReactNode, useEffect, useRef, useState } from "react"
import { ChevronRight, ChevronLeft, Pause } from 'lucide-react'

interface CarouselProps<T> {
   items: T[];
   renderItem: (item: T) => ReactNode;
}

export default function Carousel<T>({ items, renderItem }: CarouselProps<T>) {

   const Duration = 3000

   const [currentIndex, setCurrentIndex] = useState(0)
   const [isHighlightedR, setIsHighlightedR] = useState(false)
   const [isPaused, setIsPaused] = useState(false)
   const [isHighlightedL, setIsHighlightedL] = useState(false)
   const [viewportWidth, setViewportWidth] = useState(0)

   const viewportRef = useRef<HTMLDivElement>(null)

   useEffect(() => {

      if (!viewportRef.current) return

      const updateWidth = () => {
         setViewportWidth(viewportRef.current!.clientWidth)
      }

      updateWidth()

      const observer = new ResizeObserver(updateWidth)
      observer.observe(viewportRef.current)

      return () => observer.disconnect()

   }, [])

   useEffect(() => {

      if (isPaused || items.length <= 1) {
         return
      }

      const timeoutId = setTimeout(() => {
         setCurrentIndex(prev => (prev + 1) % items.length)
      }, Duration)

      return () => {
         clearTimeout(timeoutId)
      }

   }, [currentIndex, isPaused, items.length])

   const nextIndex = items.length > 0
      ? (currentIndex + 1) % items.length
      : 0

   const prevIndex = items.length > 0
      ? (currentIndex - 1 + items.length) % items.length
      : 0

   const isMobile = viewportWidth < 640

   const slideWidth = viewportWidth * (isMobile ? 0.85 : 0.6)

   const gap = isMobile ? 8 : 12

   const sideSpace = (viewportWidth - slideWidth) / 2

   const translateX = sideSpace - currentIndex * (slideWidth + gap)

   const handlePrev = () => {

      if (!items.length) return

      setCurrentIndex(prevIndex)
      setIsHighlightedL(true)

      setTimeout(() => {
         setIsHighlightedL(false)
      }, 1000)

   }

   const handleNext = () => {

      if (!items.length) return

      setCurrentIndex(nextIndex)
      setIsHighlightedR(true)

      setTimeout(() => {
         setIsHighlightedR(false)
      }, 1000)

   }

   const handlePauseToggle = () => {
      setIsPaused(prev => !prev)
   }

   if (!items.length) return null

   return (
      <div>

         {/* Viewport */}
         <div ref={viewportRef} className="h-64 sm:h-80 md:h-100 lg:h-120 xl:h-140 overflow-hidden">

            {/* Track */}
            <div
               className="flex h-full transition-transform duration-500 ease-out"
               style={{ gap: `${gap}px`, transform: `translateX(${translateX}px)` }}
            >
               {items.map((item, index) => (
                  <div key={index} className="shrink-0 h-full overflow-hidden" style={{ width: `${slideWidth}px` }}>
                     <div className="relative h-full">
                        {renderItem(item)}
                     </div>
                  </div>
               ))}
            </div>

         </div>


         {/* Controls */}
         <div>
            <div className="flex pt-2 sm:pt-3 pb-6 sm:pb-8 md:pb-10 justify-center">

               <div className="relative rounded-4xl">

                  {/* Progress Ring */}
                  <div
                     key={currentIndex}
                     style={!isPaused ? { animationDuration: `${Duration}ms` } : {}}
                     className="progress-ring absolute inset-0 rounded-4xl"
                  />

                  {/* Buttons */}
                  <div className="relative flex bg-apple-bg justify-center items-center rounded-4xl gap-1.5 sm:gap-2 m-0.5">

                     <button onClick={handlePrev} className="rounded-full px-1.5 py-1.5 sm:px-2 sm:py-2">
                        <ChevronLeft className={`size-4 sm:size-5 transition-all duration-300 ${isHighlightedL ? "scale-120 text-apple-blue" : "text-black scale-100"}`}/>
                     </button>

                     <button onClick={handlePauseToggle} className="rounded-full px-1.5 py-1.5 sm:px-2 sm:py-2">
                        <Pause className={`size-3.5 sm:size-4 transition-all duration-300 ${isPaused ? "scale-120 text-apple-blue" : "text-black scale-100"}`}/>
                     </button>

                     <button onClick={handleNext} className="bg-apple-bg rounded-full px-1.5 py-1.5 sm:px-2 sm:py-2">
                        <ChevronRight className={`size-4 sm:size-5 transition-all duration-300 ${isHighlightedR ? "scale-120 text-apple-blue" : "text-black scale-100"}`}/>
                     </button>

                  </div>
               </div>

            </div>
         </div>

      </div>
   )
}