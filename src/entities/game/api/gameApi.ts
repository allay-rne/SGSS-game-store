import type {Game} from '@/entities/game/types/game.ts'

const API_KEY = import.meta.env.VITE_RAWG_API_KEY

export interface RawgResponse {
  results: Game[]
}

export const getGames = async (page: number): Promise<RawgResponse> => {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=${page}`
  const response = await fetch(url)
  return (await response.json()) as RawgResponse
}

export async function getGamesList() {
  const [page1, page2] = await Promise.all([
    getGames(1),
    getGames(2),
  ]);

  return [...page1.results, ...page2.results]
}
