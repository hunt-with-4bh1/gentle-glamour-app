import { create } from "zustand";

interface WishlistStore {
  ids: string[];
  toggle: (id: string) => void;
  isWishlisted: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  ids: [],
  toggle: (id) =>
    set((state) => ({
      ids: state.ids.includes(id) ? state.ids.filter((i) => i !== id) : [...state.ids, id],
    })),
  isWishlisted: (id) => get().ids.includes(id),
}));
