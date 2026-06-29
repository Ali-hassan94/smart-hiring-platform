import { create } from "zustand";

export const useModalStore =
  create((set) => ({
    open: false,

    setOpen: (value) =>
      set({
        open: value,
      }),
  }));