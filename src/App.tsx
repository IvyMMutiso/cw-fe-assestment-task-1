import { useState } from "react";
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import TagList from "@/components/TagList.tsx";
import * as React from "react";

export default function App() {
  const [tags, setTags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

    const [query, setQuery] = useState("");

    const handleSearch = React.useCallback((q: string) => {
        setQuery(q.trim());
        console.log("Search:", q);
    }, []);

    const onTagClick = React.useCallback((t: string) => {
        console.log("tag:", t);
    }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header onSearch={handleSearch} />
        <main id="main">
          <Hero onSearch={handleSearch} />
          <TagList title="Trending" tags={tags} onTagClick={onTagClick} />
          <TagList title="For you" tags={tags} onTagClick={onTagClick} />
        </main>
    </div>
  );
}
