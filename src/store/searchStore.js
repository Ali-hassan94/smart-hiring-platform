import { create } from "zustand";

export const useSearchStore = create(
  (set) => ({
    open: false,

    setOpen: (value) =>
      set({
        open: value,
      }),
  })
);