import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type TagChipProps = {
    label: string;
    onClick?: (label: string) => void;
};

export default React.memo(function TagChip({ label, onClick }: TagChipProps) {
    return (
        <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer" key={label}>
            <button
                type="button"
                onClick={() => onClick?.(label)}
                className="px-3 py-1 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-white/60 cursor-pointer"
                aria-label={`Filter by ${label}`}
            >
                {label}
            </button>
        </Badge>
    );
});
