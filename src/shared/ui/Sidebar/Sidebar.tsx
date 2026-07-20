import * as React from "react";
import classNames from 'classnames'
import './Sidebar.scss'

interface SidebarProps {
  className?: string,
  children: React.ReactNode,
}

const Sidebar = (props: SidebarProps) => {
  const {
    className,
    children,
  } = props

  return (
    <div
      className={classNames('sidebar', className)}
    >
      <div className="sidebar__inner">
        {children}
      </div>
    </div>
  )
}

export default Sidebar