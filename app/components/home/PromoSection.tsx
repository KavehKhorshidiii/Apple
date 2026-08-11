import { homeSectionsData } from "@/data/homeSections/homeSections"
import Image from "next/image"

export default function PromoSection() {
   return (
      <div className="bg-white flex flex-col gap-2 sm:gap-3">
         {homeSectionsData.map((item) => (
            <div
               className="relative w-full h-90 sm:h-120 md:h-150 lg:h-170"
               key={item.id}
            >
               <Image
                  className="object-cover"
                  priority={item.id === 1}
                  sizes="2000px"
                  quality={100}
                  fill
                  alt={item.title}
                  src={item.image}
               />

               <div className="flex gap-2 sm:gap-3 md:gap-4 w-full mt-5 sm:mt-10 md:mt-15 absolute flex-col items-center justify-center px-4 sm:px-6">
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center">
                     {item.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-xl lg:text-2xl max-w-70 sm:max-w-90 md:max-w-110 lg:max-w-130 text-center font-normal line-clamp-2">
                     {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                     {item.buttons.map((btn, btnIndex) => (
                        <button
                           className={
                              btn.variant === "filled"
                                 ? "bg-apple-blue hover:bg-apple-blue/90 text-white transition-colors duration-200 px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base md:text-lg rounded-3xl min-h-10 sm:min-h-11"
                                 : "border text-sm sm:text-base md:text-lg border-blue-500 text-blue-500 hover:bg-apple-blue hover:text-white transition-colors duration-200 px-4 py-2 sm:px-5 sm:py-2.5 rounded-3xl min-h-10 sm:min-h-11"
                           }
                           key={btnIndex}
                        >
                           {btn.label}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}