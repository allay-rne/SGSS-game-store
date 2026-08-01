import classNames from 'classnames'
import './GameCard.scss'

interface GameCardProps {
  className?: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
}

const GameCard = (props:GameCardProps) => {
  const {
    className,
    title,
    price,
    oldPrice,
    image,
  } = props

  return (
    <div
      className={classNames(className, 'game-card')}
    >
      <div className="game-card__inner">
        <div className="game-card__img">
          <img
            className="game-card__img-game"
            src={image}
            alt={title}
          />
        </div>
        <h2 className="game-card__title">{title}</h2>
        <footer className="game-card__footer">
          <div className="game-card__price">
            <p className="game-card__price-new">{`${price}$`}</p>
            {oldPrice && (<p className="game-card__price-old">{`${oldPrice}$`}</p>)}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default GameCard