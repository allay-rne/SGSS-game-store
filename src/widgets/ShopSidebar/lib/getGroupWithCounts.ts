import {fallbackGames} from "@/entities/game/model/fallbackGames.ts";
import type {SidebarShopGroup} from "@/widgets/ShopSidebar/lib/sidebarShopItems.ts";
import {matchesPrice} from "@/widgets/ShopCatalog/lib/priceFilter.ts";
import {matchesDiscount} from "@/widgets/ShopCatalog/lib/discountFilter.ts";

const getCount = (groupTitle: string, value: string): number => {
  switch (groupTitle) {
    case "GENRES":
      return fallbackGames.filter(game =>
        game.genres.some(genre => genre === value)
      ).length
    case "PRICE":
      return fallbackGames.filter(game => matchesPrice(game.price, value)).length
    case "DISCOUNTS":
      return fallbackGames.filter(game => matchesDiscount(game, value)).length
    default:
      return 0
  }
}

export const getGroupWithCounts = (group: SidebarShopGroup): SidebarShopGroup => ({
  ...group,
  items: group.items.map(item => ({
    ...item,
    count: getCount(group.title, item.value),
  })),
})