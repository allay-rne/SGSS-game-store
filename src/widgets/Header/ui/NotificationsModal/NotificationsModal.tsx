import {useEffect} from "react";
import Modal from "@/shared/ui/Modal";
import Button from "@/shared/ui/Button";
import './NotificationsModal.scss'

interface NotificationsModalProps {
  isOpen: boolean,
  onClose: () => void,
}

const NotificationsModal = (props: NotificationsModalProps) => {
  const {
    isOpen,
    onClose,
  } = props

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <Modal
      className="notifications-modal"
      animation="fade"
      isOpen={isOpen}
      ariaLabel="Notifications"
      onClose={onClose}
    >
      <div className="notifications-modal__header">
        <h2 className="notifications-modal__title">Notifications</h2>
        <Button
          label="Close"
          isLabelHidden
          mode="transparent"
          iconName="close"
          iconPosition="before"
          onClick={onClose}
        />
      </div>
      <p className="notifications-modal__empty">No notifications yet</p>
    </Modal>
  )
}

export default NotificationsModal