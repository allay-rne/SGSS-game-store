type NavItem = {
  label: string;
  to: string;
}

export type Navigation = NavItem[]

export const navItems:Navigation = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Shop',
    to: '/shop',
  },
  {
    label: 'Library',
    to: '/library',
  },
  {
    label: 'Wishlist',
    to: '/wishlist',
  },
  {
    label: 'Profile',
    to: '/profile',
  },
]