import type {IconName} from "@/shared/ui/Icon";

type SidebarItem = {
  title: string,
  links: {iconName: IconName, label: string, to: string}[]
}

export type SidebarItems = SidebarItem[]

export const sidebarItems: SidebarItems = [
  {
    title: 'Categories',
    links: [
      {
        iconName: "lightning",
        label: "Popular",
        to: "/",
      },
      {
        iconName: "star",
        label: "New Releases",
        to: "/",
      },
      {
        iconName: "comingSoon",
        label: "Coming Soon",
        to: "/",
      },
      {
        iconName: "sale",
        label: "Deals",
        to: "/",
      },
      {
        iconName: "aim",
        label: "Action",
        to: "/",
      },
      {
        iconName: "backpack",
        label: "Adventure",
        to: "/",
      },
      {
        iconName: "rpg",
        label: "RPG",
        to: "/",
      },
      {
        iconName: "chess",
        label: "Strategy",
        to: "/",
      },
      {
        iconName: "sailboat",
        label: "Simulation",
        to: "/",
      },
      {
        iconName: "football",
        label: "Sports",
        to: "/",
      },
      {
        iconName: "wheel",
        label: "Racing",
        to: "/",
      },
      {
        iconName: "infinity",
        label: "Indie",
        to: "/",
      },
      {
        iconName: "gamepad",
        label: "Multiplayer",
        to: "/",
      },
      {
        iconName: "vr",
        label: "VR Games",
        to: "/",
      },
    ]
  },
  {
    title: 'Quick Access',
    links: [
      {
        iconName: "heart",
        label: "My Wishlist",
        to: "/",
      },
      {
        iconName: "update",
        label: "Recent Updates",
        to: "/",
      },
      {
        iconName: "downloadGame",
        label: "Installed Games",
        to: "/",
      },
      {
        iconName: "historyClock",
        label: "Purchase History",
        to: "/",
      },
    ],
  },
]