import type * as React from "react";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {useSearchStore} from "@/features/search/model/useSearchStore.ts";
import {useLocation, useNavigate} from "react-router-dom";
import Logo from "@/shared/ui/Logo";
import {useSidebarStore} from "@/features/sidebar/model/useSidebarStore.ts";
import {useCartStore} from "@/features/cart/model/useCartStore.ts";
import {useAuthStore} from "@/features/auth/model/useAuthStore.ts";
import {useAuthModalStore} from "@/features/auth/model/useAuthModalStore.ts";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Nav from "@/widgets/Header/ui/Nav";
import BurgerButton from "@/widgets/Header/ui/BurgerButton";
import {navItems} from "@/widgets/Header/lib/navItems.ts";
import useBurger from "@/widgets/Header/model/useBurger.ts";
import MobileMenu from "@/widgets/Header/ui/MobileMenu";
import NotificationsModal from "@/widgets/Header/ui/NotificationsModal";
import './Header.scss'


const Header = () => {

  const {
    isActive,
    handleToggleMenu,
  } = useBurger()

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const user = useAuthStore((state) => state.user)
  const openAuth = useAuthModalStore((state) => state.open)

  const searchInputRef = useRef<HTMLInputElement>(null)
  const toggleSidebar = useSidebarStore((state) => state.toggle)
  const cartCount = useCartStore((state) => state.ids.length)
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const isSearchHidden = ['/cart', '/wishlist'].includes(pathname)
  const isFilterHidden = ['/cart', '/wishlist', '/library'].includes(pathname)

  const query = useSearchStore((state) => state.query)
  const setQuery = useSearchStore((state) => state.setQuery)
  const resetSearch = useSearchStore((state) => state.reset)
  const closeSearch = () => {
    setIsSearchOpen(false)
    resetSearch()
  }
  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      closeSearch()
      return
    }
    if (event.key !== 'Enter') return
    if (pathname === '/shop' || pathname === '/library') return
    navigate('/shop')
  }

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus()
  }, [isSearchOpen])
  useEffect(() => {
    if (pathname !== '/shop') resetSearch()
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
            className={classNames('header__input', {'header__input--open': isSearchOpen})}
            type="text"
            name="search"
            placeholder="Search by games, genres, developers..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleSearchKeyDown}
            iconName={isSearchOpen ? 'close' : 'search'}
            onIconClick={isSearchOpen ? closeSearch : undefined}
            ref={searchInputRef}
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
              onClick={() => setIsSearchOpen(true)}
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
            onClick={() => setIsNotificationsOpen(true)}
          />
          {user ? (
            <Button
              className="header_actions-btn hidden-mobile"
              label="Profile"
              isLabelHidden
              mode="transparent"
              iconName="auth"
              iconPosition='before'
              href="/profile"
            />
          ) : (
            <Button
              className="header_actions-btn hidden-mobile"
              label="Sign in"
              isLabelHidden
              mode="transparent"
              iconName="auth"
              iconPosition='before'
              onClick={openAuth}
            />
          )}

          <BurgerButton
            isActive={isActive}
            onToggleMenu={handleToggleMenu}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isActive}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
      />
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </header>
  )
}

export default Header