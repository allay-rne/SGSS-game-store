import type {TypeDropdown} from "@/shared/ui/Dropdown/lib/typeDropdown.ts";

type ShopSortOptions = TypeDropdown[]

export const shopSortOption: ShopSortOptions = [
  {
    title: "Popular",
    value: "popular",
  },
  {
    title: "New Releases",
    value: "new-releases",
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
    title: "Top Rated",
    value: "top-rated",
  },
  {
    title: "Best Sellers",
    value: "best-sellers",
  },
]