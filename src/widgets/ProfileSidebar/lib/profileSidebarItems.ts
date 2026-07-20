import type {IconName} from "@/shared/ui/Icon";

type ProfileSidebarItem = {
  title: string,
  links: { iconName: IconName, label: string, to: string }[]
}

export type ProfileSidebarItems = ProfileSidebarItem[]

export const profileSidebarItems: ProfileSidebarItems = [
  {
    title: 'PROFILE',
    links: [
      {
        iconName: "auth",
        label: "Overview",
        to: "/",
      },
      {
        iconName: "books",
        label: "Library",
        to: "/",
      },
      {
        iconName: "heart",
        label: "Wishlist",
        to: "/",
      },
      {
        iconName: "message",
        label: "Reviews",
        to: "/",
      },
      {
        iconName: "achievements",
        label: "Achievements",
        to: "/",
      },
      {
        iconName: "activity",
        label: "Recent Activity",
        to: "/",
      },
    ]
  },

  {
    title: 'ACCOUNT',
    links: [
      {
        iconName: "person",
        label: "Profile",
        to: "/",
      },
      {
        iconName: "privacy",
        label: "Privacy",
        to: "/",
      },
      {
        iconName: "bell",
        label: "Notifications",
        to: "/",
      },
      {
        iconName: "settings",
        label: "Settings",
        to: "/",
      },
      {
        iconName: "key",
        label: "Security",
        to: "/",
      },
    ]
  },
]