import type {TypeDropdown} from "@/shared/ui/Dropdown/lib/typeDropdown.ts";

type ShopSortOptions = TypeDropdown[]

export const shopSortOption: ShopSortOptions = [
  {
    title: "Popular",
    value: "popular",
  },
  {
    title: "Price: Low to High",
    value: "price-low-to-high",
  },
  {
    title: "Price: High to Low",
    value: "price-high-to-low",
  },
  {
    title: "Best Sellers",
    value: "best-sellers",
  },
]