import classNames from 'classnames'
import type {Genre} from "@/entities/game/types/game.ts";
import ButtonFavorite from "@/features/favorite/ui/ButtonFavorite";
import Checkbox from "@/shared/ui/Checkbox";
import './GameCard.scss'


interface GameCardProps {
  className?: string;
  id: number,
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  genres: Genre[];
  layout?: 'grid' | 'list';
  checked?: boolean;
  onToggle?: (id: number) => void;
}

const GameCard = (props: GameCardProps) => {
  const {
    className,
    id,
    title,
    price,
    oldPrice,
    image,
    genres,
    layout = 'grid',
    checked = false,
    onToggle,
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
        {onToggle && <Checkbox
          checked={checked}
          onChange={() => onToggle(id)}
        />}
        <img
          className="game-card__img-game"
          src={image}
          alt={title}
          loading="lazy"
        />
        <div className="game-card__info">
        <h2 className="game-card__title">{title}</h2>
        <div className="game-card__genres">
          {genres.map((genre) => (
            <span key={genre} className="game-card__genre-tag">{genre}</span>
          ))}
        </div>
        </div>
        <div className="game-card__bottom-list">
          <div className="game-card__price-wrap">
            {priceBlock}
          </div>
          <div className="game-card__favorite-list">
            <ButtonFavorite gameId={id} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(className, 'game-card')}>
      <div className="game-card__inner">
        <div className="game-card__img">
          {onToggle &&
            <Checkbox
              className="game-card__checkbox"
              checked={checked}
              onChange={() => onToggle(id)}
            />
          }
          <img
            className="game-card__img-game"
            src={image}
            alt={title}
            loading="lazy"
          />
          <h2 className="game-card__title">{title}</h2>
          <div className="game-card__genres">
            {genres.map((genre) => (
              <span key={genre} className="game-card__genre-tag">{genre}</span>
            ))}
          </div>
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