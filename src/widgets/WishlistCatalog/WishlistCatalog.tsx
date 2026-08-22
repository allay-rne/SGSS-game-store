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
import Dropdown from "@/shared/ui/Dropdown";
import {wishlistSortOption} from "@/widgets/WishlistCatalog/lib/wishlistSortOptions.ts";
import useWishlistSelection from "@/widgets/WishlistCatalog/model/useWishlistSelection.ts";
import useWishlistSort
  , {type SortOption} from "@/widgets/WishlistCatalog/model/useWishlistSort.ts";
import './WishlistCatalog.scss'


interface WishlistCatalogProps {
  className?: string;
}

const WishlistCatalog = (props: WishlistCatalogProps) => {
  const {
    className,
  } = props

  const {
    sort,
    setSort,
    sortGames,
  } = useWishlistSort()

  const favoriteIds = useFavoriteStore(state => state.favoriteIds)
  const favoriteGames = getGamesByIds(fallbackGames, favoriteIds)
  const clearFavorites = useFavoriteStore(state => state.clearFavorites)

  const sortedGames = sortGames(favoriteGames)

  const {
    selectedCheckbox,
    toggleItem,
    isSelected,
    selectAll,
    isAllSelected,
  } = useWishlistSelection(favoriteIds);

  const [view, setView] = useState<'grid'|'list'>('list')

  const [notificationsOn, setNotificationsOn] = useState<boolean>(false);

  const toggleNotifications = () => {
    setNotificationsOn(prev => !prev);
  };

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
          disabled={selectedCheckbox.size === 0}
        />
        <Button
          label="Clear list"
          onClick={clearFavorites}
        />
      </div>

      <div className="wishlist-catalog__main">
        <div className="wishlist-catalog__main-actions">
          <Checkbox
            label="Select all"
            checked={isAllSelected}
            onChange={selectAll}
          />
          <div className="wishlist-catalog__right-action">
            <Dropdown
              className="wishlist-catalog__dropdown"
              options={wishlistSortOption}
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
            />
          <ViewToggle activeView={view} onChange={setView} />
          </div>
        </div>
        {view === 'grid'
          ? <GameGrid
            games={sortedGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={game.price}
                oldPrice={game.oldPrice}
                layout="grid"
                id={game.id}
                checked={isSelected(game.id)}
                onToggle={toggleItem}
                genres={game.genres}
              />
            )}
          />
          : <GameList
            games={sortedGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={game.price}
                oldPrice={game.oldPrice}
                layout="list"
                id={game.id}
                checked={isSelected(game.id)}
                onToggle={toggleItem}
                genres={game.genres}
              />
            )}
          />
        }
      </div>

      <div className="wishlist-catalog__notification hidden-tablet">
          <Icon name="heart" />
        <div className="wishlist-catalog__notification-subtitle">
          <h2>Can't decide?</h2>
          <p>Keep an eye on discounts for games on your wishlist and get notified about price drops.</p>
        </div>
        <Button
        label={notificationsOn ? "Notifications on" : "Turn on notifications"}
        iconName={notificationsOn ? "bellCheck" : "bell"}
        iconPosition="before"
        onClick={toggleNotifications}
        />
      </div>
    </section>
  )
}

export default WishlistCatalog