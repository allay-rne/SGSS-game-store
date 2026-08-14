import type {Game} from "@/entities/game/types/game.ts";

export const isGame =
  (game: Game | undefined):
    game is Game => game !== undefined