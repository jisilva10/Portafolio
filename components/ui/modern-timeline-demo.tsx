"use client"

import React from "react"
import { Timeline, TimelineItem } from "@/components/ui/modern-timeline"

const timelineItems: TimelineItem[] = [
    {
        title: "Fundación de la Empresa",
        description: "Comenzamos nuestro viaje con una idea simple: revolucionar la colaboración en equipos. Fundada con la visión de construir la plataforma de productividad definitiva.",
        date: "2024-01-15",
        category: "Fundación",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        status: "completed"
    },
    {
        title: "Lanzamiento MVP",
        description: "Lanzamos exitosamente nuestro producto mínimo viable tras 6 meses de desarrollo. Conseguimos nuestros primeros 100 clientes con un 95% de satisfacción.",
        date: "2024-03-20",
        category: "Producto",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        status: "completed"
    },
    {
        title: "Ronda de Inversión Serie A",
        description: "Recaudamos $5M en fondos Serie A. Este hito nos permite escalar nuestro equipo, mejorar el producto y expandirnos a nuevos mercados globalmente.",
        date: "2024-06-10",
        category: "Inversión",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        status: "completed"
    },
    {
        title: "Expansión Global del Equipo",
        description: "El equipo creció a 50+ individuos talentosos en 12 países. Formamos equipos de ingeniería, diseño y ventas para apoyar nuestro crecimiento.",
        date: "2024-09-15",
        category: "Equipo",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        status: "completed"
    },
    {
        title: "Lanzamiento Plataforma Enterprise",
        description: "Lanzamiento de nuestra plataforma empresarial con seguridad avanzada e integración SSO. Actualmente en beta con 25+ compañías Fortune 500.",
        date: "2024-12-01",
        category: "Producto",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        status: "current"
    },
    {
        title: "Integración de IA",
        description: "Implementando funciones de IA de vanguardia, incluyendo automatización inteligente y análisis predictivo para ayudar a los equipos a trabajar mejor.",
        date: "2025-03-01",
        category: "Innovación",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        status: "upcoming"
    },
    {
        title: "Expansión de Mercado Internacional",
        description: "Expandiendo operaciones a mercados europeos y asiáticos con productos localizados y equipos de soporte dedicados.",
        date: "2025-06-01",
        category: "Crecimiento",
        image: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
        status: "upcoming"
    }
]

export default function TimelineDemo() {
    return (
        <div className="min-h-screen bg-background w-full h-full overflow-y-auto">
            <header className="text-center py-16 px-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                    Nuestra Trayectoria
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Desde una idea simple hasta una plataforma global.
                    Sigue nuestra historia de innovación, crecimiento y las personas increíbles que lo hicieron posible.
                </p>
            </header>

            <main>
                <Timeline items={timelineItems} />
            </main>

            <footer className="text-center py-12 px-6 border-t bg-muted/20">
                <p className="text-muted-foreground">
                    ¿Listo para ser parte de nuestro próximo capítulo? <span className="text-primary font-medium">Únete a nuestro equipo</span>
                </p>
            </footer>
        </div>
    )
}
