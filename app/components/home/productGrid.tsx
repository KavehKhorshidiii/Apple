import { homeSectionsGrid } from "@/data/homeSections/homeSections"
import Image from "next/image"

export default function productGrid() {
   return (
      <div className=" bg-white grid grid-cols-2 flex-col p-3 gap-3">
         {
            homeSectionsGrid.map((item, index) =>
               <div className="relative w-full h-145" key={item.id}>
                  <Image className="object-cover" loading={index === 0 ? "eager" : "lazy"} priority={item.id === 1} sizes="100vw" quality={100} fill alt={item.title} src={item.image} />

                  <div className="flex gap-4 w-full mt-15 absolute flex-col items-center justify-center">
                     {
                        item.titleImage ?
                           <Image alt="title Image" width={100} height={100} quality={100} src={item.titleImage} />
                           :
                           <h2 className=" text-5xl font-bold">{item.title}</h2>
                     },
                     <p className=" text-2xl max-w-130 text-center font-normal line-clamp-2">{item.description}</p>
                     <div className="flex gap-3">
                        {
                           item.buttons.map((btn, index) =>
                              <button className={btn.variant === "filled" ? " bg-apple-blue text-white px-4 py-2 text-lg rounded-3xl " : "border text-lg border-blue-500 text-blue-500 px-4 py-2 rounded-3xl"} key={index}>
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
