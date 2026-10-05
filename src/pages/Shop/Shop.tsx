import ShopSidebar from "@/widgets/ShopSidebar";
import PromoSale from "@/widgets/PromoSale";
import ShopCatalog from "@/widgets/ShopCatalog";
import './Shop.scss'
import useShopFilters from "@/pages/Shop/model/useShopFilters.ts";


const Shop = () => {

 const
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
   } = useShopFilters()

  return (
    <>
      <main className='shop'>
        <ShopSidebar
          search={search}
          onChangeSearch={changeSearch}
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
          onReset={resetAll}
        />
        <div className="shop__content">
          <ShopCatalog
            page={page}
            setPage={setPage}
            search={search}
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