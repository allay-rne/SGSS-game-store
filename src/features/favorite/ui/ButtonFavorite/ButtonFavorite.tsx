import './ButtonFavorite.scss'
import {useFavoriteStore} from "@/features/favorite/model/useFavoriteStore.ts";
import Button from "@/shared/ui/Button";
import classNames from "classnames";

interface ButtonFavoriteProps {
  className?: string,
  gameId: number,
}

const ButtonFavorite = (props: ButtonFavoriteProps) => {
  const {
    className,
    gameId,
  } = props

  const isFavorite = useFavoriteStore((state) => state.favoriteIds.includes(gameId));
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  return (
    <Button
      className={classNames(className, 'button-favorite')}
      label='Favorite'
      mode="transparent"
      isLabelHidden
      iconName={isFavorite ? 'heartFilled' : 'heart'}
      iconPosition="after"
      onClick={()=> toggleFavorite(gameId)}
    />
  )
}

export default ButtonFavorite