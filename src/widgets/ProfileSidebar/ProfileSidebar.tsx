import Sidebar from "@/shared/ui/Sidebar";
import Button from "@/shared/ui/Button";
import Icon from "@/shared/ui/Icon";
import {profileSidebarItems} from "@/widgets/ProfileSidebar/lib/profileSidebarItems.ts";
import './ProfileSidebar.scss'

interface ProfileSidebarProps {
  className?: string,
}

const ProfileSidebar = (props: ProfileSidebarProps) => {
  const {
    className,
  } = props

  return (
    <Sidebar className={className}>
      <nav className="profile-sidebar__nav">
        {profileSidebarItems.map((group) => (
          <div
            className="profile-sidebar__group"
            key={group.title}
          >
            <h3>{group.title}</h3>
            <ul className="profile-sidebar__group-list">
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

      <div className="profile-sidebar__exit">
        <Button
          className="profile-sidebar__exit-btn"
          mode="transparent"
          iconName="logout"
          iconPosition="before"
          label="Exit"
        />
      </div>
    </Sidebar>
  )
}

export default ProfileSidebar