import { useState } from "react";
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import TagList from "@/components/TagList.tsx";
import * as React from "react";

export default function App() {
  const defaultTags = [
      "NFT",
      "Metaverse",
      "Sustainable",
      "Sonder",
      "FOMO",
      "Ghosting",
  ];

    const [tags, setTags] = useState(defaultTags);

  const [query, setQuery] = useState("");

  const handleSearch = (q: string) => {
    setQuery(q.trim());
    console.log("Search:", q);

    const filteredTags= [...defaultTags].filter(tag => tag.toLowerCase().includes(q.toLowerCase()));
    setTags(filteredTags);
  };

  const onTagClick = React.useCallback((t: string) => {
    console.log("tag:", t);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header onSearch={handleSearch} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only px-3 py-2 focus:`top-2 focus:left-2"
      >
        Skip to content
      </a>

      <main id="main">
        <Hero onSearch={handleSearch} />
        <TagList title="Trending" tags={tags} onTagClick={onTagClick} />
        <TagList title="For you" tags={tags} onTagClick={onTagClick} />
      </main>
    </div>
  );
}
