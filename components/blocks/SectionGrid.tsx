"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardItem {
    id: string; // Unique ID for layoutId
    title: string;
    imageSrc: string;
    category?: string;
    description?: string; // Content for the popup
    component?: React.ReactNode; // Optional component to render
    preview?: React.ReactNode; // Optional preview to render in the card
    disableLayoutAnimation?: boolean; // Optional flag to disable layout animation for problematic components
}

interface SectionGridProps {
    title: string;
    id: string; // ID for anchor navigation
    items: CardItem[];
}

export function SectionGrid({ title, id, items }: SectionGridProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [previewVersion, setPreviewVersion] = useState(0);
    const [, forceUpdate] = useState(0);

    const handleClose = () => {
        setSelectedId(null);
        setTimeout(() => setPreviewVersion(v => v + 1), 300);
    };

    // Callback to capture node and update the stable ref
    const setModalRef = React.useCallback((node: HTMLDivElement | null) => {
        if (node) {
            // Cast to mutable to assign to readonly current property
            (modalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            forceUpdate(n => n + 1);
        }
    }, []);

    return (
        <section id={id} className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-8 text-left">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {items.map((card) => (
                    <motion.div
                        layoutId={card.disableLayoutAnimation ? undefined : card.id}
                        key={`${card.id}-${previewVersion}`}
                        onClick={() => setSelectedId(card.id)}
                        className="relative group rounded-xl overflow-hidden cursor-pointer"
                    >
                        <div className="w-full h-[300px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                            {/* Render preview if available, otherwise fallback to image */}
                            {card.preview ? (
                                <div className="w-full h-full group-hover:scale-110 duration-300 transition-all">
                                    {card.preview}
                                </div>
                            ) : (
                                <img
                                    src={card.imageSrc}
                                    alt={card.title}
                                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 duration-300 transition-all"
                                />
                            )}
                        </div>

                        <div className="absolute left-0 right-0 top-0 m-4 flex h-[30px] w-[30px] items-center justify-start gap-1 overflow-hidden rounded-full bg-[rgba(51,51,51,0.8)] transition-all duration-300 group-hover:w-[72px]">
                            {/* Placeholder Icon */}
                            <div className="w-[30px] h-[30px] flex items-center justify-center flex-shrink-0 text-white">
                                ▶
                            </div>
                            <span className="text-[rgba(255,255,255,0.8)] text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity delay-100">View</span>
                        </div>

                        <p className="text-center mt-2 font-medium pb-4">{card.title}</p>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleClose}>
                        {items.filter(item => item.id === selectedId).map(item => (
                            <motion.div
                                key={item.id}
                                className={cn(
                                    "w-full rounded-2xl overflow-hidden shadow-2xl relative bg-white dark:bg-[#1a1a1a] max-h-[90vh] overflow-y-auto flex flex-col",
                                    item.component ? "max-w-6xl h-full" : "max-w-2xl"
                                )}
                                onClick={(e) => e.stopPropagation()}
                                ref={setModalRef}
                            >
                                {/* Close button always visible */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                {item.component ? (
                                    <div className="w-full flex-1 relative flex flex-col min-h-[500px]">
                                        {/* Inject scrollContainerRef if the component renders something that can accept it */}
                                        {React.isValidElement(item.component)
                                            ? React.cloneElement(item.component as React.ReactElement<any>, {
                                                scrollContainerRef: modalRef
                                            })
                                            : item.component
                                        }
                                    </div>
                                ) : (
                                    <>
                                        <div className="relative h-[400px]">
                                            <img
                                                src={item.imageSrc}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="p-8">
                                            <motion.h2 className="text-3xl font-bold mb-2">{item.title}</motion.h2>
                                            <motion.p className="text-gray-500 mb-6">{item.category || "Portfolio Item"}</motion.p>

                                            <motion.div className="prose dark:prose-invert max-w-none">
                                                <p>{item.description || "More details coming soon..."}</p>
                                            </motion.div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
