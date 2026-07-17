import Logo from "@/shared/ui/Logo";
import Nav from "@/shared/ui/Nav";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import {navItems} from "@/shared/lib/navItems.ts";
import './Header.scss'

const Header = () => {

  return (
    <header
      className='header'
    >
      <div className="header__inner">
        <Logo
          className="header__logo"
          loading="eager"
        />
        <Nav
          className="header__nav"
          items={navItems}
        />
        <Input
          className="header__input"
          type="search"
          name="search"
          placeholder="Search by games, genres, developers..."
          iconName="search"
        />
        <div className="header__actions">
          <Button
            className="header_actions-btn"
            label="Shop basket"
            isLabelHidden
            mode="transparent"
            iconName='basketShop'
            iconPosition='before'
          />
          <Button
            className="header_actions-btn"
            label="Notifications"
            isLabelHidden
            mode="transparent"
            iconName='bell'
            iconPosition='before'
          />
          <Button
            className="header_actions-btn"
            label="Profile"
            isLabelHidden
            mode="transparent"
            iconName="auth"
            iconPosition='before'
          />
        </div>
      </div>
    </header>
  )
}

export default Header