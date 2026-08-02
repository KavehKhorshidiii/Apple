interface HomeSectionType {
   id: number;
   title: string;
   description: string;
   image: string;
   buttons: { label: string, href: string, variant: "filled" | "outline" }[]
}
interface homeSectionsGridType {
   id: number;
   title: string;
   titleImage?: string;
   description: string;
   image: string;
   buttons: { label: string, href: string, variant: "filled" | "outline" }[]
}

// home Sections data
export const homeSections: HomeSectionType[] = [
   {
      id: 1,
      title: "iPhone",
      description: "Meet the latest iPhone lineup.",
      image: "/homeSection/promoSectionImg-1.jpg",
      buttons: [
         { label: "Learn more", href: "/iphone", variant: "filled" },
         { label: "Shop iPhone", href: "/shop/iphone", variant: "outline" },
      ],
   },

   {
      id: 2,
      title: "College, sorted.",
      description: "Get a gift card from $100 to $150* when you buy Mac or iPad with education savings.",
      image: "/homeSection/promoSectionImg-2.jpg",
      buttons: [
         { label: "Shop", href: "/shop/education", variant: "filled" }
      ],
   },
   {
      id: 3,
      title: "MacBook Air",
      description: "Now supercharged by M5",
      image: "/homeSection/promoSectionImg-3.jpg",
      buttons: [
         { label: "Learn more", href: "/shop/education", variant: "filled" },
         { label: "Buy", href: "/shop/education", variant: "outline" }
      ],
   },

];

// home SectionsGrid data
export const homeSectionsGrid: homeSectionsGridType[] = [
   {
      id: 1,
      title: "Upgrade",
      titleImage: "/homeSection/productGridTitle-1.jpg",
      description: "Love it. Lease it. Upgrade it.",
      image: "/homeSection/productGrid-1.jpg",
      buttons: [
         { label: "Learn more", href: "/", variant: "filled" },
      ],
   },

   {
      id: 2,
      title: "iPad air",
      titleImage: "/homeSection/productGridTitle-2.jpg",
      description: "Now supercharged by M4.",
      image: "/homeSection/productGrid-2.jpg",
      buttons: [
         { label: "Learn more", href: "/shop/education", variant: "filled" },
         { label: "Buy", href: "/shop/education", variant: "outline" }

      ],
   },
   {
      id: 3,
      title: "homeSection",
      titleImage: "/homeSection/productGridTitle-3.jpg",
      description: "The ultimate way to watch your health.",
      image: "/homeSection/productGrid-3.jpg",
      buttons: [
         { label: "Learn more", href: "/shop/education", variant: "filled" },
         { label: "Buy", href: "/shop/education", variant: "outline" }
      ],
   },
   {
      id: 4,
      title: "App Store",
      description: "More apps. More fun Open all summer",
      image: "/homeSection/productGrid-4.jpg",
      buttons: [
         { label: "Learn more", href: "/shop/education", variant: "filled" },
      ],
   },
   {
      id: 5,
      title: "TradeIn",
      titleImage: "/homeSection/productGridTitle-4.jpg",
      description: "Get up to $195 - $695 in credit when you trade in iPhone 13 or higher.",
      image: "/homeSection/productGrid-5.jpg",
      buttons: [
         { label: "Get your estimate", href: "/shop/education", variant: "filled" },
      ],
   },
   {
      id: 6,
      title: "Card",
      titleImage: "/homeSection/productGridTitle-5.jpg",
      description: "Get up to 3% Daily Cash back with every purchase.",
      image: "/homeSection/productGrid-6.jpg",
      buttons: [
         { label: "Learn more", href: "/shop/education", variant: "filled" },
         { label: "Apply now", href: "/shop/education", variant: "outline" }
      ],
   },

];