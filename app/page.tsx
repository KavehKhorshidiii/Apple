import PromoSection from "./components/home/PromoSection";
import ProductGrid from "./components/home/productGrid";


export default function Home() {
   return (
      <div className=" dark:bg-black dark:text-white flex-1 bg-white text-black font-sans">
         <PromoSection />
         <ProductGrid />
      </div>
   );
}
