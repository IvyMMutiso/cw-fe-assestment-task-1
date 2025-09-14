import TagChip from "@/components/TagChip.tsx";
import * as React from "react";

type TagListProps = {
    title: string;
    tags: string[];
    onTagClick?: (tag: string) => void;
};

export default React.memo(function TagList({title, tags, onTagClick }: TagListProps) {
    const titleId = React.useId();

    return (
        <section className="mt-8 px-6 max-w-5xl mx-auto" aria-labelledby={titleId}>
            <h2 className="text-white text-lg font-semibold mb-4" id={titleId}>{title}</h2>
            <ul className="flex flex-wrap gap-3" role="list">
                {tags.map((tag: string) => (
                    <li key={tag}>
                        <TagChip label={tag} onClick={onTagClick}></TagChip>
                    </li>
                ))}
            </ul>
        </section>
    );
});
