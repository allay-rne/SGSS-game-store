import classNames from 'classnames'
import type {Genre} from "@/entities/game/types/game.ts";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Dropdown from "@/shared/ui/Dropdown";
import FilterGroup from "@/widgets/ShopSidebar/ui/FilterGroup";
import {sidebarShopItems} from "@/widgets/ShopSidebar/lib/sidebarShopItems.ts";
import {
  shopSortOption,
  type ShopSortValue
} from "@/widgets/ShopSidebar/lib/shopSortOptions.ts";
import './ShopSidebar.scss'

interface ShopSidebarProps {
  className?: string,
  search: string,
  onChangeSearch: (value: string) => void,
  selectedGenres: Set<Genre>,
  onToggleGenre: (genre: Genre) => void,
  selectedPrice: string,
  onSelectPrice: (value: string) => void,
  selectedDiscount: string,
  onSelectDiscount: (value: string) => void,
  priceFrom: string,
  priceTo: string,
  onChangePriceFrom: (value: string) => void,
  onChangePriceTo: (value: string) => void,
  sort: ShopSortValue,
  onChangeSort: (value: ShopSortValue) => void,
}

const ShopSidebar = (props: ShopSidebarProps) => {
  const {
    className,
    search,
    onChangeSearch,
    selectedGenres,
    onToggleGenre,
    selectedPrice,
    onSelectPrice,
    selectedDiscount,
    onSelectDiscount,
    priceFrom,
    priceTo,
    onChangePriceFrom,
    onChangePriceTo,
    sort,
    onChangeSort,
  } = props

  const genresGroup = sidebarShopItems.find((group) => group.title === "GENRES")
  const priceGroup = sidebarShopItems.find((group) => group.title === "PRICE")
  const discountGroup = sidebarShopItems.find((group) => group.title === "DISCOUNTS")

  return (
    <aside className={classNames(className, 'shop-sidebar hidden-mobile')}>
      <div className="shop-sidebar__inner">

        <div className="shop-sidebar__filter">
          <div className="shop-sidebar__filter-title">
            <p className="shop-sidebar__filter-label">FILTER</p>
            <Button
              className="shop-sidebar__reset-btn"
              label="Reset all"
              mode="transparent"
            />
          </div>
          <Input
            className="shop-sidebar__input"
            type="text"
            name="search"
            placeholder="Search games..."
            iconName="search"
            value={search}
            onChange={(event) => onChangeSearch(event.target.value)}
          />
        </div>

        <div className="shop-sidebar__genres">
          {genresGroup && (
            <FilterGroup
              group={genresGroup}
              selectedValues={selectedGenres}
              onToggle={(value) => onToggleGenre(value as Genre)}
            />
          )}
        </div>

        <div className="shop-sidebar__price">
          {priceGroup && (
            <FilterGroup
              group={priceGroup}
              selectedValues={new Set([selectedPrice])}
              onToggle={onSelectPrice}
            />
          )}

          <div className="shop-sidebar__price-search">
            <Input
              className="shop-sidebar__input-fromto"
              type="number"
              name="priceFrom"
              placeholder="From..."
              iconName="dollar"
              value={priceFrom}
              onChange={(event) => onChangePriceFrom(event.target.value)}
            />

            <Input
              className="shop-sidebar__input-fromto"
              type="number"
              name="priceTo"
              placeholder="To..."
              iconName="dollar"
              value={priceTo}
              onChange={(event) => onChangePriceTo(event.target.value)}
            />
          </div>
        </div>

        <div className="shop-sidebar__discounts">
          {discountGroup && (
            <FilterGroup
              group={discountGroup}
              selectedValues={new Set([selectedDiscount])}
              onToggle={onSelectDiscount}
            />
          )}
        </div>

        <div className="shop-sidebar__sort">
          <p>SORTING</p>
          <Dropdown
            options={shopSortOption}
            value={sort}
            onChange={(event) => onChangeSort(event.target.value as ShopSortValue)}
          />
        </div>
      </div>
    </aside>
  )
}

export default ShopSidebar