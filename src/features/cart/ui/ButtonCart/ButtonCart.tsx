import classNames from "classnames";
import {useCartStore} from "@/features/cart/model/useCartStore.ts";
import {useLibraryStore} from "@/features/library/model/useLibraryStore.ts";
import Button from "@/shared/ui/Button";
import './ButtonCart.scss'

interface ButtonCartProps {
  className?: string,
  gameId: number,
}

const ButtonCart = (props: ButtonCartProps) => {
  const {
    className,
    gameId,
  } = props

  const isInCart = useCartStore((state) => state.ids.includes(gameId))
  const toggleCart = useCartStore((state) => state.toggle)
  const isOwned = useLibraryStore((state) => state.ids.includes(gameId))

  return (
    <Button
      className={classNames(className, 'button-cart', {
        'button-cart--active': isInCart,
        'button-cart--owned': isOwned,
      })}
      label={isOwned ? 'In library' : isInCart ? 'Remove from cart' : 'Add to cart'}
      disabled={isOwned}
      mode="transparent"
      isLabelHidden
      iconName="basketShop"
      iconPosition="before"
      onClick={() => toggleCart(gameId)}
    />
  )
}

export default ButtonCart