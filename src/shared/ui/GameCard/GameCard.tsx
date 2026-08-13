import classNames from 'classnames'
import ButtonFavorite from "@/features/favorite/ui/ButtonFavorite";
import './GameCard.scss'

interface GameCardProps {
  className?: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  layout?: 'grid' | 'list';
  id: number,
}

const GameCard = (props: GameCardProps) => {
  const {
    className,
    title,
    price,
    oldPrice,
    image,
    layout = 'grid',
    id,
  } = props

  const priceBlock = (
    <div className="game-card__price">
      <p className="game-card__price-new">{`${price}$`}</p>
      {oldPrice && (<p className="game-card__price-old">{`${oldPrice}$`}</p>)}
    </div>
  )

  if (layout === 'list') {
    return (
      <div className={classNames(className, 'game-card', 'game-card--list')}>
        <img
          className="game-card__img-game"
          src={image}
          alt={title}
          loading="lazy"
        />
        <h2 className="game-card__title">{title}</h2>
        <div className="game-card__price-wrap">
          {priceBlock}
        </div>
        <div className="game-card__favorite-list">
          <ButtonFavorite gameId={id} />
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(className, 'game-card')}>
      <div className="game-card__inner">
        <div className="game-card__img">
          <img
            className="game-card__img-game"
            src={image}
            alt={title}
            loading="lazy"
          />
          <h2 className="game-card__title">{title}</h2>
          <div className="game-card__price-wrap">
            {priceBlock}
          </div>
          <div className="game-card__favorite">
            <ButtonFavorite gameId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard