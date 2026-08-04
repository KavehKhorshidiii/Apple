import { homeSectionsGridData } from "@/data/homeSections/homeSections"
import Image from "next/image"

export default function productGrid() {
   return (
      <div className=" bg-white grid grid-cols-2 flex-col p-3 gap-3">
         {
            homeSectionsGridData.map((item, index) =>
               <div className="relative w-full h-145" key={item.id}>
                  <Image className="object-cover" loading={index === 0 ? "eager" : "lazy"} priority={item.id === 1} sizes="100vw" quality={100} fill alt={item.title} src={item.image} />

                  <div className="flex w-full mt-12 absolute flex-col items-center justify-center">
                     {
                        item.titleImage ?
                           <Image className="" alt="title Image" width={item.titleImageWidth || 150} height={item.titleImageWidth || 150} quality={100} src={item.titleImage} />
                           :
                           <h2 className=" text-4xl text-white font-semibold">{item.title}</h2>
                     }
                     <p className={`${item.titleImage ? "text-black" : "text-white"} text-xl max-w-88 text-center font-normal line-clamp-3`}>{item.description}</p>
                     <div className="flex mt-4 gap-3">
                        {
                           item.buttons.map((btn, index) =>
                              <button className={btn.variant === "filled" ? `bg-apple-blue transition-colors duration-100 hover:bg-apple-blue/95 px-4 py-2  rounded-3xl ${item.titleImage ? "bg-apple-blue text-white" : "bg-white hover:bg-white/90 transition-colors duration-100 text-black"}` : "border border-apple-blue hover:bg-apple-blue hover:text-white transition-colors duration-200 text-apple-blue px-4 py-2 rounded-3xl"} key={index}>
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
