import {useId} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

export default function Header({onSearch}: {onSearch: (q: string) => void }) {
    const id = useId();
    const idMobile = useId();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const q = String(data.get("q") ?? "");
        onSearch(q);
    }

    return (
        <header className="bg-black border-b border-gray-400">
            <a href="#main" className="sr-only focus:not-sr-only px-3 py-2">
                Skip to content
            </a>

            <div className="w-full px-4 sm:px-6 py-3">
                <div className="flex flex-col gap-3">
                    {/* Row 1: logo and avatar for mobile, logo, search and avatar for desktop */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src="/task1/logo.png" alt="Wortionary" className="w-5 h-5" />
                            <span className="text-gray-200 font-semibold text-lg">Wortionary</span>
                        </div>

                         {/*Desktop inline search (hidden on mobile)*/}
                        <div className="flex items-center gap-4">
                            <form
                                role="search"
                                aria-label="Quick search"
                                className="hidden sm:flex items-center bg-gray-800 rounded-lg pl-8 pr-2 h-10 relative"
                                onSubmit={handleSubmit}
                            >
                                <Search
                                    aria-hidden="true"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                                />
                                <label htmlFor={id} className="sr-only">
                                    Quick search
                                </label>
                                <Input
                                    id={id}
                                    name="q"
                                    placeholder="Search"
                                    className="bg-transparent border-none text-gray-200 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 w-36"
                                />
                            </form>

                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/avatar.jpg" alt="Profile" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* Row 2: full-width search (mobile only) */}
                    <form
                        role="search"
                        aria-label="Mobile search"
                        onSubmit={handleSubmit}
                        className="sm:hidden flex items-center bg-gray-800 rounded-lg px-4 h-11 relative"
                    >
                        <Search
                            aria-hidden="true"
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                        />
                        <label htmlFor={idMobile} className="sr-only">Search</label>
                        <Input
                            id={idMobile}
                            name="q"
                            placeholder="Search"
                            className="pl-6 bg-transparent border-none text-gray-200 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </form>
                </div>
            </div>
        </header>
    );
}
