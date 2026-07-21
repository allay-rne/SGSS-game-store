import classNames from 'classnames'
import type {
  SidebarShopGroup
} from "@/widgets/ShopSidebar/lib/sidebarShopItems.ts";
import './FilterGroup.scss'
import Icon from "@/shared/ui/Icon";
import Checkbox from "@/shared/ui/Checkbox";

interface FilterGroupProps {
  className?: string,
  group: SidebarShopGroup,
}

const FilterGroup = (props:FilterGroupProps) => {
  const {
    className,
    group,
  } = props

  return (
    <div className={classNames(className, 'filter-group')}>
      <div className="filter-group__header">
        <span className="filter-group__title">{group.title}</span>
        <Icon name="up" />
      </div>
      <ul className="filter-group__list">
        {group.items.map(({title, count, value}) =>(
          <li key={value}>
            <Checkbox
              label={title}
              count={count}
              value={value}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterGroup