import { footerColumns, designer } from "@/data/footer/footer"
import Link from "next/link"

export default function Footer() {

   return (
      <footer className="bg-apple-bg border-t border-gray-300 pt-8 sm:pt-10 pb-5 sm:pb-6">
         <div className="app-container">

            {/* Footer Columns */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 py-6 sm:py-8 border-b border-gray-300">
               {footerColumns.map((column) => (
                  <div key={column.title} className={`${column.title !== "Apple Store" && column.title !== "About Apple" ? "hidden md:block" : ""}`}>
                     <h3 className="font-semibold text-black text-xs sm:text-sm mb-3">{column.title}</h3>

                     <ul className="space-y-2">
                        {column.links.map((link) => (
                           <li key={link.label}>
                              <Link href={link.href} className="text-[11px] sm:text-xs text-gray-600 hover:underline transition-all">
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* Bottom */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 pt-5 sm:pt-6">
               <p className="text-xs text-gray-500"> © 2026 Apple Clone. Built for educational and portfolio purposes. </p>

               <a href={designer.githubUrl} target="_blank" rel="noopener noreferrer" className="designer-badge">
                  <span className="designer-badge-inner">
                     <span className="designer-badge-star">✦</span> Developed by {designer.name}
                  </span>
               </a>
            </div>

         </div>
      </footer>
   )
}