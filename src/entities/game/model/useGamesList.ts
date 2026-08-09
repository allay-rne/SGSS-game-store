import {useEffect, useState} from "react";
import {getGamesList} from "@/entities/game/api/gameApi.ts";
import type {Game} from "@/entities/game/types/game.ts";
import {fallbackGames} from "@/entities/game/model/fallbackGames.ts";

const useGamesList = () => {

  const [games, setGames] = useState<Game[]>([]);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    async function loadGames() {
      try {
        const result = await getGamesList()
        setGames(result)
      } catch (error) {
        console.error('Failed to load games from RAWG, using fallback:', error)
        setGames(fallbackGames)
        setIsFallback(true)
      }
    }

    void loadGames()
  }, []);

  return { games, isFallback }
}

export default useGamesList