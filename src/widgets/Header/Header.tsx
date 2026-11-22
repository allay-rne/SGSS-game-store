import {useEffect} from "react";
import {useSearchStore} from "@/features/search/model/useSearchStore.ts";
import {useLocation} from "react-router-dom";
import Logo from "@/shared/ui/Logo";
import {useSidebarStore} from "@/features/sidebar/model/useSidebarStore.ts";
import {useCartStore} from "@/features/cart/model/useCartStore.ts";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Nav from "@/widgets/Header/ui/Nav";
import BurgerButton from "@/widgets/Header/ui/BurgerButton";
import {navItems} from "@/widgets/Header/lib/navItems.ts";
import useBurger from "@/widgets/Header/model/useBurger.ts";
import MobileMenu from "@/widgets/Header/ui/MobileMenu";
import './Header.scss'


const Header = () => {

  const {
    isActive,
    handleToggleMenu,
  } = useBurger()

  const toggleSidebar = useSidebarStore((state) => state.toggle)
  const cartCount = useCartStore((state) => state.ids.length)
  const {pathname} = useLocation()
  const isSearchHidden = ['/cart', '/wishlist'].includes(pathname)
  const isFilterHidden = ['/cart', '/wishlist', '/library'].includes(pathname)

  const query = useSearchStore((state) => state.query)
  const setQuery = useSearchStore((state) => state.setQuery)
  const resetSearch = useSearchStore((state) => state.reset)

  useEffect(() => {
    resetSearch()
  }, [pathname, resetSearch])

  return (
    <header
      className='header'
    >
      <div className="header__inner container">
        <Logo
          className="header__logo"
          loading="eager"
        />
        <Nav
          className="header__nav hidden-mobile"
          items={navItems}
        />
        {!isSearchHidden && (
          <Input
            className="header__input"
            type="text"
            name="search"
            placeholder="Search by games, genres, developers..."
            iconName="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        )}
        <div className="header__actions">

          {!isSearchHidden && (
            <Button
              className="header_search-btn"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="search"
              iconPosition="before"
            />
          )}
          {!isFilterHidden && (
            <Button
              className="header_actions-btn visible-mobile"
              label="Filter"
              isLabelHidden
              mode="transparent"
              iconName="filter"
              iconPosition="before"
              onClick={toggleSidebar}
            />
          )}
          <div className="header__cart hidden-mobile">
            <Button
              className="header_actions-btn"
              label="Cart"
              isLabelHidden
              mode="transparent"
              iconName='basketShop'
              iconPosition='before'
              href="/cart"
            />
            {cartCount > 0 && (
              <span className="header__cart-count">{cartCount}</span>
            )}
          </div>
          <Button
            className="header_actions-btn hidden-mobile"
            label="Notifications"
            isLabelHidden
            mode="transparent"
            iconName='bell'
            iconPosition='before'
          />
          <Button
            className="header_actions-btn hidden-mobile"
            label="Profile"
            isLabelHidden
            mode="transparent"
            iconName="auth"
            iconPosition='before'
          />

          <BurgerButton
            isActive={isActive}
            onToggleMenu={handleToggleMenu}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isActive}
      />
    </header>
  )
}

export default Header