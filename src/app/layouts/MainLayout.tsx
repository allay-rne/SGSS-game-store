import {Outlet} from "react-router-dom";
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import './MainLayout.scss'

const MainLayout = () => {

  return (
    <>
      <Header />
      <div className="main-layout__content">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout