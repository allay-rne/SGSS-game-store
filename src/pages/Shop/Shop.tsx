import {useState} from "react";
import type {Genre} from "@/entities/game/types/game.ts";
import ShopSidebar from "@/widgets/ShopSidebar";
import PromoSale from "@/widgets/PromoSale";
import ShopCatalog from "@/widgets/ShopCatalog";
import './Shop.scss'

const Shop = () => {

  const [page, setPage] = useState(1)
  const [selectedGenres, setSelectedGenres] = useState<Set<Genre>>(new Set());
  const [selectedPrice, setSelectedPrice] = useState<string>('any-price');
  const [selectedDiscount, setSelectedDiscount] = useState<string>('all-games');


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
  }
  const selectDiscount = (value: string) => {
    setPage(1)
    setSelectedDiscount(prev => (prev === value ? "all-games" : value))
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
        />
        <div className="shop__content">
          <ShopCatalog
            page={page}
            setPage={setPage}
            selectedGenres={selectedGenres}
            selectedPrice={selectedPrice}
            selectedDiscount={selectedDiscount}
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