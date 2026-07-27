'use client'

import { Search, ShoppingBag, Menu } from "lucide-react"
import { navItems } from "./navItems"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function TopBar() {
   return (
      <nav className=" bg-white border-b border-black/10 backdrop-blur-xl z-50 sticky top-0 flex justify-center">
         <MobileMenu></MobileMenu>
         <div className="flex py-3 text-xs items-center w-full lg:max-w-5xl text-zinc-900 justify-between">
            {/* logo */}
            <div className="px-8 "><Image className="size-6 lg:size-5" width={25} height={25} alt='web-icon' src='/logo/apple-logo.svg' /></div>
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
               {/* mobile menu button */}
               <div onClick={()=>console.log("object")} className=" lg:hidden"><Menu className=" size-6 lg:size-4" /></div>
            </div>
         </div>
      </nav>
   )
}
