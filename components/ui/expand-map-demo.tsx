"use client"

import { LocationMap } from "@/components/ui/expand-map"

export default function ExpandMapDemo() {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center p-4 bg-gray-50 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(52,211,153,0.03)_0%,_transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Optional subtle label */}
                <p className="text-neutral-600 text-xs font-medium tracking-[0.2em] uppercase">Ubicación Actual</p>

                <LocationMap location="Quito, Ecuador" coordinates="0.1807° S, 78.4678° W" />
            </div>
        </div>
    )
}
