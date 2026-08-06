import classNames from "classnames";
import Button from "@/shared/ui/Button";
import Dropdown from "@/shared/ui/Dropdown";
import {shopSortOption} from "@/widgets/ShopSidebar/lib/shopSortOptions.ts";
import './ShopCatalog.scss'
import ViewToggle from "@/shared/ui/ViewToggle";

interface ShopCatalogProp {
  className?: string,
}

const ShopCatalog = (props: ShopCatalogProp) => {
  const {
    className,
  } = props

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
          <ViewToggle />
        </div>
      </div>
      <div className="shop-catalog__main">

      </div>
      <div className="shop-catalog__footer">

      </div>
    </section>
  )
}

export default ShopCatalog