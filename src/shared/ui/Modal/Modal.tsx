import * as React from "react";
import classNames from 'classnames'
import './Modal.scss'

interface ModalProps {
  className?: string,
  children: React.ReactNode
  animation: 'slide' | 'fade',
  isOpen: boolean,
  ariaLabel: string,
  onClose?: () => void,
}

const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    animation,
    isOpen,
    ariaLabel,
    onClose,
  } = props

  return (
  <div
    className={classNames(className, "modal", {
      [`modal--${animation}`]: animation,
      ['modal--open']: isOpen,
    })}
    role="dialog"
    aria-modal={true}
    aria-label={ariaLabel}
    onClick={(event) => {
      if (event.target === event.currentTarget) onClose?.()
    }}
  >
    <div className="modal__inner">
      {children}
    </div>
  </div>

  )
}

export default Modal