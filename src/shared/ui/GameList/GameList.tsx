import type {ReactNode} from "react";
import classNames from 'classnames'
import type {WithId} from "@/shared/types/entity.ts";
import './GameList.scss'

interface GameListProps<T extends WithId> {
  className?: string,
  games: T[],
  renderItem: (item: T) => ReactNode
}

const GameList = <T extends WithId>(props: GameListProps<T>) => {
  const {
    className,
    games,
    renderItem,
  } = props

  return (
    <section
      className={classNames(className, 'game-list')}
    >
      <div className="game-list__inner">
        {games.map((game) => (
          <div key={game.id}>
            {renderItem(game)}
          </div>
        ))}
      </div>
    </section>
  )
}

export default GameList