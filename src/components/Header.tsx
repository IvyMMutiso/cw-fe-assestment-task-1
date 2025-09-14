import {useId} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

export default function Header({onSearch}: {onSearch: (q: string) => void }) {
    const id = useId();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const q = String(data.get("q") ?? "");
        onSearch(q);
    }

    return (
        <header className="bg-black border-b border-gray-500">
            <a href="#main" className="sr-only focus:not-sr-only px-3 py-2">
                Skip to content
            </a>

            <nav className="mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <img src="/task1/logo.png" alt="Wortionary" className="h-6 w-auto" />
                    <div className="text-white font-semibold text-lg">Wortionary</div>
                </div>

                <div className="flex items-center gap-4">
                    <form role="search" aria-label="Search words" onSubmit={handleSubmit} className="flex items-center">
                        <label htmlFor={id} className="sr-only">Search words</label>
                        <div className="relative">
                            <Search aria-hidden="true" className="text-gray-400 text-sm absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 " />
                            <Input id={id} name="q" placeholder="Search…" className="pl-9 bg-gray-800 text-white border-none focus:ring-0" />
                        </div>
                    </form>


                    <Avatar style={{ width: "32px", height: "32px" }}>
                        <AvatarImage src="/avatar.jpg" />
                        <AvatarFallback>U</AvatarFallback>
                     </Avatar>
                </div>
            </nav>
        </header>
    );
}
