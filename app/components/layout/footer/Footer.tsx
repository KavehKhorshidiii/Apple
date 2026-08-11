import { footerColumns, designer } from "@/data/footer/footer"
import Link from "next/link"

export default function Footer() {
   return (
      <footer className="bg-apple-bg border-t border-gray-300 pt-10 pb-6">
         <div className="app-container">

            {/* گرید ستون‌های لینک */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-b border-gray-300">
               {footerColumns.map((column) => (
                  <div key={column.title}>
                     <h3 className="font-semibold text-black text-sm mb-3">{column.title}</h3>
                     <ul className="space-y-2">
                        {column.links.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className="text-xs text-gray-600 hover:underline"
                              >
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* پایین‌ترین ردیف: کپی‌رایت + دکمه امضا */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
               <p className="text-xs text-gray-500">
                  Copyright © 2026 Apple Inc. All rights reserved.
               </p>

               <a
                  href={designer.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="designer-badge"
               >
                  <span className="designer-badge-inner">
                     ✦ Developed by {designer.name}
                  </span>
               </a>
            </div>

         </div>
      </footer>
   )
}