import type {TypeDropdown} from "@/shared/ui/Dropdown/lib/typeDropdown.ts";

type wishlistSortOptions = TypeDropdown[]

export const wishlistSortOption: wishlistSortOptions = [
  {
    title: "By date added",
    value: "by-date-added",
  },
  {
    title: "Price: Low to High",
    value: "price-low-to-high",
  },
  {
    title: "Price: High to Low",
    value: "price-high-to-low",
  },
]