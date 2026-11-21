import classNames from "classnames";
import {useCartStore} from "@/features/cart/model/useCartStore.ts";
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

  return (
    <Button
      className={classNames(className, 'button-cart', {'button-cart--active': isInCart})}
      label={isInCart ? 'Remove from cart' : 'Add to cart'}
      mode="transparent"
      isLabelHidden
      iconName="basketShop"
      iconPosition="before"
      onClick={() => toggleCart(gameId)}
    />
  )
}

export default ButtonCart