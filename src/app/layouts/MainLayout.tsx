import {useEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";
import classNames from "classnames";
import {useSidebarStore} from "@/features/sidebar/model/useSidebarStore.ts";
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import './MainLayout.scss'


const MainLayout = () => {

  const isOpen = useSidebarStore((state) => state.isOpen)
  const close = useSidebarStore((state) => state.close)
  const {pathname} = useLocation()

  useEffect(() => {
    close()
  }, [pathname, close])

  return (
    <>
      <Header />
      <div className="main-layout__content">
        <div
          className={classNames('main-layout__overlay', {'main-layout__overlay--visible': isOpen})}
          onClick={close}
        />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout