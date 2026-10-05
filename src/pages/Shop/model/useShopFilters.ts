import {useState} from "react";
import type {Genre} from "@/entities/game/types/game.ts";
import type {ShopSortValue} from "@/widgets/ShopSidebar/lib/shopSortOptions.ts";

const useShopFilters = () => {

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState<string>('');
  const [selectedGenres, setSelectedGenres] = useState<Set<Genre>>(new Set());
  const [selectedPrice, setSelectedPrice] = useState<string>('any-price');
  const [selectedDiscount, setSelectedDiscount] = useState<string>('all-games');
  const [priceFrom, setPriceFrom] = useState<string>('');
  const [priceTo, setPriceTo] = useState<string>('');
  const [sort, setSort] = useState<ShopSortValue>('popular');

  const resetPage = (action: () => void) => {
    setPage(1)
    action()
  }

  const toggleGenre = (genre: Genre) => {
    resetPage(() => {
      setSelectedGenres(prev => {
        const next = new Set(prev);
        if (next.has(genre)) {
          next.delete(genre);
        } else {
          next.add(genre);
        }
        return next;
      });
    })
  };

  const changeSearch = (value: string) => {
    resetPage(() => setSearch(value))
  }

  const selectPrice = (value: string) => {
    resetPage(() => {
      setSelectedPrice(prev => (prev === value ? "any-price" : value))
      setPriceFrom('')
      setPriceTo('')
    })
  }

  const selectDiscount = (value: string) => {
    resetPage(() => {
      setSelectedDiscount(prev => (prev === value ? "all-games" : value))
    })
  }

  const changePriceFrom = (value: string) => {
    resetPage(() => {
      setPriceFrom(value)
      setSelectedPrice('any-price')
    })
  }

  const changePriceTo = (value: string) => {
    resetPage(() => {
      setPriceTo(value)
      setSelectedPrice('any-price')
    })
  }

  const changeSort = (value: ShopSortValue) => {
    resetPage(() => setSort(value))
  }

  const resetAll = () => {
    resetPage(() => {
      setSearch('')
      setSelectedGenres(new Set())
      setSelectedPrice('any-price')
      setSelectedDiscount('all-games')
      setPriceFrom('')
      setPriceTo('')
      setSort('popular')
    })
  }

  return(
    {
      page,
      setPage,
      search,
      selectedGenres,
      selectedPrice,
      selectedDiscount,
      priceFrom,
      priceTo,
      sort,
      toggleGenre,
      changeSearch,
      selectPrice,
      selectDiscount,
      changePriceFrom,
      changePriceTo,
      changeSort,
      resetAll,
    }
  )
}

export default useShopFilters