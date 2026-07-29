import classNames from 'classnames'
import Icon from "@/shared/ui/Icon";
import Checkbox from "@/shared/ui/Checkbox";
import type {SidebarShopGroup} from "@/widgets/ShopSidebar/lib/sidebarShopItems.ts";
import './FilterGroup.scss'
import {useState} from "react";

interface FilterGroupProps {
  className?: string,
  group: SidebarShopGroup,
}

const FilterGroup = (props:FilterGroupProps) => {
  const {
    className,
    group,
  } = props


  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={classNames(className, 'filter-group')}>
      <div
        className="filter-group__header"
        onClick={handleClickOpen}
      >
        <span className="filter-group__title">{group.title}</span>
        <Icon
          className={classNames('filter-group__icon', {
            'filter-group__icon--is-open': isOpen
          })}
          name="up"
        />
      </div>
      <div className={classNames("filter-group__list-wrapper", {
        'filter-group__list-wrapper--is-open': isOpen
      })}>
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
    </div>
  )
}

export default FilterGroup