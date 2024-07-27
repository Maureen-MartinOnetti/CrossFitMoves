"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher..."
        className="p-2 rounded-l-lg border border-white  focus:outline-none"
      />
      <button
        type="submit"
        className="p-2 bg-[#272628] text-white rounded-r-lg border border-solid border-white hover:bg-white/10"
      >
        Rechercher
      </button>
    </form>
  );
};

export default SearchBar;
