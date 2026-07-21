type SidebarShopItem = {
  title: string,
  count?: number,
  value?: string,
}

export type SidebarShopGroup = {
  title: string,
  items: SidebarShopItem[],
}

type SidebarShopItems = SidebarShopGroup[]

export const sidebarShopItems: SidebarShopItems = [
  {
    title: "GENRES",
    items: [
      {
        title: "Action",
        count: 128,
        value: "action",
      },
      {
        title: "RPG",
        count: 96,
        value: "rpg",
      },
      {
        title: "Adventure",
        count: 84,
        value: "adventure",
      },
      {
        title: "Strategy",
        count: 84,
        value: "strategy",
      },
      {
        title: "Simulation",
        count: 67,
        value: "simulation",
      },
      {
        title: "Sports",
        count: 45,
        value: "sports",
      },
      {
        title: "Racing",
        count: 32,
        value: "racing",
      },
      {
        title: "Indie",
        count: 28,
        value: "indie",
      },
      {
        title: "Horror",
        count: 112,
        value: "horror",
      },
    ],
  },

  {
    title: "PRICE",
    items: [
      {
        title: "Any price",
        value: "any-price",
      },
      {
        title: "Free",
        count: 23,
        value: "free",
      },
      {
        title: "Up to $10",
        count: 68,
        value: "upto-10",
      },
      {
        title: "$10 – 30%",
        count: 91,
        value: "10-30",
      },
      {
        title: "$30 – $60",
        count: 42,
        value: "30-60",
      },
      {
        title: "Over $60",
        count: 23,
        value: "over-60",
      },
    ],
  },

  {
    title: "DISCOUNTS",
    items: [
      {
        title: "All games",
        value: "all-games",
      },
      {
        title: "On sale",
        count: 56,
        value: "on-sale",
      },
      {
        title: "Over 10%",
        count: 45,
        value: "over-10",
      },
      {
        title: "Over 30%",
        count: 28,
        value: "over-30",
      },
      {
        title: "Over 50%",
        count: 15,
        value: "over-50",
      },
      {
        title: "Over 70%",
        count: 8,
        value: "over-70",
      },
    ],
  },

  {
    title: "PLATFORM",
    items: [
      {
        title: "Windows",
        value: "windows",
      },
      {
        title: "macOS",
        value: "macos",
      },
      {
        title: "Linux",
        value: "linux",
      },
    ],
  },

  {
    title: "FEATURES",
    items: [
      {
        title: "Controller Support",
        count: 137,
        value: "controller-support",
      },
      {
        title: "Achievements",
        count: 201,
        value: "achievements",
      },
      {
        title: "Trading Cards",
        count: 89,
        value: "trading-cards",
      },
      {
        title: "Co-op",
        count: 112,
        value: "co-op",
      },
      {
        title: "Online PvP",
        count: 78,
        value: "online-pvp",
      },
    ],
  },
]