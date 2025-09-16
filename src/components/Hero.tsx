import SearchBar from "@/components/SearchBar.tsx";

export default function Hero({ onSearch }: { onSearch: (q: string) => void }) {
  return (
    <section
      aria-label="Hero"
      className="relative mx-auto w-full max-w-5xl rounded-xl overflow-hidden mt-8"
    >
      <img
        src="/task1/hero-bg.png"
        className="w-full h-96 object-cover"
        alt="Hero Background"
        role="presentation"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Search for words, phrases and <br className="hidden md:block" />{" "}
          meanings
        </h1>
        <SearchBar initialValue="" onSearch={onSearch} />
      </div>
    </section>
  );
}
