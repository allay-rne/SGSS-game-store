import MainSidebar from "@/widgets/MainSidebar";
import TrustBadges from "@/widgets/TrustBadges";
import WishlistCatalog from "@/widgets/WishlistCatalog";
import './Wishlist.scss'

const Wishlist = () => {

  return (
    <>
    <div
      className='wishlist'
    >
      <MainSidebar />
      <div className="wishlist__content">
        <WishlistCatalog />
      </div>
    </div>
      <div className="wishlist__full-width">
        <TrustBadges />
      </div>
    </>
  )
}

export default Wishlist