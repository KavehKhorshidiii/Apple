import { Search, ShoppingBag, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// navbar items
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
      <nav className=" bg-white border-b border-black/10 backdrop-blur-xl z-50 sticky top-0 flex justify-center">
         <div className="flex p-3 text-xs items-center w-full lg:max-w-6xl text-zinc-900 justify-between">
            {/* logo */}
            <div className="px-8 "><Image className="size-6 lg:size-4" width={20} height={20} alt='web-icon' src='/logo/apple-logo.svg' /></div>
            {/* items */}
            <div className=" hidden lg:flex flex-1 justify-between">
               {
                  navItems.map(item => <Link className="" href={item.href} key={item.id}>{item.label}</Link>)
               }
            </div>
            {/* buttons */}
            <div className="flex gap-8 px-8">
               <div><Search className="size-6 lg:size-4" /></div>
               <div><ShoppingBag className="size-6 lg:size-4" /></div>
               {/* menu button for -Lg */}
               <div className=" lg:hidden"><Menu className=" size-6 lg:size-4" /></div>
            </div>
         </div>
      </nav>
   )
}
