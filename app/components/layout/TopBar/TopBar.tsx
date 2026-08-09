'use client'

import { Search, ShoppingBag, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
const MotionLink = motion.create(Link)
import { navItems } from "@/data/navigation/navItems"



export default function TopBar() {

   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [activeItemId, setActiveItemId] = useState<number | null>(null)

   useEffect(() => {
      if (isMenuOpen) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = ""
      }
      return () => { document.body.style.overflow = "" }
   }, [isMenuOpen])

   const timeoutRef = useRef<NodeJS.Timeout | null>(null)

   const handleMouseEnter = (itemId: number) => {
      if (timeoutRef.current)
         clearTimeout(timeoutRef.current)
      setActiveItemId(itemId)
   }

   const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
         setActiveItemId(null)
      }, 200)
   }

   const activeItem = navItems.find(item => item.id === activeItemId)



   return (

      <nav className="bg-white dark:bg-black/80 border-b border-black/10 dark:border-white/10 backdrop-blur-xl sticky z-50 top-0 flex flex-col lg:items-center">
         {/* container */}
         {/* lg:max-w-5xl */}
         <div className="flex px-0 h-12 bg-apple-blue text-xs items-center dark:text-white w-full app-container text-zinc-900 justify-between">
            {/* logo */}
            <div className={` pr-8 transition-opacity duration-200 ${isMenuOpen ? " pointer-events-none opacity-0" : "opacity-100"}`}>
               <Image className="size-6 dark:hidden lg:size-5" width={25} height={25} alt="web-icon" src="/logo/apple-logo.svg" />
            </div>

            {/* items + mega menu panel: shared hover parent */}
            <div
               onMouseLeave={handleMouseLeave}
               className="hidden py-4 lg:flex flex-1 justify-between relative"
            >
               {navItems.map(item => (
                  <Link
                     onMouseEnter={() => handleMouseEnter(item.id)}
                     className=""
                     href={item.href}
                     key={item.id}
                  >
                     {item.label}
                  </Link>
               ))}

               {/* Mega Menu Panel */}
               <AnimatePresence>
                  {activeItem?.columns && (
                     <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fixed dark:bg-black overflow-hidden top-12 left-0 z-40 w-full bg-white p-8 flex  gap-16"

                     >
                        <div className="flex px-0 app-container flex-1 gap-16">
                        {activeItem.columns.map((column, index) => (
                           <motion.div
                              initial="hidden"
                              animate="show"
                              exit="hidden"
                              variants={{
                                 hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                                 show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
                              }}
                              key={index} className="flex flex-col gap-3">
                              <h3 className="text-zinc-400">{column.title}</h3>
                              {column.links.map((link, linkIndex) => (
                                 <MotionLink
                                    variants={{
                                       hidden: { opacity: 0, y: -12 },
                                       show: { opacity: 1, y: 2, },
                                    }}
                                    transition={{ duration: 0.40 }}
                                    key={linkIndex}
                                    href={link.href}
                                    className={link.emphasis ? "text-xl text-black font-semibold" : "text-sm"}
                                 >
                                    {link.label}
                                 </MotionLink>
                              ))}
                           </motion.div>
                        ))}
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>

            {/* buttons */}
            <div className="flex gap-8 pl-8">
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
                  className=" fixed dark:bg-black top-12 left-0 w-full bg-white overflow-hidden z-40 lg:hidden"
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