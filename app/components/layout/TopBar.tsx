'use client'

import { Search, ShoppingBag, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, delay } from "framer-motion"
import { useState } from "react"


// navbar items
export const navItems = [
   { id: 1, label: "Store", href: "/store" },
   { id: 2, label: "Mac", href: "/mac" },
   { id: 3, label: "iPad", href: "/ipad" },
   { id: 4, label: "iPhone", href: "/iphone" },
   { id: 5, label: "Watch", href: "/watch" },
   { id: 6, label: "Vision", href: "/vision" },
   { id: 7, label: "AirPods", href: "/airpods" },
   { id: 8, label: "TV & Home", href: "/tv-home" },
   { id: 9, label: "Entertainment", href: "/entertainment" },
   { id: 10, label: "Accessories", href: "/accessories" },
   { id: 11, label: "Support", href: "/support" },
]


export default function TopBar() {

   const [isMenuOpen, setIsMenuOpen] = useState(false)

   return (
      <motion.nav
         initial={{ height: "auto" }}
         animate={{ height: isMenuOpen ? "100vh" : "46px" }}
         transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
         className=" bg-white border-b border-black/10 backdrop-blur-xl sticky z-50 top-0 flex flex-col lg:items-center overflow-hidden ">

         <div className="flex py-3 text-xs items-center w-full lg:max-w-5xl text-zinc-900 justify-between">
            {/* logo */}
            <div className="px-8 "><Image className="size-6 lg:size-5" width={25} height={25} alt='web-icon' src='/logo/apple-logo.svg' /></div>
            {/* items */}
            <div className=" hidden lg:flex flex-1 justify-between">
               {navItems.map(item => <Link className="" href={item.href} key={item.id}>{item.label}</Link>)}
            </div>
            {/* buttons */}
            <div className="flex gap-8 px-8">
               <div><Search className="size-6 lg:size-4" /></div>
               <div><ShoppingBag className="size-6 lg:size-4" /></div>
               {/* mobile menu button */}
               <div onClick={() => setIsMenuOpen(!isMenuOpen)} className=" lg:hidden">{isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}</div>
            </div>
         </div>

         <AnimatePresence>
            {isMenuOpen && (
               <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                     hidden: {
                        transition: {
                           staggerChildren: 0.05,
                           staggerDirection: -1, // از آخر به اول خارج میشن
                        },
                     },
                     show: {
                        transition: {
                           staggerChildren: 0.06,
                           delayChildren: 0.6,
                        },
                     },
                  }}
                  className="flex flex-col text-black text-2xl pt-10 px-10 lg:hidden"
               >
                  {navItems.map((item) => (
                     <motion.div
                        key={item.id}
                        variants={{
                           hidden: {
                              opacity: 0,
                              y: -12,
                           },
                           show: {
                              opacity: 1,
                              y: 0,
                           },
                        }}
                        transition={{
                           duration: 0.35,
                        }}
                     >
                        <Link href={item.href}>
                           {item.label}
                        </Link>
                     </motion.div>
                  ))}
               </motion.div>
            )}
         </AnimatePresence>

      </motion.nav>
   )
}










