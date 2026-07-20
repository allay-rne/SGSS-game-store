import {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const useBurger = () => {
  const [isActive, setIsActive] = useState(false)

  const handleCloseMenu = useCallback(() => {
    setIsActive(false)
  }, [])
  const handleToggleMenu = useCallback(() => {
    setIsActive(prev => !prev)
  }, [])

  const {pathname} = useLocation()

  useEffect(() => {
    handleCloseMenu()
  }, [pathname])
  useEffect(() => {
    document.documentElement.classList.toggle('is-lock', isActive)
  }, [isActive]);

  return {
    isActive,
    handleCloseMenu,
    handleToggleMenu,
  }
}

export default useBurger