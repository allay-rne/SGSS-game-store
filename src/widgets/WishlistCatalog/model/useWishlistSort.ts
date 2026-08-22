import {useState} from "react";
import type {Game} from "@/entities/game/types/game.ts";

export type SortOption = 'by-date-added' | 'price-low-to-high' | 'price-high-to-low'

const useWishlistSort = () => {

  const [sort, setSort] = useState<SortOption>('by-date-added')

  const sortGames = (games: Game[]) => {
    const sorted = [...games];

    switch (sort) {
      case "price-low-to-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-to-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "by-date-added":
        return sorted;
      default:
        return sorted;
    }
  };

  return {
    sort,
    setSort,
    sortGames,
  }
}

export default useWishlistSort