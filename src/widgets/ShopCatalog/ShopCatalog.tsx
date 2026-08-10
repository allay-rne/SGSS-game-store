import {useState} from "react";
import classNames from "classnames";
import {fallbackGames} from "@/entities/game/model/fallbackGames.ts";
import Button from "@/shared/ui/Button";
import Dropdown from "@/shared/ui/Dropdown";
import ViewToggle from "@/shared/ui/ViewToggle";
import GameCard from "@/shared/ui/GameCard";
import GameList from "@/shared/ui/GameList";
import GameGrid from "@/shared/ui/GameGrid";
import {shopSortOption} from "@/widgets/ShopSidebar/lib/shopSortOptions.ts";
import './ShopCatalog.scss'

interface ShopCatalogProp {
  className?: string,
}

const ShopCatalog = (props: ShopCatalogProp) => {
  const {
    className,
  } = props

  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <section
      className={classNames(className, 'shop-catalog')}
    >
      <div className="shop-catalog__header">
        <div className="shop-catalog__header-action">
          <Button
            className="shop-catalog__btn"
            label="All Games"
            mode='transparent'
          />
          <Button
            className="shop-catalog__btn"
            label="New Releases"
            mode='transparent'
          />
          <Button
            className="shop-catalog__btn"
            label="Coming Soon"
            mode='transparent'
          />
          <Button
            className="shop-catalog__btn"
            label="Popular"
            mode='transparent'
          />
          <Button
            className="shop-catalog__btn"
            label="Top Sellers"
            mode='transparent'
          />
        </div>
        <div className="shop-catalog__header-controls">
          <Dropdown options={shopSortOption} />
          <ViewToggle
            activeView={view}
            onChange={setView}
          />
        </div>
      </div>
      <div className="shop-catalog__main">
        {view === 'grid'
          ? <GameGrid
            games={fallbackGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={999}
                layout="grid"
              />
            )}
          />
          : <GameList
            games={fallbackGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={999}
                layout="list"
              />
            )}
          />
        }
      </div>
      <div className="shop-catalog__footer">

      </div>
    </section>
  )
}

export default ShopCatalog