import classNames from 'classnames'
import Modal from "@/shared/ui/Modal";
import Nav from "@/widgets/Header/ui/Nav";
import Button from "@/shared/ui/Button";
import {navItems} from "@/widgets/Header/lib/navItems.ts";
import './MobileMenu.scss'


interface MobileMenuProps {
  className?: string,
  isOpen: boolean,
}

const MobileMenu = (props:MobileMenuProps) => {
  const {
    className,
    isOpen,
  } = props

  return (
    <Modal
      className="mobile-menu"
      animation="slide"
      isOpen={isOpen}
      ariaLabel='Menu'
    >
     <nav
       className={classNames(className, 'mobile-menu__inner')}
     >
       <Nav
         className="mobile-menu__nav"
         items={navItems}
       />
       <div className="mobile-menu__actions">
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
     </nav>
    </Modal>
  )
}

export default MobileMenu