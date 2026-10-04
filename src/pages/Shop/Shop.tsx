import {useState} from "react";
import type {Genre} from "@/entities/game/types/game.ts";
import ShopSidebar from "@/widgets/ShopSidebar";
import PromoSale from "@/widgets/PromoSale";
import ShopCatalog from "@/widgets/ShopCatalog";
import './Shop.scss'

const Shop = () => {

  const [selectedGenres, setSelectedGenres] = useState<Set<Genre>>(new Set());

  const toggleGenre = (genre: Genre) => {
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

  return (
    <>
      <main className='shop'>
        <ShopSidebar
          onToggle={toggleGenre}
          selectedGenres={selectedGenres}

        />
        <div className="shop__content">
          <ShopCatalog />
        </div>
      </main>
      <div className="shop__full-width">
        <PromoSale />
      </div>
    </>
  );
}

export default Shop