import {navItems} from '@/app/components/layout/navItems'
import Link from 'next/link'

export default function MobileMenu() {
   return (
      <div className=' fixed bg-blue-500 flex flex-col h-screen'>
         {
            navItems.map(item => <Link className="" href={item.href} key={item.id}>{item.label}</Link>)
         }
      </div>
   )
}
