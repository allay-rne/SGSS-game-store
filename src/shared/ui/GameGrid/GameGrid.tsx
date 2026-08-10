import type {ReactNode} from "react";
import classNames from 'classnames'
import type {WithId} from "@/shared/types/entity.ts";
import './GameGrid.scss'

interface GameGridProps<T extends WithId> {
  className?: string,
  games: T[],
  renderItem: (item: T) => ReactNode
}

const GameGrid = <T extends WithId>(props: GameGridProps<T>) => {
  const {
    className,
    games,
    renderItem,
  } = props

  return (
    <section
      className={classNames(className, 'game-grid')}
    >
      <div className="game-grid__inner">
        {games.map((game) => (
          <div key={game.id}>
            {renderItem(game)}
          </div>
        ))}
      </div>
    </section>
  )
}

export default GameGrid