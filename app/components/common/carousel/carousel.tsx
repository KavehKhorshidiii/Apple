'use client'

import { useEffect, useState } from "react"
import { ChevronRight, ChevronLeft, Equal } from 'lucide-react';


interface CarouselProps<T> {
   items: T[];
   renderItem: (item: T) => React.ReactNode;
}

export default function Carousel<T>({ items, renderItem }: CarouselProps<T>) {

   const Duration = 3000

   const [currentIndex, setCurrentIndex] = useState(0)
   const [isPaused, setIsPaused] = useState(false)
   const [isHighlighted, setIsHighlighted] = useState(false)

   const nextIndex = (currentIndex + 1) % items.length
   const prevIndex = (currentIndex - 1 + items.length) % items.length

   const handlePrev = () => {
      setCurrentIndex(prevIndex)
      setIsHighlighted(true)
      setTimeout(() => {
         setIsHighlighted(false)
      }, Duration)
   }

   const handleNext = () => {
      setCurrentIndex(nextIndex)
   }

   const handlePauseToggle = () => {
      setIsPaused(prev => !prev)
      if (isPaused) {
         setTimeout(() => { setCurrentIndex(nextIndex) }, 0);
      }
   }



   useEffect(() => {

      if (isPaused) {
         return;
      }

      const intervalId = setInterval(() => {
         setCurrentIndex(nextIndex)
      }, Duration);

      return () => {
         clearInterval(intervalId)
      }

   }, [currentIndex, nextIndex, isPaused])

   return (
      <div>
         {/* Viewport */}
         <div className="h-140 overflow-hidden">
            {/* Track */}
            <div className="flex gap-3 h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(${20 - currentIndex * 60}%)` }}>
               {items.map((item, index) => (
                  <div key={index} className="w-3/5 overflow-hidden shrink-0">
                     <div className=" relative h-full">
                        {renderItem(item)}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Controls */}
         <div className="flex justify-center gap-4 py-5">
            
            <button onClick={handlePrev} className={`border-2  rounded-full px-2 py-2 ${isHighlighted ? 'border-apple-blue' : 'border-apple-grow'}`}><ChevronLeft className=" size-5 " /></button>
            <button onClick={handlePauseToggle} className={`border-2 rounded-full p-2 ${isPaused ? "border-apple-blue" : "border-apple-grow"}`}><Equal className=" size-5 rotate-90" /></button>
            <div key={currentIndex} style={!isPaused ? { animationDuration: `${Duration}ms` } : {}} className="progress-ring p-0.5 rounded-4xl">
               <button onClick={handleNext} className=" bg-apple-bg  rounded-full px-2 py-2"><ChevronRight className=" size-5" /></button>
            </div>
         </div>
      </div>
   )
}