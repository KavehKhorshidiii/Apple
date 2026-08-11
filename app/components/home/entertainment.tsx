'use client'

import Carousel from "../common/carousel/carousel"
import Image from "next/image"
import { entertainmentData } from "@/data/CarouselEntertainment/CarouselEntertainment"
import Link from "next/link"

export default function Entertainment() {

   return (
      <div className="bg-apple-bg">

         {/* Title */}
         <h2 className="pt-8 sm:pt-10 md:pt-12 lg:pt-15 pb-3 sm:pb-4 md:pb-5 px-4 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Endless entertainment.</h2>

         {/* Carousel */}
         <Carousel items={entertainmentData} renderItem={(item) =>
            <>
               <Image fill quality={100} sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 60vw" className="object-cover" src={item.image} alt="entertainment Image" />

               <div className="flex flex-col lg:flex-row-reverse lg:justify-between items-center gap-3 sm:gap-4 absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-10 text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-bold max-w-[90%] sm:max-w-[80%] lg:max-w-none">{item.description}</p>

                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                     {item.buttons.map((btn, index) => <Link className="bg-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base rounded-4xl whitespace-nowrap" href={btn.href} key={index}>{btn.label}</Link>)}
                  </div>
               </div>
            </>
         } />

      </div>
   )
}