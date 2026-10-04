import type {Game} from "@/entities/game/types/game.ts";
import type {ShopSortValue} from "@/widgets/ShopSidebar/lib/shopSortOptions.ts";

export const sortGames = (games: Game[], sort: ShopSortValue): Game[] => {
  switch (sort) {
    case "price-low-to-high":
      return [...games].sort((a, b) => a.price - b.price)
    case "price-high-to-low":
      return [...games].sort((a, b) => b.price - a.price)
    default:
      return games
  }
}