interface HomeSectionType {
   id: number;
   title: string;
   description:string;
   image: string;
   buttons:{label:string , href:string , variant:"filled" | "outline"}[]
}

export const homeSections:HomeSectionType[] = [
   {
      id: 1,
      title: "iPhone",
      description: "Meet the latest iPhone lineup.",
      image: "/homeSection/b1.jpg",
      buttons: [
         { label: "Learn more", href: "/iphone", variant: "filled" },
         { label: "Shop iPhone", href: "/shop/iphone", variant: "outline" },
      ],
   },

   {
      id: 2,
      title: "College, sorted.",
      description: "Get a gift card from $100 to $150* when you buy Mac or iPad with education savings.",
      image: "/homeSection/b2.jpg",
      buttons: [
         { label: "Shop", href: "/shop/education", variant: "filled" }
      ],
   },
   {
      id: 3,
      title: "MacBook Air",
      description: "Now supercharged by M5",
      image: "/homeSection/b3.jpg",
      buttons: [
         { label: "Learn more", href: "/shop/education", variant: "filled" },
         { label: "Buy", href: "/shop/education", variant: "outline" }
      ],
   },
   
];