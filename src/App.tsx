import { useState } from "react";
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import TagList from "@/components/TagList.tsx";


export default function App() {
  const [tags, setTags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
        <main>
          <Hero />
          <TagList title="Trending" tags={tags} />
          <TagList title="For you" tags={tags} />
        </main>
    </main>
  );
}
