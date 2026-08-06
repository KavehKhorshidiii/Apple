export interface FooterColumn {
   title: string;
   links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
   {
      title: "Shop and Learn",
      links: [
         { label: "Store", href: "/store" },
         { label: "Mac", href: "/mac" },
         { label: "iPad", href: "/ipad" },
         { label: "iPhone", href: "/iphone" },
         { label: "Watch", href: "/watch" },
         { label: "AirPods", href: "/airpods" },
         { label: "TV & Home", href: "/tv-home" },
         { label: "Accessories", href: "/accessories" },
         { label: "Gift Cards", href: "/gift-cards" },
      ],
   },
   {
      title: "Account",
      links: [
         { label: "Manage Your Apple Account", href: "/account" },
         { label: "Apple Store Account", href: "/store-account" },
         { label: "iCloud.com", href: "/icloud" },
      ],
   },
   {
      title: "Entertainment",
      links: [
         { label: "Apple One", href: "/apple-one" },
         { label: "Apple TV", href: "/apple-tv" },
         { label: "Apple Music", href: "/apple-music" },
         { label: "Apple Arcade", href: "/apple-arcade" },
         { label: "Apple Podcasts", href: "/apple-podcasts" },
         { label: "App Store", href: "/app-store" },
      ],
   },
   {
      title: "Apple Store",
      links: [
         { label: "Find a Store", href: "/find-store" },
         { label: "Genius Bar", href: "/genius-bar" },
         { label: "Today at Apple", href: "/today" },
         { label: "Apple Trade In", href: "/trade-in" },
         { label: "Order Status", href: "/order-status" },
         { label: "Shopping Help", href: "/shopping-help" },
      ],
   },
   {
      title: "About Apple",
      links: [
         { label: "Newsroom", href: "/newsroom" },
         { label: "Apple Leadership", href: "/leadership" },
         { label: "Career Opportunities", href: "/careers" },
         { label: "Investors", href: "/investors" },
         { label: "Contact Apple", href: "/contact" },
      ],
   },
];

export const designer = {
   name: "Kaveh",
   githubUrl: "https://github.com/KavehKhorshidiii",
};