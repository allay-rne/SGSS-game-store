import beyondTwoSouls from '@/shared/assets/images/fallback/beyondTwoSouls.webp'
import crysis2 from '@/shared/assets/images/fallback/crysis2.webp'
import cs2 from '@/shared/assets/images/fallback/cs2.webp'
import darkSouls from '@/shared/assets/images/fallback/darkSouls.webp'
import dispatch from '@/shared/assets/images/fallback/dispatch.webp'
import dota2 from '@/shared/assets/images/fallback/dota2.webp'
import dyingLight from '@/shared/assets/images/fallback/dyingLight.webp'
import fnaf4 from '@/shared/assets/images/fallback/fnaf4.webp'
import godOfWarRagnarok
  from '@/shared/assets/images/fallback/god of war ragnarok.webp'
import gta6 from '@/shared/assets/images/fallback/gta6.webp'
import lifeIsStrange from '@/shared/assets/images/fallback/lifeIsStrange.webp'
import littleNightmares
  from '@/shared/assets/images/fallback/littleNightmares.webp'
import noImNotAHuman from '@/shared/assets/images/fallback/noImNotAHuman.webp'
import poppyPlayTime from '@/shared/assets/images/fallback/poppyPlayTime.webp'
import reanimal from '@/shared/assets/images/fallback/reanimal.webp'
import residentEvil from '@/shared/assets/images/fallback/residentEvil.webp'
import sallyFace from '@/shared/assets/images/fallback/Sally Face.webp'
import tinyBunny from '@/shared/assets/images/fallback/tinyBunny.webp'
import witcher from '@/shared/assets/images/fallback/Witcher.webp'
import wukong from '@/shared/assets/images/fallback/wukong.webp'

import type {Game} from '@/entities/game/types/game.ts'

export const fallbackGames: Game[] = [
  {
    id: 1,
    name: 'Beyond: Two Souls',
    background_image: beyondTwoSouls,
    genres: ['Adventure'],
    price: 11,
  },
  {
    id: 2,
    name: 'Crysis 2',
    background_image: crysis2,
    genres: ['Action'],
    price: 7,
    oldPrice: 11,
  },
  {
    id: 3,
    name: 'Counter-Strike 2',
    background_image: cs2,
    genres: ['Action', 'Multiplayer'],
    price: 10,
  },
  {
    id: 4,
    name: 'Dark Souls',
    background_image: darkSouls,
    genres: ['RPG', 'Action'],
    price: 14,
  },
  {
    id: 5,
    name: 'Dispatch',
    background_image: dispatch,
    genres: ['Adventure', 'Indie'],
    price: 7,
  },
  {
    id: 6,
    name: 'Dota 2',
    background_image: dota2,
    genres: ['Strategy', 'Multiplayer'],
    price: 3,
  },
  {
    id: 7,
    name: 'Dying Light',
    background_image: dyingLight,
    genres: ['Action', 'Horror'],
    price: 9,
    oldPrice: 15,
  },
  {
    id: 8,
    name: "Five Nights at Freddy's 4",
    background_image: fnaf4,
    genres: ['Horror', 'Indie'],
    price: 6,
  },
  {
    id: 9,
    name: 'God of War Ragnarök',
    background_image: godOfWarRagnarok,
    genres: ['Action', 'RPG'],
    price: 53,
  },
  {
    id: 10,
    name: 'Grand Theft Auto VI',
    background_image: gta6,
    genres: ['Action', 'Adventure'],
    price: 112,
  },
  {
    id: 11,
    name: 'Life Is Strange',
    background_image: lifeIsStrange,
    genres: ['Adventure'],
    price: 8,
  },
  {
    id: 12,
    name: 'Little Nightmares',
    background_image: littleNightmares,
    genres: ['Horror', 'Indie'],
    price: 9,
    oldPrice: 18,
  },
  {
    id: 13,
    name: "No, I'm not a Human",
    background_image: noImNotAHuman,
    genres: ['Horror', 'Indie'],
    price: 5,
  },
  {
    id: 14,
    name: 'Poppy Playtime',
    background_image: poppyPlayTime,
    genres: ['Horror', 'Indie'],
    price: 7,
  },
  {
    id: 15,
    name: 'Reanimal',
    background_image: reanimal,
    genres: ['Horror', 'Indie'],
    price: 12,
  },
  {
    id: 16,
    name: 'Resident Evil',
    background_image: residentEvil,
    genres: ['Horror', 'Action'],
    price: 16,
    oldPrice: 19,
  },
  {
    id: 17,
    name: 'Sally Face',
    background_image: sallyFace,
    genres: ['Horror', 'Indie'],
    price: 399
  },
  {
    id: 18,
    name: 'Tiny Bunny',
    background_image: tinyBunny,
    genres: ['Horror', 'Indie'],
    price: 5,
  },
  {
    id: 19,
    name: 'The Witcher 3: Wild Hunt',
    background_image: witcher,
    genres: ['RPG', 'Adventure'],
    price: 10,
    oldPrice: 17,
  },
  {
    id: 20,
    name: 'Black Myth: Wukong',
    background_image: wukong,
    genres: ['RPG', 'Action'],
    price: 35,
  },
]

export const fallbackPopular = fallbackGames.filter((game) =>
  [
    'Counter-Strike 2',
    'Dota 2',
    'Grand Theft Auto VI',
    'The Witcher 3: Wild Hunt',
    'Black Myth: Wukong',
    'God of War Ragnarök',
  ].includes(game.name)
)

export const fallbackNewReleases = fallbackGames.filter((game) =>
  [
    'Dispatch',
    'Crysis 2',
    'Dying Light',
    'Beyond: Two Souls',
    'Life Is Strange',
    'Dark Souls',
  ].includes(game.name)
)

export const fallbackHorror = fallbackGames.filter((game) =>
  [
    "Five Nights at Freddy's 4",
    'Little Nightmares',
    "No, I'm not a Human",
    'Poppy Playtime',
    'Reanimal',
    'Resident Evil',
    'Sally Face',
    'Tiny Bunny',
  ].includes(game.name)
)