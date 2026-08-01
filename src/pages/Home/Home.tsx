import MainSidebar from "@/widgets/MainSidebar";
import './Home.scss'
import Hero from "@/widgets/Hero";
import GameSection from "@/widgets/GameSection";
import GameCard from "@/shared/ui/GameCard";
import useGamesList from "@/entities/game/model/useGamesList.ts";
import { popularGameTitles, newGameTitles, horrorGameTitles } from "./model/gameLists";

const Home = () => {
  const allGames = useGamesList();
  console.log(allGames.map((game) => game.name))

  const popularGames = allGames.filter((game) => popularGameTitles.includes(game.name));
  const newGames = allGames.filter((game) => newGameTitles.includes(game.name));
  const horrorGames = allGames.filter((game) => horrorGameTitles.includes(game.name));

  return (
    <main className='home'>
      <MainSidebar />
      <div className="home__content">
        <Hero />
        <GameSection
          title="Popular"
          games={popularGames}
          renderItem={(game) => (
            <GameCard title={game.name} image={game.background_image} price={999} />
          )}
        />
        <GameSection
          title="New Releases"
          games={newGames}
          renderItem={(game) => (
            <GameCard title={game.name} image={game.background_image} price={999} />
          )}
        />
        <GameSection
          title="Horror"
          games={horrorGames}
          renderItem={(game) => (
            <GameCard title={game.name} image={game.background_image} price={999} />
          )}
        />
      </div>
    </main>
  )
}

export default Home