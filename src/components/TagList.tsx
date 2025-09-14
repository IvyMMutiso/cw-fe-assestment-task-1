import TagChip from "@/components/TagChip.tsx";

export default function TagList({ title, tags }) {
    return (
        <div className="mt-8 px-6 max-w-5xl mx-auto">
            <div className="text-white text-lg font-semibold mb-4">{title}</div>
            <div className="flex flex-wrap gap-3">
                {tags.map((tag: string) => (
                    <TagChip tag={tag}></TagChip>
                ))}
            </div>
        </div>
    );
}
