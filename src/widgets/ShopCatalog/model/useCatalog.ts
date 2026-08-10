import {useState} from "react";
import type {Game} from "@/entities/game/types/game.ts";

const useCatalog = (games: Game[]) => {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [page, setPage] = useState(1)


  const itemsPerPage = 6
  const totalPages = Math.ceil(games.length / itemsPerPage)
  const start = (page - 1) * itemsPerPage
  const paginatedGames = games.slice(start, start + itemsPerPage)

  const goToNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }

  return (
    {
      view,
      setView,
      page,
      setPage,
      paginatedGames,
      totalPages,
      goToNextPage,
      goToPrevPage,
    }
  )
}

export default useCatalog