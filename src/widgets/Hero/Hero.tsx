import { useEffect, useState } from "react"
import type { Game } from "@/entities/game/types/game.ts"
import { getGames } from "@/entities/game/api/gameApi"
import { extraHeroData } from "@/widgets/Hero/model/extraHero"
import Slider from "@/shared/ui/Slider"
import Button from "@/shared/ui/Button"
import './Hero.scss'

const Hero = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const allowedGameTitles = [
      'Grand Theft Auto V',
      'Tomb Raider',
      'BioShock',
      'BioShock Infinite',
      'Little Nightmares',
      'Fallout 4',
      'Rise of the Tomb Raider',
      "Middle-earth: Shadow of Mordor",
    ]

    const fetchGames = async () => {
      const data = await getGames(1)
      const filtered = data.results.filter((game) =>
        allowedGameTitles.includes(game.name)
      )
      setGames(filtered)
    }

    fetchGames()
  }, [])

  return (
    <section className='hero'>
      <Slider
        items={games}
        renderItem={(game) => {
          const extra = extraHeroData.find((item) => item.gameId === game.id)

          return (
            <div
              className="hero__inner"
              style={{ backgroundImage: `url(${game.background_image})` }}
            >
              <h1 className="hero__title">{game.name}</h1>
              <p className="hero__subtitle">
                {extra && extra.description}
              </p>
              <p className="hero__price">
                {extra && `$${extra.price}`}
              </p>
              <div className="hero__active">
                <Button label="Buy" />
                <Button
                  label="Favorite"
                  isLabelHidden
                  iconName="heart"
                  iconPosition="before"
                />
              </div>
            </div>
          )
        }}
      />
    </section>
  )
}

export default Hero