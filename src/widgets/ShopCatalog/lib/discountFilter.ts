import type {Game} from "@/entities/game/types/game.ts";

const getDiscount = (game: Game): number => {
  if (!game.oldPrice) return 0
  return (game.oldPrice - game.price) / game.oldPrice * 100
}

export const matchesDiscount = (game: Game, value: string): boolean => {
  const discount = getDiscount(game)

  switch (value) {
    case "on-sale":
      return discount > 0
    case "over-10":
      return discount > 10
    case "over-30":
      return discount > 30
    case "over-50":
      return discount > 50
    case "over-70":
      return discount > 70
    default:
      return true
  }
}