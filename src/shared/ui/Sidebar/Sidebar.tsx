import * as React from "react";
import classNames from 'classnames'
import './Sidebar.scss'

interface SidebarProps {
  className?: string,
  isOpen?: boolean,
  children: React.ReactNode,
}

const Sidebar = (props: SidebarProps) => {
  const {
    className,
    isOpen,
    children,
  } = props

  return (
    <aside
      className={classNames('sidebar', {'sidebar--open': isOpen}, className)}
    >
      <div className="sidebar__inner">
        {children}
      </div>
    </aside>
  )
}

export default Sidebar