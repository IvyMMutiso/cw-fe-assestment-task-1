import TagChip from "@/components/TagChip.tsx";
import * as React from "react";

type TagListProps = {
    title: string;
    tags: string[];
    onTagClick?: (tag: string) => void;
};

export default React.memo(function TagList({title, tags, onTagClick }: TagListProps) {
    // const handleClick = React.useCallback(
    //     (tag: string) => () => onTagClick?.(tag),
    //     [onTagClick]
    // );

    const titleId = React.useId();

    return (
        <section className="mt-8 px-6 max-w-5xl mx-auto" aria-labelledby={titleId}>
            <h2 className="text-white text-lg font-semibold mb-4" id={titleId}>{title}</h2>
            <ul className="flex flex-wrap gap-3" role="list">
                {tags.map((tag: string) => (
                    <li key={tag}>
                        <TagChip label={tag} onClick={onTagClick}></TagChip>
                        {/*<Badge asChild className="bg-gray-800 text-white hover:bg-gray-700">*/}
                        {/*    <button*/}
                        {/*        type="button"*/}
                        {/*        onClick={handleClick(tag)}*/}
                        {/*        className="px-3 py-1 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-white/60"*/}
                        {/*        aria-label={`Filter by ${tag}`}*/}
                        {/*    >*/}
                        {/*        {tag}*/}
                        {/*    </button>*/}
                        {/*</Badge>*/}
                    </li>
                ))}
            </ul>
        </section>
    );
});
