import MainLayout from "@/app/layouts/MainLayout.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Library from "@/pages/Library";
import Wishlist from "@/pages/Wishlist";
import Profile from "@/pages/Profile";
import Cart from "@/pages/Cart";

function App() {

  return (
    <Routes>
  <Route element={<MainLayout/>}>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/library" element={<Library />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/cart" element={<Cart />} />
  </Route>
    </Routes>
  )
}

export default App
