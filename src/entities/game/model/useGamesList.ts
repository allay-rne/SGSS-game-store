import {useEffect, useState} from "react";
import {getGamesList} from "@/entities/game/api/gameApi.ts";
import type {Game} from "@/entities/game/types/game.ts";

const useGamesList = () => {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function loadGames() {
      const result = await getGamesList()
      setGames(result)
    }

    void loadGames()
  }, []);

  return games
}

export default useGamesList