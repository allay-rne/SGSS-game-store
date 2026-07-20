import Logo from "@/shared/ui/Logo";
import Nav from "@/widgets/Header/ui/Nav";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
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
        <Input
          className="header__input hidden-laptop-s"
          type="text"
          name="search"
          placeholder="Search by games, genres, developers..."
          iconName="search"
        />
        <div className="header__actions">
          <Button
            className="header_actions-btn visible-laptop-s"
            label="Search"
            isLabelHidden
            mode="transparent"
            iconName="search"
            iconPosition="before"
          />
          <Button
            className="header_actions-btn hidden-mobile"
            label="Cart"
            isLabelHidden
            mode="transparent"
            iconName='basketShop'
            iconPosition='before'
            href="/cart"
          />
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