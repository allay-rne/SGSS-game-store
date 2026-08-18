export type Genre =
  | 'Action'
  | 'Adventure'
  | 'RPG'
  | 'Strategy'
  | 'Simulation'
  | 'Horror'
  | 'Indie'
  | 'Multiplayer'
  | 'Racing'
  | 'Sports'

export interface Game {
  id: number
  name: string
  background_image: string
  genres: Genre[]
  price: number
  oldPrice?: number
}