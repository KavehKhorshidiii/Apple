'use client'

import { useEffect, useState } from "react"
import { ChevronRight, ChevronLeft, Pause } from 'lucide-react';


interface CarouselProps<T> {
   items: T[];
   renderItem: (item: T) => React.ReactNode;
}

export default function Carousel<T>({ items, renderItem }: CarouselProps<T>) {

   const Duration = 3000

   const [currentIndex, setCurrentIndex] = useState(0)

   const [isHighlightedR, setIsHighlightedR] = useState(false)
   const [isPaused, setIsPaused] = useState(false)
   const [isHighlightedL, setIsHighlightedL] = useState(false)

   const nextIndex = (currentIndex + 1) % items.length
   const prevIndex = (currentIndex - 1 + items.length) % items.length

   const handlePrev = () => {
      setCurrentIndex(prevIndex)
      setIsHighlightedL(true)
      setTimeout(() => {
         setIsHighlightedL(false)
      }, 1000)
   }

   const handleNext = () => {
      setCurrentIndex(nextIndex)
      setIsHighlightedR(true)
      setTimeout(() => {
         setIsHighlightedR(false)
      }, 1000)
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
         <div>
            <div className="flex pt-3 pb-10 justify-center">
               <div className="relative rounded-4xl">

                  {/*  */}
                  <div
                     key={currentIndex}
                     style={!isPaused ? { animationDuration: `${Duration}ms` } : {}}
                     className="progress-ring absolute inset-0 rounded-4xl"
                  />

                  {/* */}
                  <div className="relative flex bg-apple-bg justify-center rounded-4xl gap-2 m-0.5">
                     <button onClick={handlePrev} className="rounded-full px-2 py-2"> <ChevronLeft className={`size-5 transition-all duration-300 ${isHighlightedL ? "scale-120 text-apple-blue" : "text-black scale-100"}`} /> </button>
                     <button onClick={handlePauseToggle} className={`transition-all duration-300 rounded-full px-2 py-2`}> <Pause className={` transition-all size-4 duration-300 ${isPaused ? "scale-120 text-apple-blue border-apple-blue" : "text-black border-apple-grow scale-100"}`}/></button>
                     <button onClick={handleNext} className="bg-apple-bg rounded-full px-2 py-2"> <ChevronRight className={`size-5 transition-all duration-300 ${isHighlightedR ? "scale-120 text-apple-blue" : "text-black scale-100"}`}/></button>
                  </div>
               </div>

            </div>
         </div>



      </div>


   )
}