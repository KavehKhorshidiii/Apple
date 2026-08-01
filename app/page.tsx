import Image from "next/image";
import PromoSection from "./components/home/PromoSection";


export default function Home() {
   return (
      <div className=" dark:bg-black dark:text-white flex-1 bg-white text-black font-sans">
         <PromoSection />
      </div>
   );
}
