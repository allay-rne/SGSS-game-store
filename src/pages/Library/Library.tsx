import {useLibraryStore} from "@/features/library/model/useLibraryStore.ts";
import {fallbackGames} from "@/entities/game/model/fallbackGames.ts";
import {getGamesByIds} from "@/entities/game/lib/getGamesByIds.ts";
import GameCard from "@/shared/ui/GameCard";
import Button from "@/shared/ui/Button";
import './Library.scss'

const Library = () => {
  const ids = useLibraryStore((state) => state.ids)
  const games = getGamesByIds(fallbackGames, ids)

  return (
    <div className="library">
      <h1 className="library__title">Library ({games.length})</h1>

      {games.length === 0 ? (
        <div className="library__empty">
          <p className="library__empty-text">Your library is empty</p>
          <Button label="Go to shop" href="/shop" />
        </div>
      ) : (
        <div className="library__grid">
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.name}
              image={game.background_image}
              price={game.price}
              oldPrice={game.oldPrice}
              genres={game.genres}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Library