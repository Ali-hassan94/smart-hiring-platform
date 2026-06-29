"use client";

import { useSearchStore } from "@/store/searchStore";

export default function SearchButton() {
  const { setOpen } =
    useSearchStore();

  return (
    <button
      onClick={() =>
        setOpen(true)
      }
      className="
      px-4
      py-2
      rounded-xl
      border
      border-white/10
      "
    >
      Search
      <span className="ml-3">
        Ctrl + K
      </span>
    </button>
  );
}