import { homeSectionsGridData } from "@/data/homeSections/homeSections"
import Image from "next/image"

export default function productGrid() {
   return (
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 flex-col md:p-3 gap-3">
         {
            homeSectionsGridData.map(item =>
               <div className="relative w-full h-100 sm:h-120 md:h-130 lg:h-145" key={item.id}>
                  <Image className="object-cover" priority={item.id === 1} sizes="(max-width: 768px) 100vw, 50vw" quality={100} fill alt={item.title} src={item.image} />

                  <div className="flex w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 absolute flex-col items-center justify-center px-4">
                     {
                        item.titleImage ?
                           <Image
                              className="w-28 sm:w-24 md:w-28 lg:w-32 h-auto"
                              alt="title Image"
                              width={item.titleImageWidth || 150}
                              height={item.titleImageWidth || 150}
                              quality={100}
                              src={item.titleImage}
                           /> :
                           <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white font-semibold text-center">{item.title}</h2>
                     }
                     <p className={`${item.titleImage ? "text-black" : "text-white"} text-sm sm:text-base md:text-lg lg:text-xl max-w-70 sm:max-w-80 md:max-w-88 text-center font-normal line-clamp-3`}>{item.description}</p>
                     <div className="flex flex-wrap justify-center mt-3 sm:mt-4 gap-2 sm:gap-3">
                        {
                           item.buttons.map((btn, index) =>
                              <button className={btn.variant === "filled" ? `bg-apple-blue transition-colors duration-100 hover:bg-apple-blue/95 px-4 py-2 text-sm sm:text-base rounded-3xl min-h-10 sm:min-h-11 ${item.titleImage ? "bg-apple-blue text-white" : "bg-white hover:bg-white/90 transition-colors duration-100 text-black"}` : "border border-apple-blue hover:bg-apple-blue hover:text-white transition-colors duration-200 text-apple-blue px-4 py-2 text-sm sm:text-base rounded-3xl min-h-10 sm:min-h-11"} key={index}>
                                 {btn.label}
                              </button>
                           )
                        }
                     </div>

                  </div>

               </div>
            )
         }
      </div>
   )
}