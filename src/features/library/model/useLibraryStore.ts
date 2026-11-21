import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface LibraryState {
  ids: number[],
  add: (ids: number[]) => void,
}

export const useLibraryStore = create<LibraryState>()(
  persist(
    (set) => ({
      ids: [],
      add: (ids) => set((state) => ({
        ids: [...new Set([...state.ids, ...ids])],
      })),
    }),
    {name: 'library-games'},
  ),
)