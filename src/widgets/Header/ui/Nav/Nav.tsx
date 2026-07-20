import {NavLink} from "react-router-dom";
import classNames from 'classnames'
import type {Navigation} from "@/widgets/Header/lib/navItems.ts";
import './Nav.scss'

interface NavProps {
  className?: string;
  items: Navigation;
}

const Nav = (props: NavProps) => {
  const {
    className,
    items,
  } = props

  return (
    <nav className={classNames('nav', className)}>
      <ul className="nav__list">
        {items.map(({label, to}) => (
          <li
            className="nav__item"
            key={to}
          >
            <NavLink
              className={({isActive}) =>
                classNames('nav__link', {'is-active': isActive})}
              to={to}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav