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
import amongUs from '@/shared/assets/images/fallback/among-us.webp'
import artOfRally from '@/shared/assets/images/fallback/art-of-rally.webp'
import assassinsCreedValhalla
  from '@/shared/assets/images/fallback/Assassins-creed-valhalla.webp'
import aWayOut from '@/shared/assets/images/fallback/a-way-out.webp'
import backrooms from '@/shared/assets/images/fallback/backrooms.webp'
import callOfDutyBlackOps
  from '@/shared/assets/images/fallback/call-of-fduty-black-ops.webp'
import cuphead from '@/shared/assets/images/fallback/cuphead.webp'
import deponia from '@/shared/assets/images/fallback/deponia.webp'
import eldenRing from '@/shared/assets/images/fallback/eldenRing.webp'
import farmingSimulator
  from '@/shared/assets/images/fallback/farming-simulator.webp'
import fifa from '@/shared/assets/images/fallback/fifa.webp'
import firewatch from '@/shared/assets/images/fallback/firewatch.webp'
import flatout2 from '@/shared/assets/images/fallback/flatout-2.webp'
import forzaHorizon4 from '@/shared/assets/images/fallback/forza-horizon-4.webp'
import forzaHorizon5 from '@/shared/assets/images/fallback/forza-horizon-5.webp'
import goatSimulator from '@/shared/assets/images/fallback/goat-simulator.webp'
import heroes from '@/shared/assets/images/fallback/heroes.webp'
import hogwartsLegacy
  from '@/shared/assets/images/fallback/hogwarts-legacy.webp'
import plantsVsZombies
  from '@/shared/assets/images/fallback/iplants-vs-zombies.webp'
import itTakesTwo from '@/shared/assets/images/fallback/it-takes-two.webp'
import left4Dead2 from '@/shared/assets/images/fallback/left-4-dead-2.webp'
import minecraft from '@/shared/assets/images/fallback/minecraft.webp'
import needForSpeedMostWanted
  from '@/shared/assets/images/fallback/need-for-speed-most-wanted.webp'
import outlast from '@/shared/assets/images/fallback/outlast.webp'
import redDeadRedemption2
  from '@/shared/assets/images/fallback/red-dead-redemption-2.webp'
import silentHill2 from '@/shared/assets/images/fallback/silent-hill-2.webp'
import sims3 from '@/shared/assets/images/fallback/sims-3.webp'
import sims4 from '@/shared/assets/images/fallback/sims-4.webp'
import spore from '@/shared/assets/images/fallback/spore.webp'
import starCraft from '@/shared/assets/images/fallback/starCraft.webp'
import stoneSimulator
  from '@/shared/assets/images/fallback/stone-simulator.webp'
import stray from '@/shared/assets/images/fallback/stray.webp'
import terraria from '@/shared/assets/images/fallback/terraria.webp'
import theLastOfUs from '@/shared/assets/images/fallback/the-last-of-us.webp'
import untilDawn from '@/shared/assets/images/fallback/untilDawn.webp'

import type {Game} from '@/entities/game/types/game.ts'

export const fallbackGames: Game[] = [
  {
    id: 1,
    name: 'Beyond: Two Souls',
    background_image: beyondTwoSouls,
    genres: ['Adventure'],
    price: 11
  },
  {
    id: 2,
    name: 'Crysis 2',
    background_image: crysis2,
    genres: ['Action'],
    price: 7,
    oldPrice: 11
  },
  {
    id: 3,
    name: 'Counter-Strike 2',
    background_image: cs2,
    genres: ['Action', 'Multiplayer'],
    price: 10
  },
  {
    id: 4,
    name: 'Dark Souls',
    background_image: darkSouls,
    genres: ['RPG', 'Action'],
    price: 14
  },
  {
    id: 5,
    name: 'Dispatch',
    background_image: dispatch,
    genres: ['Adventure', 'Indie'],
    price: 7
  },
  {
    id: 6,
    name: 'Dota 2',
    background_image: dota2,
    genres: ['Strategy', 'Multiplayer'],
    price: 3
  },
  {
    id: 7,
    name: 'Dying Light',
    background_image: dyingLight,
    genres: ['Action', 'Horror'],
    price: 9,
    oldPrice: 15
  },
  {
    id: 8,
    name: "Five Nights at Freddy's 4",
    background_image: fnaf4,
    genres: ['Horror', 'Indie'],
    price: 6
  },
  {
    id: 9,
    name: 'God of War Ragnarök',
    background_image: godOfWarRagnarok,
    genres: ['Action', 'RPG'],
    price: 53
  },
  {
    id: 10,
    name: 'Grand Theft Auto VI',
    background_image: gta6,
    genres: ['Action', 'Adventure'],
    price: 112
  },
  {
    id: 11,
    name: 'Life Is Strange',
    background_image: lifeIsStrange,
    genres: ['Adventure'],
    price: 8
  },
  {
    id: 12,
    name: 'Little Nightmares',
    background_image: littleNightmares,
    genres: ['Horror', 'Indie'],
    price: 9,
    oldPrice: 18
  },
  {
    id: 13,
    name: "No, I'm not a Human",
    background_image: noImNotAHuman,
    genres: ['Horror', 'Indie'],
    price: 5
  },
  {
    id: 14,
    name: 'Poppy Playtime',
    background_image: poppyPlayTime,
    genres: ['Horror', 'Indie'],
    price: 7
  },
  {
    id: 15,
    name: 'Reanimal',
    background_image: reanimal,
    genres: ['Horror', 'Indie'],
    price: 12
  },
  {
    id: 16,
    name: 'Resident Evil',
    background_image: residentEvil,
    genres: ['Horror', 'Action'],
    price: 16,
    oldPrice: 19
  },
  {
    id: 17,
    name: 'Sally Face',
    background_image: sallyFace,
    genres: ['Horror', 'Indie'],
    price: 6
  }, // была опечатка price:399, поправил
  {
    id: 18,
    name: 'Tiny Bunny',
    background_image: tinyBunny,
    genres: ['Horror', 'Indie'],
    price: 5
  },
  {
    id: 19,
    name: 'The Witcher 3: Wild Hunt',
    background_image: witcher,
    genres: ['RPG', 'Adventure'],
    price: 10,
    oldPrice: 17
  },
  {
    id: 20,
    name: 'Black Myth: Wukong',
    background_image: wukong,
    genres: ['RPG', 'Action'],
    price: 35
  },
  {
    id: 21,
    name: 'Among Us',
    background_image: amongUs,
    genres: ['Multiplayer', 'Indie'],
    price: 5
  },
  {
    id: 22,
    name: 'Art of Rally',
    background_image: artOfRally,
    genres: ['Racing', 'Indie'],
    price: 20
  },
  {
    id: 23,
    name: "Assassin's Creed Valhalla",
    background_image: assassinsCreedValhalla,
    genres: ['Action', 'RPG'],
    price: 40,
    oldPrice: 60
  },
  {
    id: 24,
    name: 'A Way Out',
    background_image: aWayOut,
    genres: ['Adventure', 'Multiplayer'],
    price: 15
  },
  {
    id: 25,
    name: 'Backrooms',
    background_image: backrooms,
    genres: ['Horror', 'Indie'],
    price: 4
  },
  {
    id: 26,
    name: 'Call of Duty: Black Ops',
    background_image: callOfDutyBlackOps,
    genres: ['Action', 'Multiplayer'],
    price: 50,
    oldPrice: 70
  },
  {
    id: 27,
    name: 'Cuphead',
    background_image: cuphead,
    genres: ['Action', 'Indie'],
    price: 20
  },
  {
    id: 28,
    name: 'Deponia',
    background_image: deponia,
    genres: ['Adventure', 'Indie'],
    price: 10
  },
  {
    id: 29,
    name: 'Elden Ring',
    background_image: eldenRing,
    genres: ['RPG', 'Action'],
    price: 45,
    oldPrice: 60
  },
  {
    id: 30,
    name: 'Farming Simulator',
    background_image: farmingSimulator,
    genres: ['Simulation'],
    price: 30
  },
  {
    id: 31,
    name: 'FIFA',
    background_image: fifa,
    genres: ['Sports', 'Multiplayer'],
    price: 40,
    oldPrice: 60
  },
  {
    id: 32,
    name: 'Firewatch',
    background_image: firewatch,
    genres: ['Adventure', 'Indie'],
    price: 12
  },
  {
    id: 33,
    name: 'FlatOut 2',
    background_image: flatout2,
    genres: ['Racing', 'Multiplayer'],
    price: 8
  },
  {
    id: 34,
    name: 'Forza Horizon 4',
    background_image: forzaHorizon4,
    genres: ['Racing', 'Simulation'],
    price: 35
  },
  {
    id: 35,
    name: 'Forza Horizon 5',
    background_image: forzaHorizon5,
    genres: ['Racing', 'Simulation'],
    price: 45,
    oldPrice: 60
  },
  {
    id: 36,
    name: 'Goat Simulator',
    background_image: goatSimulator,
    genres: ['Simulation', 'Indie'],
    price: 10
  },
  {
    id: 37,
    name: 'Heroes of Might and Magic',
    background_image: heroes,
    genres: ['Strategy', 'RPG'],
    price: 15
  },
  {
    id: 38,
    name: 'Hogwarts Legacy',
    background_image: hogwartsLegacy,
    genres: ['RPG', 'Adventure'],
    price: 50,
    oldPrice: 70
  },
  {
    id: 39,
    name: 'Plants vs. Zombies',
    background_image: plantsVsZombies,
    genres: ['Strategy', 'Indie'],
    price: 8
  },
  {
    id: 40,
    name: 'It Takes Two',
    background_image: itTakesTwo,
    genres: ['Adventure', 'Multiplayer'],
    price: 30
  },
  {
    id: 41,
    name: 'Left 4 Dead 2',
    background_image: left4Dead2,
    genres: ['Action', 'Multiplayer'],
    price: 8
  },
  {
    id: 42,
    name: 'Minecraft',
    background_image: minecraft,
    genres: ['Simulation', 'Multiplayer'],
    price: 27
  },
  {
    id: 43,
    name: 'Need for Speed: Most Wanted',
    background_image: needForSpeedMostWanted,
    genres: ['Racing', 'Action'],
    price: 15
  },
  {
    id: 44,
    name: 'Outlast',
    background_image: outlast,
    genres: ['Horror', 'Indie'],
    price: 10
  },
  {
    id: 45,
    name: 'Red Dead Redemption 2',
    background_image: redDeadRedemption2,
    genres: ['Action', 'Adventure'],
    price: 45,
    oldPrice: 60
  },
  {
    id: 46,
    name: 'Silent Hill 2',
    background_image: silentHill2,
    genres: ['Horror', 'Action'],
    price: 40,
    oldPrice: 60
  },
  {
    id: 47,
    name: 'The Sims 3',
    background_image: sims3,
    genres: ['Simulation'],
    price: 20
  },
  {
    id: 48,
    name: 'The Sims 4',
    background_image: sims4,
    genres: ['Simulation'],
    price: 10
  },
  {
    id: 49,
    name: 'Spore',
    background_image: spore,
    genres: ['Simulation', 'Strategy'],
    price: 15
  },
  {
    id: 50,
    name: 'StarCraft',
    background_image: starCraft,
    genres: ['Strategy', 'Multiplayer'],
    price: 15
  },
  {
    id: 51,
    name: 'Stone Simulator',
    background_image: stoneSimulator,
    genres: ['Simulation', 'Indie'],
    price: 5
  },
  {
    id: 52,
    name: 'Stray',
    background_image: stray,
    genres: ['Adventure', 'Indie'],
    price: 20
  },
  {
    id: 53,
    name: 'Terraria',
    background_image: terraria,
    genres: ['Indie', 'Adventure'],
    price: 8
  },
  {
    id: 54,
    name: 'The Last of Us',
    background_image: theLastOfUs,
    genres: ['Action', 'Adventure'],
    price: 40,
    oldPrice: 60
  },
  {
    id: 55,
    name: 'Until Dawn',
    background_image: untilDawn,
    genres: ['Horror', 'Adventure'],
    price: 15
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