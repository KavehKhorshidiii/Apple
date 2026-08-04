'use client'

import { useEffect, useState } from "react"

interface CarouselProps<T> {
   items: T[];
   renderItem: (item: T) => React.ReactNode;
}

export default function Carousel<T>({ items, renderItem }: CarouselProps<T>) {

   const [currentIndex, setCurrentIndex] = useState(0)
   const nextIndex = (currentIndex + 1) % items.length
   const prevIndex = (currentIndex - 1 + items.length) % items.length

   const handlePrev = () => setCurrentIndex(prevIndex)
   const handleNext = () => setCurrentIndex(nextIndex)

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentIndex(nextIndex)
      }, 3000);

      return () => {
         clearInterval(intervalId)
      }
   }, [currentIndex, nextIndex])

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
            <button onClick={handlePrev} className="border rounded-4xl px-4 py-2">prev</button>
            <button onClick={handleNext} className="border rounded-4xl px-4 py-2">next</button>
         </div>
      </div>
   )
}