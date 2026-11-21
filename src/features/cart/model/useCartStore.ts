import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface CartState {
  ids: number[],
  toggle: (id: number) => void,
  remove: (id: number) => void,
  clear: () => void,
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      ids: [],
      toggle: (id) => set((state) => ({
        ids: state.ids.includes(id)
          ? state.ids.filter((item) => item !== id)
          : [...state.ids, id],
      })),
      remove: (id) => set((state) => ({ids: state.ids.filter((item) => item !== id)})),
      clear: () => set({ids: []}),
    }),
    {name: 'cart-games'},
  ),
)