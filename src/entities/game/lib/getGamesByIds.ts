import type {Game} from "@/entities/game/types/game.ts";
import {isGame} from "./isGame.ts";

export const getGamesByIds = (games: Game[], ids: number[]): Game[] =>
  ids
    .map(id => games.find(g => g.id === id))
    .filter(isGame)