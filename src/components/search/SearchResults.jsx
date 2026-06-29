"use client";

import SearchItem from "./SearchItem";

export default function SearchResults({
  results,
}) {
  return (
    <div className="space-y-3">
      {results.map((item) => (
        <SearchItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}