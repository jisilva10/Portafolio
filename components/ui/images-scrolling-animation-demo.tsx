"use client";
import React from "react";
import { ImagesScrollingAnimation } from "@/components/ui/images-scrolling-animation";

export default function HeroScrollDemo({ scrollContainerRef }: { scrollContainerRef?: React.RefObject<HTMLDivElement> }) {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-black">
            <ImagesScrollingAnimation scrollContainerRef={scrollContainerRef} />
        </div>
    );
}
