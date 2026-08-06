import ShopSidebar from "@/widgets/ShopSidebar";
import PromoSale from "@/widgets/PromoSale";
import './Shop.scss'
import ShopCatalog from "@/widgets/ShopCatalog";


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