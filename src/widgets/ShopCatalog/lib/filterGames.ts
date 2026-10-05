import type {Game, Genre} from "@/entities/game/types/game.ts";
import {
  matchesPrice,
  matchesPriceRange
} from "@/widgets/ShopCatalog/lib/priceFilter.ts";
import {matchesDiscount} from "@/widgets/ShopCatalog/lib/discountFilter.ts";

interface FilterGamesParams {
  games: Game[],
  search: string,
  selectedGenres: Set<Genre>,
  selectedPrice: string,
  selectedDiscount: string,
  priceFrom: string,
  priceTo: string,
}

export const filterGames = (params: FilterGamesParams): Game[] => {
  const {
    games,
    search,
    selectedGenres,
    selectedPrice,
    selectedDiscount,
    priceFrom,
    priceTo,
  } = params

  return games.filter(game =>
    (
      selectedGenres.size === 0 ||
      game.genres.some(genre => selectedGenres.has(genre))
    ) &&
    matchesPrice(game.price, selectedPrice) &&
    matchesDiscount(game, selectedDiscount) &&
    matchesPriceRange(game.price, priceFrom, priceTo) &&
    game.name.toLowerCase().includes(search.trim().toLowerCase())
  )
}