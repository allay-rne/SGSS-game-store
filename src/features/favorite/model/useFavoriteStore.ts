import {create} from 'zustand';

interface FavoriteStore {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favoriteIds: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favoriteIds: state.favoriteIds.includes(id)
        ? state.favoriteIds.filter((favId) => favId !== id)
        : [...state.favoriteIds, id],
    })),
}));