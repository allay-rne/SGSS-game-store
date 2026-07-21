import classNames from 'classnames'
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Dropdown from "@/shared/ui/Dropdown";
import FilterGroup from "@/widgets/ShopSidebar/ui/FilterGroup";
import {sidebarShopItems} from "@/widgets/ShopSidebar/lib/sidebarShopItems.ts";
import {shopSortOption} from "@/widgets/ShopSidebar/lib/shopSortOptions.ts";
import './ShopSidebar.scss'

interface ShopSidebarProps {
  className?: string,
}

const ShopSidebar = (props: ShopSidebarProps) => {
  const {
    className,
  } = props

  const genresGroup = sidebarShopItems.find((group) => group.title === "GENRES")
  const priceGroup = sidebarShopItems.find((group) => group.title === "PRICE")
  const discountGroup = sidebarShopItems.find((group) => group.title === "DISCOUNTS")
  const platformGroup = sidebarShopItems.find((group) => group.title === "PLATFORM")
  const featuresGroup = sidebarShopItems.find((group) => group.title === "FEATURES")

  return (
    <aside className={classNames(className, 'shop-sidebar')}>
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
            placeholder="Search by filters..."
            iconName="search"
          />
        </div>

        <div className="shop-sidebar__genres">
          {genresGroup && <FilterGroup group={genresGroup} />}
        </div>

        <div className="shop-sidebar__price">
          {priceGroup && <FilterGroup group={priceGroup} />}

          <div className="shop-sidebar__price-search">
            <Input
              className="shop-sidebar__input-fromto"
              type="number"
              name="priceFrom"
              placeholder="From..."
              iconName="dollar"
            />

            <Input
              className="shop-sidebar__input-fromto"
              type="number"
              name="priceTo"
              placeholder="To..."
              iconName="dollar"
            />
          </div>
        </div>

        <div className="shop-sidebar__discounts">
          {discountGroup && <FilterGroup group={discountGroup} />}
        </div>

        <div className="shop-sidebar__platform">
          {platformGroup && <FilterGroup group={platformGroup} />}
        </div>

        <div className="shop-sidebar__features">
          {featuresGroup && <FilterGroup group={featuresGroup} />}
        </div>

        <div className="shop-sidebar__sort">
          <p>SORTING</p>
          <Dropdown
            options={shopSortOption}
          />
        </div>
      </div>
    </aside>
  )
}

export default ShopSidebar