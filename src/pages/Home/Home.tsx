import GameCard from "@/shared/ui/GameCard";
import MainSidebar from "@/widgets/MainSidebar";
import Hero from "@/widgets/Hero";
import GameSection from "@/widgets/GameSection";
import TrustBadges from "@/widgets/TrustBadges";
import PromoSale from "@/widgets/PromoSale";
import {
  fallbackPopular,
  fallbackNewReleases,
  fallbackHorror
} from "@/entities/game/model/fallbackGames.ts";
import './Home.scss'

const Home = () => {

  return (
    <>
      <main className='home'>
        <MainSidebar />
        <div className="home__content">
          <Hero />
          <GameSection
            title="Popular"
            games={fallbackPopular}
            renderItem={(game) => (
              <GameCard
                id={game.id}
                title={game.name}
                image={game.background_image}
                price={game.price}
                oldPrice={game.oldPrice}
                genres={game.genres}
              />
            )}
          />
          <GameSection
            title="New Releases"
            games={fallbackNewReleases}
            renderItem={(game) => (
              <GameCard
                id={game.id}
                title={game.name}
                image={game.background_image}
                price={game.price}
                oldPrice={game.oldPrice}
                genres={game.genres}
              />
            )}
          />
          <GameSection
            title="Horror"
            games={fallbackHorror}
            renderItem={(game) => (
              <GameCard
                id={game.id}
                title={game.name}
                image={game.background_image}
                price={game.price}
                oldPrice={game.oldPrice}
                genres={game.genres}
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