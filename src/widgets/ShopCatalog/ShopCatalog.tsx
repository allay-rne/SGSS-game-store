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
import {getPageNumbers} from "@/widgets/ShopCatalog/lib/getPageNumbers.ts";
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
    totalPages,
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
                price={game.price}
                oldPrice={game.oldPrice}
                layout="grid"
                id={game.id}
                genres={game.genres}
              />
            )}
          />
          : <GameList
            games={paginatedGames}
            renderItem={(game) => (
              <GameCard
                title={game.name}
                image={game.background_image}
                price={game.price}
                oldPrice={game.oldPrice}
                layout="list"
                id={game.id}
                genres={game.genres}
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
          {getPageNumbers(page, totalPages).map((item, i) =>
            item === '...' ? (
              <span key={`dots-${i}`} className="shop-catalog__pagination-dots">…</span>
            ) : (
              <Button
                key={item}
                className={classNames('shop-catalog__pagination-btn', {
                  'shop-catalog__pagination-btn--active': page === item
                })}
                label={String(item)}
                mode="transparent"
                onClick={() => setPage(item)}
              />
            )
          )}

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