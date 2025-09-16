import * as React from "react";
import { Button } from "@/components/ui/button";

type TagChipProps = {
    label: string;
    onClick: (label: string) => void;
};

export default React.memo(function TagChip({ label, onClick }: TagChipProps) {
    return (
        <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => onClick(label)}
            className="rounded-lg bg-gray-800 text-white font-light hover:bg-gray-700 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-white/60"
        >
            {label}
        </Button>
    );
});
