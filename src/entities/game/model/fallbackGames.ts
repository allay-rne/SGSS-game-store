import beyondTwoSouls from '@/shared/assets/images/fallback/beyondTwoSouls.webp'
import crysis2 from '@/shared/assets/images/fallback/crysis2.webp'
import cs2 from '@/shared/assets/images/fallback/cs2.webp'
import darkSouls from '@/shared/assets/images/fallback/darkSouls.webp'
import dispatch from '@/shared/assets/images/fallback/dispatch.webp'
import dota2 from '@/shared/assets/images/fallback/dota2.webp'
import dyingLight from '@/shared/assets/images/fallback/dyingLight.webp'
import fnaf4 from '@/shared/assets/images/fallback/fnaf4.webp'
import godOfWarRagnarok from '@/shared/assets/images/fallback/god of war ragnarok.webp'
import gta6 from '@/shared/assets/images/fallback/gta6.webp'
import lifeIsStrange from '@/shared/assets/images/fallback/lifeIsStrange.webp'
import littleNightmares from '@/shared/assets/images/fallback/littleNightmares.webp'
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
    background_image: beyondTwoSouls
  },
  {
    id: 2,
    name: 'Crysis 2',
    background_image: crysis2
  },
  {
    id: 3,
    name: 'Counter-Strike 2',
    background_image: cs2
  },
  {
    id: 4,
    name: 'Dark Souls',
    background_image: darkSouls
  },
  {
    id: 5,
    name: 'Dispatch',
    background_image: dispatch
  },
  {
    id: 6,
    name: 'Dota 2',
    background_image: dota2
  },
  {
    id: 7,
    name: 'Dying Light',
    background_image: dyingLight
  },
  {
    id: 8,
    name: "Five Nights at Freddy's 4",
    background_image: fnaf4
  },
  {
    id: 9,
    name: 'God of War Ragnarök',
    background_image: godOfWarRagnarok
  },
  {
    id: 10,
    name: 'Grand Theft Auto VI',
    background_image: gta6
  },
  {
    id: 11,
    name: 'Life Is Strange',
    background_image: lifeIsStrange
  },
  {
    id: 12,
    name: 'Little Nightmares',
    background_image: littleNightmares
  },
  {
    id: 13,
    name: "No, I'm not a Human",
    background_image: noImNotAHuman
  },
  {
    id: 14,
    name: 'Poppy Playtime',
    background_image: poppyPlayTime
  },
  {
    id: 15,
    name: 'Reanimal',
    background_image: reanimal
  },
  {
    id: 16,
    name: 'Resident Evil',
    background_image: residentEvil
  },
  {
    id: 17,
    name: 'Sally Face',
    background_image: sallyFace
  },
  {
    id: 18,
    name: 'Tiny Bunny',
    background_image: tinyBunny
  },
  {
    id: 19,
    name: 'The Witcher 3: Wild Hunt',
    background_image: witcher
  },
  {
    id: 20,
    name: 'Black Myth: Wukong',
    background_image: wukong
  },
]