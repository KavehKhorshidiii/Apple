import { Search, ShoppingBag } from "lucide-react"
import Image from "next/image"


export default function Navbar() {
   return (
      <div className="bg-zinc-50 z-50 sticky top-0 flex justify-center">
         <div className="flex text-black items-center max-w-5xl container justify-between">
            <div className="px-5"><Image className=" size-6" width={'200'} height={'200'} alt='web-icon' src='./apple-logo.svg' /></div>
            <div className="flex w-full justify-between">
               <p>Store</p>
               <p>Mac</p>
               <p>iPad</p>
               <p>iPhone</p>
               <p>Watch</p>
               <p>Vision</p>
               <p>AirPods</p>
               <p>TV & Home</p>
               <p>Entertainment</p>
               <p>Accessories</p>
               <p>Support</p>
            </div>
            <div className="flex gap-3 px-5">
               <div><Search className="size-5" /></div>
               <div><ShoppingBag className="size-5" /></div>
            </div>
         </div>
      </div>
   )
}
