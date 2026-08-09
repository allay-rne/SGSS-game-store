import useGamesList from "@/entities/game/model/useGamesList.ts";
import GameCard from "@/shared/ui/GameCard";
import MainSidebar from "@/widgets/MainSidebar";
import Hero from "@/widgets/Hero";
import GameSection from "@/widgets/GameSection";
import TrustBadges from "@/widgets/TrustBadges";
import PromoSale from "@/widgets/PromoSale";
import {
  popularGameTitles,
  newGameTitles,
  horrorGameTitles
} from "./model/gameLists";
import {
  fallbackPopular,
  fallbackNewReleases,
  fallbackHorror
} from "@/entities/game/model/fallbackGames.ts";
import './Home.scss'

const Home = () => {
  const { games: allGames, isFallback } = useGamesList();

  const popularGames = isFallback
    ? fallbackPopular
    : allGames.filter((game) => popularGameTitles.includes(game.name));

  const newGames = isFallback
    ? fallbackNewReleases
    : allGames.filter((game) => newGameTitles.includes(game.name));

  const horrorGames = isFallback
    ? fallbackHorror
    : allGames.filter((game) => horrorGameTitles.includes(game.name));

  return (
    <>
      <main className='home'>
        <MainSidebar />
        <div className="home__content">
          <Hero />
          <GameSection
            title="Popular"
            games={popularGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={999}
              />
            )}
          />
          <GameSection
            title="New Releases"
            games={newGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={999}
              />
            )}
          />
          <GameSection
            title="Horror"
            games={horrorGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={999}
              />
            )}
          />
        </div>
      </main>
      <div className="home__full-width">
        <PromoSale />
        <TrustBadges />
      </div>
    </>
  )
}

export default Home