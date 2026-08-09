
// navItems
export const navItems = [
   // =========================================================
   // Store
   // =========================================================
   {
      id: 1,
      label: "Store",
      href: "/store",
      columns: [
         {
            title: "Shop",
            links: [
               { label: "Shop the Latest", href: "/store", emphasis: true },
               { label: "Mac", href: "/mac", emphasis: true },
               { label: "iPad", href: "/ipad", emphasis: true },
               { label: "iPhone", href: "/iphone", emphasis: true },
               { label: "Apple Watch", href: "/watch", emphasis: true },
               { label: "Apple Vision Pro", href: "/apple-vision-pro", emphasis: true },
               { label: "AirPods", href: "/airpods", emphasis: true },
               { label: "Accessories", href: "/shop/accessories", emphasis: true },
            ],
         },
         {
            title: "Quick Links",
            links: [
               { label: "Find a Store", href: "/retail" },
               { label: "Order Status", href: "/shop/order/list" },
               { label: "Apple Upgrade", href: "/shop/buy/upgrade" },
               { label: "Apple Trade In", href: "/shop/trade-in" },
               { label: "Financing", href: "/shop/buy/financing" },
               { label: "Personal Setup", href: "/shop/personal-setup" },
               { label: "College Student Offer", href: "/us-edu/store" },
            ],
         },
         {
            title: "Shop Special Stores",
            links: [
               { label: "Certified Refurbished", href: "/shop/refurbished" },
               { label: "Education", href: "/us-edu/store" },
               { label: "Business", href: "/retail/business" },
               { label: "Veterans and Military", href: "/shop/veterans-and-military" },
               { label: "Government", href: "/r/store/government" },
            ],
         },
      ],
   },

   // =========================================================
   // Mac
   // =========================================================
   {
      id: 2,
      label: "Mac",
      href: "/mac",
      columns: [
         {
            title: "Explore Mac",
            links: [
               { label: "Explore All Mac", href: "/mac", emphasis: true },
               { label: "MacBook Neo", href: "/macbook-neo", emphasis: true },
               { label: "MacBook Air", href: "/macbook-air", emphasis: true },
               { label: "MacBook Pro", href: "/macbook-pro", emphasis: true },
               { label: "iMac", href: "/imac", emphasis: true },
               { label: "Mac mini", href: "/mac-mini", emphasis: true },
               { label: "Mac Studio", href: "/mac-studio", emphasis: true },
               { label: "Displays", href: "/displays", emphasis: true },
               { label: "Compare Mac", href: "/mac/compare" },
               { label: "Switch from PC to Mac", href: "/mac/switch" },
            ],
         },
         {
            title: "Shop Mac",
            links: [
               { label: "Shop Mac", href: "/shop/buy-mac" },
               { label: "Mac Accessories", href: "/shop/mac/accessories" },
               { label: "Apple Upgrade", href: "/shop/buy/upgrade" },
               { label: "Apple Trade In", href: "/shop/trade-in" },
               { label: "Financing", href: "/shop/buy/financing" },
               { label: "Personal Setup", href: "/shop/personal-setup" },
               { label: "College Student Offer", href: "/us-edu/store" },
            ],
         },
         {
            title: "More from Mac",
            links: [
               { label: "Mac Support", href: "/support/mac" },
               { label: "AppleCare", href: "/support/products/mac" },
               { label: "macOS 27 Preview", href: "/macos/macos-27-preview" },
               { label: "Apple Intelligence and Siri", href: "/apple-intelligence" },
               { label: "Apps by Apple", href: "/apps" },
               { label: "Apple Creator Studio", href: "/apple-creator-studio" },
               { label: "Better with iPhone", href: "/mac/better-with-iphone" },
               { label: "iCloud+", href: "/icloud" },
               { label: "Mac for Business", href: "/business/mac" },
               { label: "Education", href: "/education" },
               { label: "Apple at Work", href: "/business" },
            ],
         },
      ],
   },

   // =========================================================
   // iPad
   // =========================================================
   {
      id: 3,
      label: "iPad",
      href: "/ipad",
      columns: [
         {
            title: "Explore iPad",
            links: [
               { label: "Explore All iPad", href: "/ipad", emphasis: true },
               { label: "iPad Pro", href: "/ipad/ipad-pro", emphasis: true },
               { label: "iPad Air", href: "/ipad-air", emphasis: true },
               { label: "iPad", href: "/ipad-10-9", emphasis: true },
               { label: "iPad mini", href: "/ipad-mini", emphasis: true },
               { label: "Apple Pencil", href: "/apple-pencil", emphasis: true },
               { label: "Keyboards", href: "/shop/ipad/ipad-accessories/keyboards", emphasis: true },
               { label: "Compare iPad", href: "/ipad/compare" },
            ],
         },
         {
            title: "Shop iPad",
            links: [
               { label: "Shop iPad", href: "/shop/buy-ipad" },
               { label: "iPad Accessories", href: "/shop/ipad/accessories" },
               { label: "Apple Upgrade", href: "/shop/buy/upgrade" },
               { label: "Apple Trade In", href: "/shop/trade-in" },
               { label: "Financing", href: "/shop/buy/financing" },
               { label: "Personal Setup", href: "/shop/personal-setup" },
               { label: "College Student Offer", href: "/us-edu/store" },
            ],
         },
         {
            title: "More from iPad",
            links: [
               { label: "iPad Support", href: "/support/ipad" },
               { label: "AppleCare", href: "/support/products/ipad" },
               { label: "iPadOS 27 Preview", href: "/ipados/ipados-27-preview" },
               { label: "Apple Intelligence and Siri", href: "/apple-intelligence" },
               { label: "Apps by Apple", href: "/apps" },
               { label: "Apple Creator Studio", href: "/apple-creator-studio" },
               { label: "iCloud+", href: "/icloud" },
               { label: "Education", href: "/education" },
               { label: "Apple at Work", href: "/business" },
            ],
         },
      ],
   },

   // =========================================================
   // iPhone
   // =========================================================
   {
      id: 4,
      label: "iPhone",
      href: "/iphone",
      columns: [
         {
            title: "Explore iPhone",
            links: [
               { label: "Explore All iPhone", href: "/iphone", emphasis: true },
               { label: "iPhone 17 Pro", href: "/iphone-17-pro", emphasis: true },
               { label: "iPhone Air", href: "/iphone-air", emphasis: true },
               { label: "iPhone 17", href: "/iphone-17", emphasis: true },
               { label: "iPhone 17e", href: "/iphone-17e", emphasis: true },
               { label: "iPhone 16", href: "/iphone-16", emphasis: true },
               { label: "Compare iPhone", href: "/iphone/compare" },
               { label: "Switch from Android", href: "/iphone/switch" },
            ],
         },
         {
            title: "Shop iPhone",
            links: [
               { label: "Shop iPhone", href: "/shop/buy-iphone" },
               { label: "iPhone Accessories", href: "/shop/iphone/accessories" },
               { label: "Apple Upgrade", href: "/shop/buy/upgrade" },
               { label: "Apple Trade In", href: "/shop/trade-in" },
               { label: "Carrier Deals at Apple", href: "/shop/buy-iphone/carrier-offers" },
               { label: "Financing", href: "/shop/buy/financing" },
               { label: "Personal Setup", href: "/shop/personal-setup" },
            ],
         },
         {
            title: "More from iPhone",
            links: [
               { label: "iPhone Support", href: "/support/iphone" },
               { label: "AppleCare", href: "/support/products/iphone" },
               { label: "iOS 27 Preview", href: "/ios/ios-27-preview" },
               { label: "Apple Intelligence and Siri", href: "/apple-intelligence" },
               { label: "Apps by Apple", href: "/apps" },
               { label: "iPhone Privacy", href: "/iphone/privacy" },
               { label: "Better with Mac", href: "/iphone/better-with-mac" },
               { label: "iCloud+", href: "/icloud" },
               { label: "Wallet, Pay, Card", href: "/wallet" },
               { label: "Apple at Work", href: "/business" },
            ],
         },
      ],
   },

   // =========================================================
   // Watch
   // =========================================================
   {
      id: 5,
      label: "Watch",
      href: "/watch",
      columns: [
         {
            title: "Explore Watch",
            links: [
               { label: "Explore All Apple Watch", href: "/watch", emphasis: true },
               { label: "Apple Watch Series 11", href: "/watch/series-11", emphasis: true },
               { label: "Apple Watch SE 3", href: "/watch-se", emphasis: true },
               { label: "Apple Watch Ultra 3", href: "/watch-ultra", emphasis: true },
               { label: "Apple Watch Nike", href: "/watch/nike", emphasis: true },
               { label: "Apple Watch Hermès", href: "/watch/hermes", emphasis: true },
               { label: "Compare Watch", href: "/watch/compare" },
               { label: "Why Apple Watch", href: "/watch/why-apple-watch" },
            ],
         },
         {
            title: "Shop Watch",
            links: [
               { label: "Shop Apple Watch", href: "/shop/buy-watch" },
               { label: "Apple Watch Bands", href: "/shop/watch/bands" },
               { label: "Apple Watch Accessories", href: "/shop/watch/accessories" },
               { label: "Apple Upgrade", href: "/shop/buy/upgrade" },
               { label: "Apple Trade In", href: "/shop/trade-in" },
               { label: "Financing", href: "/shop/buy/financing" },
               { label: "Personal Setup", href: "/shop/personal-setup" },
            ],
         },
         {
            title: "More from Watch",
            links: [
               { label: "Apple Watch Support", href: "/support/watch" },
               { label: "AppleCare", href: "/support/products/watch" },
               { label: "watchOS 27 Preview", href: "/watchos/watchos-27-preview" },
               { label: "Apple Watch For Your Kids", href: "/watch/for-your-kids" },
               { label: "Apps by Apple", href: "/apps" },
               { label: "Apple Fitness+", href: "/apple-fitness-plus" },
               { label: "Education", href: "/education" },
            ],
         },
      ],
   },

   // =========================================================
   // Vision
   // =========================================================
   {
      id: 6,
      label: "Vision",
      href: "/apple-vision-pro",
      columns: [
         {
            title: "Explore Vision",
            links: [
               { label: "Explore Apple Vision Pro", href: "/apple-vision-pro", emphasis: true },
               { label: "Tech Specs", href: "/apple-vision-pro/specs" },
            ],
         },
         {
            title: "Shop Vision",
            links: [
               { label: "Shop Apple Vision Pro", href: "/shop/buy-vision-pro" },
               { label: "Apple Vision Pro Accessories", href: "/shop/vision-pro/accessories" },
               { label: "Book a Demo", href: "/shop/vision-pro/demo" },
               { label: "Financing", href: "/shop/buy/financing" },
               { label: "Personal Setup", href: "/shop/personal-setup" },
            ],
         },
         {
            title: "More from Vision",
            links: [
               { label: "Apple Vision Pro Support", href: "/support/apple-vision-pro" },
               { label: "AppleCare", href: "/support/products/vision-pro" },
               { label: "visionOS 27 Preview", href: "/visionos/visionos-27-preview" },
               { label: "Apple Vision Pro for Enterprise", href: "/business/vision-pro" },
            ],
         },
      ],
   },

   // =========================================================
   // AirPods
   // =========================================================
   {
      id: 7,
      label: "AirPods",
      href: "/airpods",
      columns: [
         {
            title: "Explore AirPods",
            links: [
               { label: "Explore All AirPods", href: "/airpods", emphasis: true },
               { label: "AirPods 4", href: "/airpods-4", emphasis: true },
               { label: "AirPods Pro 3", href: "/airpods-pro", emphasis: true },
               { label: "AirPods Max 2", href: "/airpods-max", emphasis: true },
               { label: "Compare AirPods", href: "/airpods/compare" },
            ],
         },
         {
            title: "Shop AirPods",
            links: [
               { label: "Shop AirPods", href: "/shop/buy-airpods" },
               { label: "AirPods Accessories", href: "/shop/airpods/accessories" },
            ],
         },
         {
            title: "More from AirPods",
            links: [
               { label: "AirPods Support", href: "/support/airpods" },
               { label: "AppleCare", href: "/support/products/airpods" },
               { label: "Hearing Health", href: "/airpods/hearing-health" },
               { label: "Apple Music", href: "/apple-music" },
               { label: "Apple Fitness+", href: "/apple-fitness-plus" },
            ],
         },
      ],
   },

   // =========================================================
   // TV & Home
   // =========================================================
   {
      id: 8,
      label: "TV & Home",
      href: "/tv-home",
      columns: [
         {
            title: "Explore TV & Home",
            links: [
               { label: "Explore TV & Home", href: "/tv-home", emphasis: true },
               { label: "Apple TV 4K", href: "/apple-tv-4k", emphasis: true },
               { label: "HomePod", href: "/homepod", emphasis: true },
               { label: "HomePod mini", href: "/homepod-mini", emphasis: true },
            ],
         },
         {
            title: "Shop TV & Home",
            links: [
               { label: "Shop Apple TV 4K", href: "/shop/buy-tv/apple-tv-4k" },
               { label: "Shop HomePod", href: "/shop/buy-homepod/homepod" },
               { label: "Shop HomePod mini", href: "/shop/buy-homepod/homepod-mini" },
               { label: "Shop Siri Remote", href: "/shop/product/mw5g3am/a/siri-remote" },
               { label: "TV & Home Accessories", href: "/shop/tv-home/accessories" },
            ],
         },
         {
            title: "More from TV & Home",
            links: [
               { label: "Apple TV Support", href: "/support/apple-tv" },
               { label: "HomePod Support", href: "/support/homepod" },
               { label: "AppleCare for Apple TV", href: "/support/products/apple-tv" },
               { label: "AppleCare for HomePod", href: "/support/products/homepod" },
               { label: "Apple TV app", href: "/apple-tv-app" },
               { label: "Apple TV", href: "/apple-tv" },
               { label: "Home app", href: "/home-app" },
               { label: "Apple Music", href: "/apple-music" },
               { label: "AirPlay", href: "/airplay" },
            ],
         },
      ],
   },

   // =========================================================
   // Entertainment
   // =========================================================
   {
      id: 9,
      label: "Entertainment",
      href: "/entertainment",
      columns: [
         {
            title: "Explore Entertainment",
            links: [
               { label: "Explore Entertainment", href: "/entertainment", emphasis: true },
               { label: "Apple One", href: "/apple-one", emphasis: true },
               { label: "Apple TV", href: "/apple-tv", emphasis: true },
               { label: "Apple Music", href: "/apple-music", emphasis: true },
               { label: "Apple Arcade", href: "/apple-arcade", emphasis: true },
               { label: "Apple Fitness+", href: "/apple-fitness-plus", emphasis: true },
               { label: "Apple News+", href: "/apple-news", emphasis: true },
               { label: "Apple Podcasts", href: "/apple-podcasts", emphasis: true },
               { label: "Apple Books", href: "/apple-books", emphasis: true },
               { label: "App Store", href: "/app-store", emphasis: true },
            ],
         },
         {
            title: "Support",
            links: [
               { label: "Apple TV Support", href: "/support/apple-tv" },
               { label: "Apple Music Support", href: "/support/apple-music" },
            ],
         },
      ],
   },

   // =========================================================
   // Accessories
   // =========================================================
   {
      id: 10,
      label: "Accessories",
      href: "/shop/accessories",
      columns: [
         {
            title: "Shop by Product",
            links: [
               { label: "Shop All Accessories", href: "/shop/accessories", emphasis: true },
               { label: "iPhone", href: "/shop/iphone/accessories", emphasis: true },
               { label: "iPad", href: "/shop/ipad/accessories", emphasis: true },
               { label: "Mac", href: "/shop/mac/accessories", emphasis: true },
               { label: "Apple Watch", href: "/shop/watch/accessories", emphasis: true },
               { label: "Apple Vision Pro", href: "/shop/vision-pro/accessories", emphasis: true },
               { label: "AirPods", href: "/shop/airpods/accessories", emphasis: true },
               { label: "TV & Home", href: "/shop/tv-home/accessories", emphasis: true },
               { label: "AirTag", href: "/airtag", emphasis: true },
               { label: "Beats", href: "/shop/beats", emphasis: true },
            ],
         },
         {
            title: "Shop by Category",
            links: [
               { label: "Headphones & Speakers", href: "/shop/accessories/headphones-speakers" },
               { label: "Chargers & Adapters", href: "/shop/accessories/chargers-adapters" },
               { label: "Smart Home Essentials", href: "/shop/accessories/smart-home" },
               { label: "Cases & Protection", href: "/shop/accessories/cases-protection" },
               { label: "Content Creation", href: "/shop/accessories/content-creation" },
               { label: "Gaming", href: "/shop/accessories/gaming" },
               { label: "Hard Drives & Storage", href: "/shop/accessories/storage" },
               { label: "Mice & Keyboards", href: "/shop/accessories/mice-keyboards" },
               { label: "Health & Fitness", href: "/shop/accessories/health-fitness" },
               { label: "Office Accessories", href: "/shop/accessories/office" },
               { label: "Software", href: "/shop/accessories/software" },
            ],
         },
         {
            title: "More to Explore",
            links: [
               { label: "New Arrivals", href: "/shop/accessories/new-arrivals" },
               { label: "Made by Apple", href: "/shop/accessories/made-by-apple" },
               { label: "Accessibility", href: "/accessibility" },
               { label: "Assistive Technologies", href: "/accessibility/assistive-technologies" },
            ],
         },
      ],
   },

   // =========================================================
   // Support
   // =========================================================
   {
      id: 11,
      label: "Support",
      href: "/support",
      columns: [
         {
            title: "Explore Support",
            links: [
               { label: "iPhone", href: "/support/iphone", emphasis: true },
               { label: "Mac", href: "/support/mac", emphasis: true },
               { label: "iPad", href: "/support/ipad", emphasis: true },
               { label: "Watch", href: "/support/watch", emphasis: true },
               { label: "Apple Vision Pro", href: "/support/apple-vision-pro", emphasis: true },
               { label: "AirPods", href: "/support/airpods", emphasis: true },
               { label: "Music", href: "/support/apple-music", emphasis: true },
               { label: "TV", href: "/support/apple-tv", emphasis: true },
               { label: "Explore Support", href: "/support" },
            ],
         },
         {
            title: "Get Help",
            links: [
               { label: "Community", href: "/community" },
               { label: "Check Coverage", href: "/support/products" },
               { label: "Genius Bar", href: "/retail/geniusbar" },
               { label: "Repair", href: "/repair" },
            ],
         },
         {
            title: "Helpful Topics",
            links: [
               { label: "Get AppleCare", href: "/support/products" },
               { label: "Apple Account and Password", href: "/support/apple-account" },
               { label: "Billing & Subscriptions", href: "/billing" },
               { label: "Accessibility", href: "/accessibility" },
            ],
         },
      ],
   },
   
];