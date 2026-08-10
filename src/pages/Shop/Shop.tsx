import ShopSidebar from "@/widgets/ShopSidebar";
import PromoSale from "@/widgets/PromoSale";
import ShopCatalog from "@/widgets/ShopCatalog";
import './Shop.scss'

const Shop = () => {


  return (
    <>
    <main className='shop'>
      <ShopSidebar />
      <div className="shop__content">
        <ShopCatalog />
      </div>
    </main>
      <div className="shop__full-width">
        <PromoSale />
      </div>
    </>
  )
}

export default Shop