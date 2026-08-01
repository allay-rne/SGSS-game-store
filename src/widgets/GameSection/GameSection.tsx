import type {ReactNode} from "react";
import classNames from 'classnames'
import type {WithId} from "@/shared/types/entity.ts";
import './GameSection.scss'
import Button from "@/shared/ui/Button";

interface GameSectionProps<T extends WithId> {
  className?: string;
  title: string;
  games: T[];
  renderItem: (item: T) => ReactNode;
}

const GameSection = <T extends WithId>(props: GameSectionProps<T>) => {
  const {
    className,
    title,
    games,
    renderItem,
  } = props

  return (
    <section
      className={classNames(className, 'game-section')}
    >
      <div className="game-section__inner">
        <div className="game-section__header">
        <h2 className="game-section__title">{title}</h2>
        <Button
          label="Show all"
          mode="transparent"
          iconName="arrowRight"
          iconPosition="after"
          href="/shop"
        />
        </div>
        <div className="game-section__list">
          {games.map((game) => (
            <div
              className="game-section__item"
              key={game.id}
            >
              {renderItem(game)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameSection