type SidebarShopItem = {
  title: string,
  count?: number,
  value: string,
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
        value: "Action"
      },
      {
        title: "RPG",
        value: "RPG"
      },
      {
        title: "Adventure",
        value: "Adventure"
      },
      {
        title: "Strategy",
        value: "Strategy"
      },
      {
        title: "Simulation",
        value: "Simulation"
      },
      {
        title: "Sports",
        value: "Sports"
      },
      {
        title: "Racing",
        value: "Racing"
      },
      {
        title: "Indie",
        value: "Indie"
      },
      {
        title: "Horror",
        value: "Horror"
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
        value: "free",
      },
      {
        title: "Up to $10",
        value: "upto-10",
      },
      {
        title: "$10 – $30",
        value: "10-30",
      },
      {
        title: "$30 – $60",
        value: "30-60",
      },
      {
        title: "Over $60",
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
        value: "on-sale",
      },
      {
        title: "Over 10%",
        value: "over-10",
      },
      {
        title: "Over 30%",
        value: "over-30",
      },
      {
        title: "Over 50%",
        value: "over-50",
      },
      {
        title: "Over 70%",
        value: "over-70",
      },
    ],
  },
]