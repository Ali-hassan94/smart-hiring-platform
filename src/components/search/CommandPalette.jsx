"use client";

import {
  useEffect,
  useState,
} from "react";

import { searchData } from "@/data/searchData";

import SearchResults from "./SearchResults";

import { useSearchStore } from "@/store/searchStore";

export default function CommandPalette() {
  const { open, setOpen } =
    useSearchStore();

  const [query, setQuery] =
    useState("");

  useEffect(() => {
    const handleKey = (e) => {
      if (
        e.ctrlKey &&
        e.key === "k"
      ) {
        e.preventDefault();
        setOpen(true);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, []);

  const results =
    searchData.filter((item) =>
      item.title
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
    );

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-xl
      flex
      justify-center
      pt-32
      z-[9999]
      "
    >
      <div
        className="
        w-full
        max-w-3xl
        rounded-3xl
        border
        border-white/10
        bg-black
        p-8
        "
      >
        <input
          autoFocus
          value={query}
          onChange={(e) =>
            setQuery(
              e.target.value
            )
          }
          placeholder="Search jobs, recruiters, candidates..."
          className="
          w-full
          p-5
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />

        <div className="mt-8">
          <SearchResults
            results={results}
          />
        </div>
      </div>
    </div>
  );
}