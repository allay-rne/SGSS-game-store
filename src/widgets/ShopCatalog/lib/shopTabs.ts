export type ShopTab = 'all' | 'free' | 'top-sellers'

export const shopTabs: { title: string, value: ShopTab }[] = [
  { title: 'All Games', value: 'all' },
  { title: 'Free Games', value: 'free' },
  { title: 'Top Sellers', value: 'top-sellers' },
]