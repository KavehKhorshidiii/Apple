import { Search, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navItems = [
  { id:1, label: "Store", href: "/store" },
  { id:2, label: "Mac", href: "/mac" },
  { id:3, label: "iPad", href: "/ipad" },
  { id:4, label: "iPhone", href: "/iphone" },
  { id:5, label: "Watch", href: "/watch" },
  { id:6, label: "Vision", href: "/vision" },
  { id:7, label: "AirPods", href: "/airpods" },
  { id:8, label: "TV & Home", href: "/tv-home" },
  { id:9, label: "Entertainment", href: "/entertainment" },
  { id:10, label: "Accessories", href: "/accessories" },
  { id:11, label: "Support", href: "/support" },
]

export default function Navbar() {
   return (
      <nav className=" bg-zinc-50 border-b border-black/10 backdrop-blur-xl z-50 sticky top-0 flex justify-center">
         <div className="flex p-4 items-center max-w-5xl text-zinc-900 justify-between">
            <div className="px-5"><Image className="" width={32} height={32} alt='web-icon' src='./logo/apple-logo.svg' /></div>
            <div className="flex gap-2 w-full justify-between">
               {
                  navItems.map(item => <Link className="" href={'#'} key={item.id}>{item.label}</Link>)
               }
            </div>
            <div className="flex gap-3 px-5">
               <div><Search className="size-5" /></div>
               <div><ShoppingBag className="size-5" /></div>
            </div>
         </div>
      </nav>
   )
}
