import {useState} from "react";
import type {Genre} from "@/entities/game/types/game.ts";
import ShopSidebar from "@/widgets/ShopSidebar";
import PromoSale from "@/widgets/PromoSale";
import ShopCatalog from "@/widgets/ShopCatalog";
import type {ShopSortValue} from "@/widgets/ShopSidebar/lib/shopSortOptions.ts";
import './Shop.scss'


const Shop = () => {

  const [page, setPage] = useState(1)
  const [selectedGenres, setSelectedGenres] = useState<Set<Genre>>(new Set());
  const [selectedPrice, setSelectedPrice] = useState<string>('any-price');
  const [selectedDiscount, setSelectedDiscount] = useState<string>('all-games');
  const [priceFrom, setPriceFrom] = useState<string>('');
  const [priceTo, setPriceTo] = useState<string>('');
  const [sort, setSort] = useState<ShopSortValue>('popular');

  const toggleGenre = (genre: Genre) => {
    setPage(1)
    setSelectedGenres(prev => {
      const next = new Set(prev);
      if (next.has(genre)) {
        next.delete(genre);
      } else {
        next.add(genre);
      }
      return next;
    });
  };
  const selectPrice = (value: string) => {
    setPage(1)
    setSelectedPrice(prev => (prev === value ? "any-price" : value))
    setPriceFrom('')
    setPriceTo('')
  }
  const selectDiscount = (value: string) => {
    setPage(1)
    setSelectedDiscount(prev => (prev === value ? "all-games" : value))
  }
  const changePriceFrom = (value: string) => {
    setPage(1)
    setPriceFrom(value)
    setSelectedPrice('any-price')
  }
  const changePriceTo = (value: string) => {
    setPage(1)
    setPriceTo(value)
    setSelectedPrice('any-price')
  }
  const changeSort = (value: ShopSortValue) => {
    setPage(1)
    setSort(value)
  }

  return (
    <>
      <main className='shop'>
        <ShopSidebar
          onToggleGenre={toggleGenre}
          selectedGenres={selectedGenres}
          onSelectPrice={selectPrice}
          selectedPrice={selectedPrice}
          onSelectDiscount={selectDiscount}
          selectedDiscount={selectedDiscount}
          priceFrom={priceFrom}
          priceTo={priceTo}
          onChangePriceFrom={changePriceFrom}
          onChangePriceTo={changePriceTo}
          sort={sort}
          onChangeSort={changeSort}
        />
        <div className="shop__content">
          <ShopCatalog
            page={page}
            setPage={setPage}
            selectedGenres={selectedGenres}
            selectedPrice={selectedPrice}
            selectedDiscount={selectedDiscount}
            priceFrom={priceFrom}
            priceTo={priceTo}
            sort={sort}
            onChangeSort={changeSort}
          />
        </div>
      </main>
      <div className="shop__full-width">
        <PromoSale />
      </div>
    </>
  );
}

export default Shop