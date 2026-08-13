import classNames from "classnames";
import {fallbackGames} from "@/entities/game/model/fallbackGames.ts";
import Button from "@/shared/ui/Button";
import Dropdown from "@/shared/ui/Dropdown";
import ViewToggle from "@/shared/ui/ViewToggle";
import GameCard from "@/shared/ui/GameCard";
import GameList from "@/shared/ui/GameList";
import GameGrid from "@/shared/ui/GameGrid";
import {shopSortOption} from "@/widgets/ShopSidebar/lib/shopSortOptions.ts";
import useCatalog from "@/widgets/ShopCatalog/model/useCatalog.ts";
import './ShopCatalog.scss'

interface ShopCatalogProp {
  className?: string,
}

const ShopCatalog = (props: ShopCatalogProp) => {
  const {
    className,
  } = props

  const {
    view,
    setView,
    page,
    setPage,
    paginatedGames,
    goToNextPage,
    goToPrevPage,
  } = useCatalog(fallbackGames)

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
            games={paginatedGames}
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
            games={paginatedGames}
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
      <div className="shop-catalog__footer">
        <div className="shop-catalog__pagination">
          <Button
            className="shop-catalog__pagination-arrow"
            label="Back"
            isLabelHidden
            iconName="arrowLeft"
            iconPosition="after"
            mode="transparent"
            onClick={goToPrevPage}
          />
          <Button
            className={classNames('shop-catalog__pagination-btn', {
              'shop-catalog__pagination-btn--active': page === 1
            })}
            label="1"
            mode="transparent"
            onClick={() => setPage(1)}
          />
          <Button
            className={classNames('shop-catalog__pagination-btn', {
              'shop-catalog__pagination-btn--active': page === 2
            })}            label="2"
            mode="transparent"
            onClick={() => setPage(2)}
          />
          <Button
            className={classNames('shop-catalog__pagination-btn', {
              'shop-catalog__pagination-btn--active': page === 3
            })}
            label="3"
            mode="transparent"
            onClick={() => setPage(3)}
          />
          <Button
            className={classNames('shop-catalog__pagination-btn', {
              'shop-catalog__pagination-btn--active': page === 4
            })}
            label="4"
            mode="transparent"
            onClick={() => setPage(4)}
          />

          <Button
            className="shop-catalog__pagination-arrow"
            label="Forward"
            isLabelHidden
            iconName="arrowRight"
            iconPosition="after"
            mode="transparent"
            onClick={goToNextPage}
          />
        </div>
      </div>
    </section>
  )
}

export default ShopCatalog