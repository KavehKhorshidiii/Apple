'use client'

import Carousel from "../common/carousel/carousel"
import Image from "next/image"
import { entertainmentData } from "@/data/CarouselEntertainment/CarouselEntertainment"
import Link from "next/link"


export default function Entertainment() {


   return (
      <div className="bg-apple-bg">
         {/* Title */}
         <h2 className="pt-15 pb-5 text-center font-bold text-5xl">Endless entertainment.</h2>

         {/* Carousel */}
         <Carousel items={entertainmentData} renderItem={(item) =>
            <>
               <Image fill quality={100} className=" object-cover" src={item.image} alt="entertainment Image"></Image>
               <div className=" flex items-center gap-5 absolute bottom-10 left-10">
                  {item.buttons.map((btn,index) => <Link className=" bg-white p-3 rounded-4xl" href={btn.href} key={index}>{btn.label}</Link>)}
                  <p className=" text-white font-bold">{item.description}</p>
               </div>
            </>
         } />

      </div>
   )
}