'use client'

import { Search, ShoppingBag, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
const MotionLink = motion.create(Link)



// navItems
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

   useEffect(() => {
      if (isMenuOpen) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = ""
      }
      return () => { document.body.style.overflow = "" }
   }, [isMenuOpen])

   return (
      <nav className="bg-white dark:bg-black/80 border-b border-black/10 dark:border-white/10 backdrop-blur-xl sticky z-50 top-0 flex flex-col lg:items-center">
         {/* container */}
         <div className="flex py-3 text-xs items-center dark:text-white w-full lg:max-w-5xl text-zinc-900 justify-between">
            {/* logo */}
            <div className={`px-8 transition-opacity duration-200 ${isMenuOpen ? " pointer-events-none opacity-0" : "opacity-100"}`}>
               <Image className="size-6 dark:hidden lg:size-5" width={25} height={25} alt="web-icon" src="/logo/apple-logo.svg" />
            </div>
            {/* items */}
            <div className="hidden lg:flex flex-1 justify-between">
               {navItems.map(item => <Link href={item.href} key={item.id}>{item.label}</Link>)}
            </div>
            {/* buttons */}
            <div className="flex gap-8 px-8">
               <div className={`${isMenuOpen ? " pointer-events-none opacity-0" : "opacity-100"} flex transition-opacity duration-200 gap-8`}>
                  <button type="button"><Search className="size-5  lg:size-4" /></button>
                  <button type="button"><ShoppingBag className="size-5 lg:size-4" /></button>
               </div>

               <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                  {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
               </button>
            </div>
         </div>

         {/* Mobile Menu */}
         <AnimatePresence>
            {isMenuOpen && (
               <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100vh" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.6 }}
                  className=" fixed dark:bg-black top-11.5 left-0 w-full bg-white overflow-hidden z-40 lg:hidden"
               >
                  <motion.div
                     initial="hidden"
                     animate="show"
                     exit="hidden"
                     variants={{
                        hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                        show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
                     }}
                     className="flex flex-col dark:text-white text-black gap-2 text-3xl pt-5 px-10"
                  >
                     {/* Mobile Menu Items */}
                     {navItems.map((item) => (
                        <MotionLink
                           key={item.id}
                           href={item.href}
                           onClick={() => setIsMenuOpen(false)}
                           className="font-extrabold flex items-start"
                           variants={{
                              hidden: { opacity: 0, y: -12 },
                              show: { opacity: 1, y: 2, },
                           }}
                           transition={{ duration: 0.40 }}
                        >
                           {item.label}
                        </MotionLink>
                     ))}
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </nav>
   )
}