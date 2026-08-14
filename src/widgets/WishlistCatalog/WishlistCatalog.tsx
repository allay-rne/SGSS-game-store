import {useState} from "react";
import classNames from 'classnames'
import {fallbackGames} from "@/entities/game/model/fallbackGames.ts";
import {getGamesByIds} from "@/entities/game/lib/getGamesByIds.ts"
import {useFavoriteStore} from "@/features/favorite/model/useFavoriteStore.ts"
import Icon from "@/shared/ui/Icon";
import Button from "@/shared/ui/Button";
import GameGrid from "@/shared/ui/GameGrid";
import GameCard from "@/shared/ui/GameCard";
import GameList from "@/shared/ui/GameList";
import Checkbox from "@/shared/ui/Checkbox";
import ViewToggle from "@/shared/ui/ViewToggle";
import './WishlistCatalog.scss'

interface WishlistCatalogProps {
  className?: string;
}

const WishlistCatalog = (props: WishlistCatalogProps) => {
  const {
    className,
  } = props

  const favoriteIds = useFavoriteStore(state => state.favoriteIds)
  const favoriteGames = getGamesByIds(fallbackGames, favoriteIds)

  const [view, setView] = useState<'grid'|'list'>('list')

  return (
    <section
      className={classNames(className, 'wishlist-catalog')}
    >
      <div className="wishlist-catalog__header">
        <div className="wishlist-catalog__header-about">
          <div className="wishlist-catalog__header-title">
            <Icon
              name="heart"
            />
            <h1 className="wishlist-catalog__header-name">
              Wishlist
            </h1>
          </div>
          <div className="wishlist-catalog__header-count">
            <p>{favoriteGames.length} games</p>
          </div>
        </div>
        <Button
          className="wishlist-catalog__header-btn"
          label="Buy now"
          mode="transparent"
        />
        <Button label="Clear list" />
      </div>

      <div className="wishlist-catalog__main">
        <div className="wishlist-catalog__main-actions">
          <Checkbox label="Select all" />
          <ViewToggle activeView={view} onChange={setView} />
        </div>
        {view === 'grid'
          ? <GameGrid
            games={favoriteGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={999}
                layout="grid"
                id={game.id}
              />
            )}
          />
          : <GameList
            games={favoriteGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={999}
                layout="list"
                id={game.id}
              />
            )}
          />
        }
      </div>

      <div className="wishlist-catalog__notification">
          <Icon name="heart" />
        <div className="wishlist-catalog__notification-subtitle">
          <h2>Can't decide?</h2>
          <p>Keep an eye on discounts for games on your wishlist and get notified about price drops.</p>
        </div>
        <Button
          label="Turn on notifications"
          iconName="bell"
          iconPosition="before"
        />
      </div>
    </section>
  )
}

export default WishlistCatalog