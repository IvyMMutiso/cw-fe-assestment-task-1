import {type ChangeEvent, type FormEvent, useCallback, useId, useState} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button";

type SearchBarProps = {
    initialValue?: string;
    onSearch: (q: string) => void;
};

export default function SearchBar({ initialValue = "", onSearch }: SearchBarProps) {
    const id = useId();
    const [query, setQuery] = useState<string>(initialValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);

        setTimeout(() => {
            onSearch(e.target.value);
        }, 400)
    }

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onSearch(query.trim());
        },
        [onSearch, query]
    );

    return (
        <form
            className="flex items-center bg-black/80 px-4 py-2 rounded-lg w-full max-w-xl mt-6 shadow-lg"
            role="search"
            aria-label="Search words, phrases and meanings"
            onSubmit={handleSubmit}
        >
            <label htmlFor={id} className="sr-only">
                Search words, phrases and meanings
            </label>
            <Search aria-hidden="true" className="text-gray-400 mr-3" />
            <Input
                id={id}
                name="q"
                value={query}
                onChange={onChange}
                type="text"
                placeholder="Type to search..."
                className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white ml-4">
                Search
            </Button>
        </form>
    );
}


