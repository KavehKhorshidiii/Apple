

'use client'

import { homeSectionsGridData } from "@/data/homeSections/homeSections"
import { useState } from "react"

export default function Entertainment() {

   const [currentIndex, setCurrentIndex] = useState(0)
   const nextIndex = (currentIndex + 1) % homeSectionsGridData.length
   const prevIndex = (currentIndex - 1 + homeSectionsGridData.length) % homeSectionsGridData.length

   const handlePrev = () => setCurrentIndex(prevIndex)
   const handleNext = () => setCurrentIndex(nextIndex)

   return (
      <div className="bg-apple-bg">
         {/* Title */}
         <h2 className="pt-15 pb-5 text-center font-bold text-5xl">Endless entertainment.</h2>

         {/* Carousel */}
         <div className="h-96 border overflow-hidden">
            <div
               className="flex gap-5 h-full transition-transform duration-500 ease-out"
               style={{ transform: `translateX(${20 - currentIndex * 60}%)` }}
            >
               {homeSectionsGridData.map(item => (
                  <p key={item.id} className="w-3/5 shrink-0 border">
                     {item.title}
                  </p>
               ))}
            </div>
         </div>
         <div className="flex justify-center gap-4 py-5">
            <button onClick={handlePrev} className="border rounded-4xl px-4 py-2">prev</button>
            <button onClick={handleNext} className="border rounded-4xl px-4 py-2">next</button>
         </div>
      </div>
   )
}