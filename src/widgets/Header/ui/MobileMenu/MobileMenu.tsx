import classNames from 'classnames'
import {useAuthStore} from "@/features/auth/model/useAuthStore.ts";
import {useAuthModalStore} from "@/features/auth/model/useAuthModalStore.ts";
import Modal from "@/shared/ui/Modal";
import Nav from "@/widgets/Header/ui/Nav";
import Button from "@/shared/ui/Button";
import {navItems} from "@/widgets/Header/lib/navItems.ts";
import './MobileMenu.scss'



interface MobileMenuProps {
  className?: string,
  isOpen: boolean,
  onOpenNotifications: () => void,
}

const MobileMenu = (props:MobileMenuProps) => {
  const {
    className,
    isOpen,
    onOpenNotifications,
  } = props

  const user = useAuthStore((state) => state.user)
  const openAuth = useAuthModalStore((state) => state.open)

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
           label="Cart"
           isLabelHidden
           mode="transparent"
           iconName='basketShop'
           iconPosition='before'
           href="/cart"
         />
         <Button
           className="header_actions-btn"
           label="Notifications"
           isLabelHidden
           mode="transparent"
           iconName='bell'
           iconPosition='before'
           onClick={onOpenNotifications}
         />
         {user ? (
           <Button
             className="header_actions-btn"
             label="Profile"
             isLabelHidden
             mode="transparent"
             iconName="auth"
             iconPosition='before'
             href="/profile"
           />
         ) : (
           <Button
             className="header_actions-btn"
             label="Sign in"
             isLabelHidden
             mode="transparent"
             iconName="auth"
             iconPosition='before'
             onClick={openAuth}
           />
         )}
       </div>
     </nav>
    </Modal>
  )
}

export default MobileMenu