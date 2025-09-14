import {Badge} from "@/components/ui/badge.tsx";

export default function TagChip({tag}: {tag: string}) {
    return (
        <Badge
            key={tag}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
        >
            {tag}
        </Badge>
    )
}
