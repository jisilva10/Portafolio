"use client";

import React, { useState } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SectionGrid } from "@/components/blocks/SectionGrid";
import { portfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function HomePage() {
    const [activeSection, setActiveSection] = useState("inicio");

    const navItems = [
        { id: "inicio", label: "Inicio" },
        { id: "ui", label: "Elementos UI" },
        { id: "contacto", label: "Contacto" },
        { id: "tipografias", label: "Tipografias" },
        { id: "tresd", label: "3D" },
        { id: "extras", label: "Extras" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black font-sans text-stone-900 dark:text-stone-100 selection:bg-stone-200 dark:selection:bg-stone-800">

            {/* Background Pattern */}
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-50",
                )}
            />

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 bg-white/50 dark:bg-black/50 backdrop-blur-md border-b border-black/5 dark:border-white/5">
                <div className="flex gap-2 sm:gap-6 px-4 overflow-x-auto max-w-full no-scrollbar">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-black dark:hover:text-white px-3 py-1 rounded-full whitespace-nowrap",
                                activeSection === item.id
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : "text-stone-500 dark:text-stone-400"
                            )}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 pb-20 px-4 sm:px-8">

                {/* Inicio / Header Section */}
                <section id="inicio" className="max-w-6xl mx-auto mb-24 pt-12">
                    <h1 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-8 pl-4">Portafolio Web by Jose Silva</h1>

                    <div>
                        <SectionGrid title="Explorar Inicio" id="inicio-grid" items={portfolioData.inicio} />
                    </div>

                </section>

                {/* Global Sections */}
                <div className="space-y-24">
                    <SectionGrid title="Elementos UI" id="ui" items={portfolioData.ui} />
                    <SectionGrid title="Contacto" id="contacto" items={portfolioData.contacto} />
                    <SectionGrid title="Tipografias" id="tipografias" items={portfolioData.tipografias} />
                    <SectionGrid title="3D" id="tresd" items={portfolioData.tresd} />
                    <SectionGrid title="Extras" id="extras" items={portfolioData.extras} />
                </div>

            </main>

            {/* Footer */}
            <footer className="text-center py-12 text-stone-400 text-sm border-t border-black/5 dark:border-white/5">
                <p>© 2024 Portafolio Web by Jose Silva. All rights reserved.</p>
            </footer>

        </div>
    );
}
