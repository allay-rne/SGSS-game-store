import Sidebar from "@/shared/ui/Sidebar";
import Button from "@/shared/ui/Button";
import Icon from "@/shared/ui/Icon";
import {sidebarItems} from "@/widgets/MainSidebar/lib/sidebarItems.ts";
import './MainSidebar.scss'

interface MainSidebarProps {
  className?: string,
}

const MainSidebar = (props: MainSidebarProps) => {
  const {
    className,
  } = props

  return (
    <Sidebar className={className}>
      <nav className="sidebar__nav">
        {sidebarItems.map((group) => (
          <div
            className="sidebar__group"
            key={group.title}
          >
            <h3>{group.title}</h3>
            <ul className="sidebar__group-list">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Icon name={link.iconName} />
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar__premium">
        <p className="sidebar__premium-text">
          More bonuses, discounts, and exclusive content every month.
        </p>
        <Button
          label="Read more"
        />
      </div>
    </Sidebar>
  )
}

export default MainSidebar