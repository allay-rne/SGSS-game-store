import type {Game} from '@/entities/game/model/game'

const API_KEY = import.meta.env.VITE_RAWG_API_KEY

export interface RawgResponse {
  results: Game[]
}
const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`

export const getGames = async (): Promise<RawgResponse> => {
  const response = await fetch(url)
  return (await response.json()) as RawgResponse
}
