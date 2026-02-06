import LiquidMetalHero from "@/components/ui/liquid-metal-hero";
import GlobeScrollDemo from "@/components/ui/landing-page";
import { AnimatedHero } from "@/components/ui/animated-hero";
import HeroSection from "@/components/ui/hero-section-9";
import { HeroSection as HeroSection5 } from "@/components/ui/hero-section-5";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { TestimonialCarousel } from "@/components/ui/testimonial";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, Users, Briefcase, Link as LinkIcon, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import ThreeDOrbitGallery from "@/components/ui/3d-orbit-gallery-demo";
import { ThreeDViewer } from "@/components/ui/3d-card-components";
import Image from "next/image";
import React from "react";
import DemoStackedPhotos from "@/components/ui/3d-card-demo";
import { StackedPhotos } from "@/components/ui/3d-card";
import DemoContactForm from "@/components/ui/contact-form-demo";
import { ContactForm } from "@/components/ui/contact-form";
import QrCodeContact from "@/components/ui/qr-code-demo";
import { BasicQrCode } from "@/components/ui/qr-code-card";
import DemoContactPage from "@/components/ui/contact-page-demo";
import { ContactPage } from "@/components/ui/contact-page";
import DemoCallToAction from "@/components/ui/call-to-action-demo";
import { CallToAction } from "@/components/ui/call-to-action";
import DemoProfessionalConnect from "@/components/ui/get-in-touch-demo";
import { ProfessionalConnect } from "@/components/ui/get-in-touch";
import { BottomNavBar } from "@/components/ui/bottom-nav-bar";
import { Inter, Playfair_Display, Roboto_Mono, Dancing_Script, Abril_Fatface } from 'next/font/google';
import NavbarsDemo from "@/components/ui/navbars-demo";
import ExpandableChatDemo from "@/components/ui/expandable-chat-demo";
import ExpandMapDemo from "@/components/ui/expand-map-demo";
import PricingDemo from "@/components/ui/pricing-demo";
import TimelineDemo from "@/components/ui/modern-timeline-demo";
import HeroScrollDemo from "@/components/ui/images-scrolling-animation-demo";

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ subsets: ['latin'] });
const abrilFatface = Abril_Fatface({ weight: '400', subsets: ['latin'] });

export const portfolioData = {
    inicio: [
        {
            id: 'start-1',
            title: 'Modern Dark Hero',
            imageSrc: 'https://picsum.photos/seed/start1/768/1344',
            category: 'Hero Section',
            description: 'Dark themed hero with infinite slider and video background.',
            preview: (
                <div className="w-full h-full relative pointer-events-none overflow-hidden bg-neutral-950">
                    <div className="scale-[0.2] origin-top-left w-[500%] h-[500%]">
                        <HeroSection5 />
                    </div>
                </div>
            ),
            component: (
                <div className="bg-neutral-950 text-white w-full">
                    <HeroSection5 />
                </div>
            )
        },
        {
            id: 'start-hero-animated',
            title: 'Hero Animado',
            imageSrc: 'https://picsum.photos/seed/start2/768/1344',
            category: 'Hero Section',
            description: 'Texto rotativo dinámico para captar la atención con mensajes clave.',
            preview: (
                <div className="w-full h-full relative pointer-events-none flex items-center justify-center bg-white overflow-hidden text-black">
                    {/* Use the component directly with reduced padding for preview */}
                    <div className="w-[200%] h-full flex items-center justify-center scale-[0.5] origin-center">
                        <AnimatedHero className="py-0 lg:py-0" />
                    </div>
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[600px] flex items-center justify-center bg-white text-black">
                    <AnimatedHero />
                </div>
            )
        },
        {
            id: '3d-1',
            title: 'Scroll Globe',
            imageSrc: 'https://picsum.photos/seed/3d1/768/1344',
            category: '3D Art',
            description: 'Interactive 3D Globe with scroll animations.',
            preview: (
                <div className="w-full h-full relative pointer-events-none overflow-hidden bg-black">
                    <div className="scale-[0.2] origin-top-left w-[500%] h-[500%]">
                        <GlobeScrollDemo />
                    </div>
                </div>
            ),
            component: (
                <div className="bg-white text-black h-[800px] w-full relative">
                    <GlobeScrollDemo />
                </div>
            )
        },
        {
            id: 'start-hero-collage',
            title: 'Hero Collage',
            imageSrc: 'https://picsum.photos/seed/start4/768/1344',
            category: 'Layout',
            description: 'Diseño tipo collage con elementos flotantes y estadísticas.',
            preview: (
                <div className="w-full h-full relative pointer-events-none flex items-center justify-center bg-white overflow-hidden">
                    {/* Simplified preview with just the images part relative to center */}
                    <div className="scale-[0.4] origin-center w-[200%] h-full flex items-center justify-center">
                        <HeroSection
                            title={<span>Plataforma<br />de Aprendizaje</span>}
                            subtitle="Descubre cursos y materiales de tutores expertos."
                            actions={[]}
                            stats={[]}
                            images={[
                                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
                                'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
                                'https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900'
                            ]}
                            className="py-0 sm:py-0"
                        />
                    </div>
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[600px] flex items-center justify-center bg-background">
                    <HeroSection
                        title={
                            <>
                                Nueva forma de <br /> aprender y crecer
                            </>
                        }
                        subtitle="Tu Plataforma está aquí para ti con variados cursos y materiales de tutores calificados de todo el mundo."
                        actions={[
                            {
                                text: 'Unirse a la Clase',
                                onClick: () => console.log('Join clicked'),
                                variant: 'default',
                                className: "bg-black text-white hover:bg-neutral-800"
                            },
                            {
                                text: 'Saber más',
                                onClick: () => console.log('More info clicked'),
                                variant: 'outline',
                                className: "bg-white text-black border-gray-200 hover:bg-gray-100"
                            },
                        ]}
                        stats={[
                            {
                                value: '15.2K',
                                label: 'Estudiantes',
                                icon: <Users className="h-6 w-6 text-gray-700" />,
                            },
                            {
                                value: '4.5K',
                                label: 'Tutores',
                                icon: <Briefcase className="h-6 w-6 text-gray-700" />,
                            },
                            {
                                value: 'Recursos',
                                label: 'Ilimitados',
                                icon: <LinkIcon className="h-6 w-6 text-gray-700" />,
                            },
                        ]}
                        images={[
                            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
                            'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
                            'https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900'
                        ]}
                    />
                </div>
            )
        },
        {
            id: 'start-hero-minimal',
            title: 'Hero Minimalista',
            imageSrc: 'https://picsum.photos/seed/start5/768/1344',
            category: 'Layout',
            description: 'Diseño limpio que prioriza la tipografía y el espacio negativo.',
            preview: (
                <div className="w-full h-full relative pointer-events-none flex items-center justify-center bg-white overflow-hidden">
                    {/* Simplified preview */}
                    <div className="scale-[0.25] origin-center w-[400%] h-full flex items-center justify-center">
                        <MinimalistHero
                            logoText="mnmlst."
                            navLinks={[]}
                            mainText=""
                            readMoreLink="#"
                            imageSrc="https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793"
                            imageAlt="Preview"
                            overlayText={{ part1: 'menos', part2: 'es más.' }}
                            socialLinks={[]}
                            locationText=""
                            className="bg-white h-full"
                        />
                    </div>
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[600px] flex items-center justify-center bg-white text-black">
                    <MinimalistHero
                        logoText="mnmlst."
                        navLinks={[
                            { label: 'INICIO', href: '#' },
                            { label: 'PORTAFOLIO', href: '#' },
                            { label: 'SOBRE MI', href: '#' },
                        ]}
                        mainText="El diseño no es solo lo que se ve y se siente. El diseño es cómo funciona. Simplifica para amplificar."
                        readMoreLink="#"
                        imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
                        imageAlt="Retrato minimalista"
                        overlayText={{
                            part1: 'menos',
                            part2: 'es más.',
                        }}
                        socialLinks={[
                            { icon: Facebook, href: '#' },
                            { icon: Instagram, href: '#' },
                            { icon: Twitter, href: '#' },
                        ]}
                        locationText="Ciudad de México, MX"
                        className="bg-white text-black h-[800px] w-full"
                    />
                </div>
            )
        },
    ],
    ui: [
        {
            id: 'ui-1',
            title: 'Scroll Animation',
            imageSrc: 'https://picsum.photos/seed/ui1/768/1344',
            category: 'Components',
            description: 'Unleash the power of scroll animations.',
            preview: (
                <div className="w-full h-full flex items-center justify-center bg-white dark:bg-black overflow-hidden relative">
                    {/* Simulated Stacked Cards Preview */}
                    <div className="relative w-[200px] h-[150px] scale-90">
                        {/* Card 3 (Back) */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg transform scale-90 -translate-y-8 z-10 overflow-hidden opacity-60">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center"
                                alt="Preview 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Card 2 (Middle) */}
                        <div className="absolute top-4 left-0 w-full h-full bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-xl transform scale-95 -translate-y-4 z-20 overflow-hidden opacity-80">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center"
                                alt="Preview 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Card 1 (Front) */}
                        <div className="absolute top-8 left-0 w-full h-full bg-white dark:bg-gray-600 rounded-2xl shadow-2xl z-30 overflow-hidden border border-gray-100 dark:border-gray-700">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center"
                                alt="Preview 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            ),
            component: (
                <HeroScrollDemo />
            )
        },
        {
            id: 'ui-2',
            title: 'Conócenos/Reseñas',
            imageSrc: 'https://picsum.photos/seed/ui2/768/1344',
            category: 'Feedback',
            description: 'Carrusel arrastrable con física natural (Framer Motion).',
            preview: (
                <div className="w-full h-full flex items-center justify-center bg-gray-50 scale-[0.6] origin-center pointer-events-none">
                    <TestimonialCarousel
                        testimonials={[
                            { id: 1, name: "Ana García", avatar: "https://randomuser.me/api/portraits/women/44.jpg", description: "Excelente trabajo, superó mis expectativas." }
                        ]}
                        className="bg-transparent"
                    />
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-white">
                    <TestimonialCarousel
                        testimonials={[
                            {
                                id: 1,
                                name: "Carlos Méndez",
                                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                                description: "Increíble atención al detalle. El diseño final capturó perfectamente la esencia de nuestra marca."
                            },
                            {
                                id: 2,
                                name: "Sofía López",
                                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                                description: "Profesionalismo puro. La entrega fue rápida y la comunicación fluida durante todo el proyecto."
                            },
                            {
                                id: 3,
                                name: "Miguel Ángel",
                                avatar: "https://randomuser.me/api/portraits/men/85.jpg",
                                description: "Altamente recomendado. Logró transformar nuestra idea vaga en un producto digital sólido."
                            }
                        ]}
                        className="max-w-xl mx-auto"
                    />
                </div>
            )
        },
        {
            id: 'ui-3',
            title: 'Galería Bento Interactiva',
            imageSrc: 'https://picsum.photos/seed/ui3/768/1344',
            category: 'Gallery',
            description: 'Grid tipo Bento interactivo con capacidad de reordenar y visualizar medios.',
            preview: (
                <div className="w-full h-full flex items-center justify-center bg-white dark:bg-black pointer-events-none overflow-hidden">
                    <div className="scale-[0.8] origin-center w-full max-w-2xl px-4">
                        <InteractiveBentoGallery
                            title="Galería"
                            description=""
                            mediaItems={[
                                { id: 1, type: "image", title: "León Blanco", desc: "Descansando en la hierba", url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
                                { id: 2, type: "image", title: "Proyecto B", desc: "Branding", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", span: "md:col-span-1 md:row-span-2" },
                            ]}
                        />
                    </div>
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[1000px] bg-white pt-10">
                    <InteractiveBentoGallery
                        mediaItems={[
                            {
                                id: 1,
                                type: "image",
                                title: "León Blanco",
                                desc: "Descansando en la hierba",
                                url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2070&auto=format&fit=crop",
                                span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
                            },
                            {
                                id: 2,
                                type: "video",
                                title: "Dog Puppy",
                                desc: "Adorable loyal companion.",
                                url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
                                span: "md:col-span-1 md:row-span-1 col-span-1 sm:col-span-1 sm:row-span-1",
                            },
                            {
                                id: 3,
                                type: "image",
                                title: "Forest Path",
                                desc: "Mystical forest trail",
                                url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
                                span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
                            },
                            {
                                id: 4,
                                type: "image",
                                title: "Falling Leaves",
                                desc: "Autumn scenery",
                                url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                                span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1 ",
                            },
                            {
                                id: 5,
                                type: "video",
                                title: "Bird Parrot",
                                desc: "Vibrant feathered charm",
                                url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
                                span: "md:col-span-2 md:row-span-1 sm:col-span-2 sm:row-span-1 ",
                            },
                            {
                                id: 6,
                                type: "image",
                                title: "Beach Paradise",
                                desc: "Sunny tropical beach",
                                url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                                span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1 ",
                            },
                            {
                                id: 7,
                                type: "video",
                                title: "Shiva Temple",
                                desc: "Peaceful Shiva sanctuary.",
                                url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
                                span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
                            },
                        ]}
                        title="Gallery Shots Collection"
                        description="Drag and explore our curated collection of shots"
                    />
                </div>
            )
        },
        {
            id: 'ui-4',
            title: 'Display Cards',
            imageSrc: 'https://picsum.photos/seed/ui4/768/1344',
            category: 'Components',
            description: 'Tarjetas de despliegue con efectos de hover y stack.',
            preview: (
                <div className="w-full h-full flex items-center justify-center bg-gray-50 scale-[0.6] origin-center pointer-events-none overflow-visible">
                    <DisplayCards />
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[600px] flex items-center justify-center bg-gray-50 py-20">
                    <DisplayCards cards={[
                        {
                            icon: <Sparkles className="size-4 text-blue-300" />,
                            title: "Destacado",
                            description: "Contenido increíble",
                            date: "Justo ahora",
                            iconClassName: "text-blue-500",
                            titleClassName: "text-blue-500",
                            className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 bg-white border-gray-200 shadow-sm",
                        },
                        {
                            icon: <Sparkles className="size-4 text-blue-300" />,
                            title: "Popular",
                            description: "Tendencia semanal",
                            date: "Hace 2 días",
                            iconClassName: "text-blue-500",
                            titleClassName: "text-blue-500",
                            className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 bg-white border-gray-200 shadow-sm",
                        },
                        {
                            icon: <Sparkles className="size-4 text-blue-300" />,
                            title: "Nuevo",
                            description: "Últimas novedades",
                            date: "Hoy",
                            iconClassName: "text-blue-500",
                            titleClassName: "text-blue-500",
                            className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 bg-white border-gray-200 shadow-sm",
                        },
                    ]} />
                </div>
            )
        },
        {
            id: 'ui-5',
            title: 'Logo Carousel',
            imageSrc: 'https://picsum.photos/seed/ui5/768/1344',
            category: 'Components',
            description: 'Carrusel de logotipos infinito, suave y sensible.',
            disableLayoutAnimation: true,
            preview: (
                <div className="w-full h-full flex items-center justify-center bg-white dark:bg-black overflow-hidden relative">
                    <div className="scale-[0.5] origin-center w-[150%]">
                        <LogoCarousel columnCount={2} logos={[
                            { name: "Apple", id: 1, img: (props) => <svg viewBox="0 0 384 512" fill="currentColor" {...props}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg> },
                            { name: "Twitter", id: 2, img: (props) => <svg viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg> },
                            { name: "Github", id: 3, img: (props) => <svg viewBox="0 0 496 512" fill="currentColor" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg> },
                            { name: "Instagram", id: 4, img: (props) => <svg viewBox="0 0 448 512" fill="currentColor" {...props}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg> },
                        ]} />
                    </div>
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[600px] flex items-center justify-center bg-white dark:bg-black py-24">
                    <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
                        <div className="text-center">
                            <GradientHeading variant="secondary">
                                Los mejores ya están aquí
                            </GradientHeading>
                            <a href="https://www.newcult.co" target="_blank">
                                <GradientHeading size="xxl">Únete a nosotros</GradientHeading>
                            </a>
                        </div>
                        <LogoCarousel columnCount={3} logos={[
                            { name: "Apple", id: 1, img: (props) => <svg viewBox="0 0 384 512" fill="currentColor" {...props}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg> },
                            { name: "Twitter", id: 2, img: (props) => <svg viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg> },
                            { name: "Facebook", id: 3, img: (props) => <svg viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 121.1 87.1 222.4 201.7 245.5V327.7h-63v-71.7h63V201c0-62.1 37-96 93.3-96 26.9 0 55.6 4.8 55.6 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7v46.5h68.8l-11 71.7h-57.8V501C416.9 478.4 504 377.1 504 256z" /></svg> },
                            { name: "Github", id: 4, img: (props) => <svg viewBox="0 0 496 512" fill="currentColor" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg> },
                            { name: "Google", id: 5, img: (props) => <svg viewBox="0 0 488 512" fill="currentColor" {...props}><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg> },
                            { name: "Instagram", id: 6, img: (props) => <svg viewBox="0 0 448 512" fill="currentColor" {...props}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg> },
                            { name: "Linkedin", id: 7, img: (props) => <svg viewBox="0 0 448 512" fill="currentColor" {...props}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg> },
                        ]} />
                    </div>
                </div>
            )
        },
    ],
    contacto: [
        {
            id: 'contact-1',
            title: 'Formulario de Contacto',
            imageSrc: 'https://picsum.photos/seed/contact1/768/1344',
            category: 'Formularios',
            description: 'Formulario de contacto moderno con detalles.',
            preview: (
                <div className="w-full h-full relative pointer-events-none overflow-hidden bg-white">
                    <div className="scale-[0.5] origin-top w-[200%] h-[200%]">
                        <ContactForm />
                    </div>
                </div>
            ),
            component: (
                <DemoContactForm />
            )
        },
        {
            id: 'contact-2',
            title: 'Código QR',
            imageSrc: 'https://picsum.photos/seed/contact2/768/1344',
            category: 'Conexión',
            description: 'Tarjeta de contacto digital escaneable (vCard).',
            preview: (
                <div className="w-full h-full relative pointer-events-none overflow-hidden bg-white">
                    <div className="scale-[0.7] origin-center w-full h-full flex items-center justify-center">
                        <BasicQrCode value="https://tarkui.com" />
                    </div>
                </div>
            ),
            component: (
                <QrCodeContact />
            )
        },
        {
            id: 'contact-3',
            title: 'Página de Contacto',
            imageSrc: 'https://picsum.photos/seed/contact3/768/1344',
            category: 'Detalles',
            description: 'Información detallada de contacto y enlaces.',
            preview: (
                <div className="w-full h-full relative pointer-events-none overflow-hidden bg-white">
                    <div className="scale-[0.4] origin-top-left w-[250%] h-[250%]">
                        <ContactPage />
                    </div>
                </div>
            ),
            component: (
                <DemoContactPage />
            )
        },
        {
            id: 'contact-4',
            title: 'Únete a la Comunidad',
            imageSrc: 'https://picsum.photos/seed/contact4/768/1344',
            category: 'Comunidad',
            description: 'Llamada a la acción para unirse a WhatsApp.',
            preview: (
                <div className="scale-[0.5] origin-center w-[200%] h-[200%] flex items-center justify-center">
                    <CallToAction />
                </div>
            ),
            component: (
                <DemoCallToAction />
            )
        },
        {
            id: 'contact-5',
            title: 'Conexión Profesional',
            imageSrc: 'https://picsum.photos/seed/contact5/768/1344',
            category: 'Redes',
            description: 'Enlaces sociales con animaciones fluidas.',
            preview: (
                <div className="w-full h-full relative pointer-events-none overflow-hidden bg-slate-950">
                    <div className="scale-[0.3] origin-center w-[333%] h-[333%] flex items-center justify-center">
                        <ProfessionalConnect />
                    </div>
                </div>
            ),
            component: (
                <DemoProfessionalConnect />
            )
        },
    ],
    tipografias: [
        {
            id: 'type-1',
            title: 'Inter',
            imageSrc: 'https://picsum.photos/seed/type1/768/1344',
            category: 'Sans Serif',
            description: 'Simplicidad y Funcionalidad.',
            preview: (
                <div className={`w-full h-full flex items-center justify-center bg-white text-black text-9xl ${inter.className}`}>
                    Aa
                </div>
            ),
            component: (
                <div className={`w-full h-full min-h-[400px] flex items-center justify-center bg-white text-black p-10 text-center ${inter.className}`}>
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">Simplicidad y Funcionalidad</h1>
                        <p className="text-xl text-gray-600">La belleza de lo esencial.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'type-2',
            title: 'Playfair Display',
            imageSrc: 'https://picsum.photos/seed/type2/768/1344',
            category: 'Serif',
            description: 'Elegancia y Sofisticación.',
            preview: (
                <div className={`w-full h-full flex items-center justify-center bg-slate-50 text-slate-900 text-9xl ${playfair.className}`}>
                    Aa
                </div>
            ),
            component: (
                <div className={`w-full h-full min-h-[400px] flex items-center justify-center bg-slate-50 text-slate-900 p-10 text-center ${playfair.className}`}>
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">Elegancia y Sofisticación</h1>
                        <p className="text-xl text-slate-600 italic">Un toque de distinción clásica.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'type-3',
            title: 'Roboto Mono',
            imageSrc: 'https://picsum.photos/seed/type3/768/1344',
            category: 'Monospace',
            description: 'Estructura y Lógica.',
            preview: (
                <div className={`w-full h-full flex items-center justify-center bg-zinc-900 text-green-400 text-8xl ${robotoMono.className}`}>
                    Aa
                </div>
            ),
            component: (
                <div className={`w-full h-full min-h-[400px] flex items-center justify-center bg-zinc-900 text-green-400 p-10 text-center ${robotoMono.className}`}>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">&lt;Estructura /&gt;</h1>
                        <p className="text-lg text-green-600">y_Lógica = true;</p>
                    </div>
                </div>
            )
        },
        {
            id: 'type-4',
            title: 'Dancing Script',
            imageSrc: 'https://picsum.photos/seed/type4/768/1344',
            category: 'Handwriting',
            description: 'Creatividad y Fluidez.',
            preview: (
                <div className={`w-full h-full flex items-center justify-center bg-pink-50 text-pink-600 text-9xl ${dancingScript.className}`}>
                    Aa
                </div>
            ),
            component: (
                <div className={`w-full h-full min-h-[400px] flex items-center justify-center bg-pink-50 text-pink-600 p-10 text-center ${dancingScript.className}`}>
                    <div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-4">Creatividad y Fluidez</h1>
                        <p className="text-2xl text-pink-400">Deja que tus ideas vuelen.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'type-5',
            title: 'Abril Fatface',
            imageSrc: 'https://picsum.photos/seed/type5/768/1344',
            category: 'Display',
            description: 'Impacto y Personalidad.',
            preview: (
                <div className={`w-full h-full flex items-center justify-center bg-amber-400 text-black text-9xl ${abrilFatface.className}`}>
                    Aa
                </div>
            ),
            component: (
                <div className={`w-full h-full min-h-[400px] flex items-center justify-center bg-amber-400 text-black p-10 text-center ${abrilFatface.className}`}>
                    <div>
                        <h1 className="text-6xl md:text-8xl font-normal mb-4">IMPACTO TOTAL</h1>
                        <p className="text-xl text-amber-900 font-sans tracking-widest uppercase">Personalidad audaz</p>
                    </div>
                </div>
            )
        },
    ],
    tresd: [
        {
            id: 'start-hero-3d',
            title: 'Hero 3D Interactivo',
            imageSrc: 'https://picsum.photos/seed/start3/768/1344',
            category: '3D Interaction',
            description: 'Escena 3D interactiva con efectos de iluminación dinámica.',
            preview: (
                <div className="w-full h-full relative pointer-events-none bg-white overflow-hidden rounded-xl border border-gray-100">
                    <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gray" />
                    <div className="absolute inset-0 flex items-center justify-center scale-[0.5]">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            ),
            component: (
                <Card className="w-full h-full min-h-[500px] bg-white relative overflow-hidden border-none rounded-2xl flex flex-col md:flex-row shadow-none">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(0,0,0,0.05)"
                    />

                    <div className="flex h-full flex-col md:flex-row w-full p-8 md:p-16">
                        {/* Left content */}
                        <div className="flex-1 relative z-10 flex flex-col justify-center text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-black">
                                3D Interactivo
                            </h1>
                            <p className="mt-4 text-gray-500 max-w-lg text-lg">
                                Dale vida a tu interfaz con escenas 3D hermosas. Crea experiencias inmersivas
                                que capturan la atención y mejoran tu diseño.
                            </p>
                        </div>

                        {/* Right content */}
                        <div className="flex-1 relative min-h-[300px] md:min-h-full">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </Card>
            )
        },
        {
            id: '3d-2',
            title: '3D Orbit Gallery',
            imageSrc: 'https://picsum.photos/seed/3d2/768/1344',
            category: 'Product Design',
            description: 'Visualización de productos y empaques en 3D interactivo.',
            preview: (
                <div className="w-full h-full relative pointer-events-none bg-black overflow-hidden">
                    <ThreeDOrbitGallery />
                </div>
            ),
            component: (
                <ThreeDOrbitGallery />
            )
        },
        {
            id: '3d-product',
            title: 'Product',
            imageSrc: 'https://picsum.photos/seed/3dprod/768/1344',
            category: '3D Model',
            description: 'Interactive 3D Product View (Coke Can).',
            disableLayoutAnimation: true,
            preview: (
                <div className="w-full h-full relative bg-white overflow-hidden">
                    <ThreeDViewer modelPath="/models/coke-can.glb" scale={0.6} />
                </div>
            ),
            component: (
                <ThreeDViewer modelPath="/models/coke-can.glb" />
            )
        },
        {
            id: '3d-logo',
            title: 'Logo',
            imageSrc: 'https://picsum.photos/seed/3dlogo/768/1344',
            category: 'Branding',
            description: 'Interactive 3D Logo (Nominis).',
            disableLayoutAnimation: true,
            preview: (
                <div className="w-full h-full relative bg-white overflow-hidden">
                    <ThreeDViewer modelPath="/models/nominis-logo.glb" scale={0.5} />
                </div>
            ),
            component: (
                <ThreeDViewer modelPath="/models/nominis-logo.glb" />
            )
        },
        {
            id: '3d-3',
            title: 'Stacked Photos',
            imageSrc: 'https://picsum.photos/seed/3d3/768/1344',
            category: 'Photography',
            description: 'Interactive stacked photo cards with animated background.',
            preview: (
                <div className="w-full h-full relative pointer-events-none overflow-hidden">
                    <div className="scale-[0.8] origin-center w-full h-full">
                        <StackedPhotos />
                    </div>
                </div>
            ),
            component: (
                <DemoStackedPhotos />
            )
        },
    ],
    extras: [
        {
            id: 'extra-1',
            title: 'Navbars Collection',
            imageSrc: 'https://picsum.photos/seed/extra1/768/1344',
            category: 'Navigation',
            description: 'Colección de barras de navegación: Notch, Menubar y Bottom Nav.',
            preview: (
                <div className="w-full h-full relative pointer-events-none flex items-center justify-center bg-gray-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50" />
                    <div className="scale-[0.7] transform translate-y-4">
                        <BottomNavBar />
                    </div>
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[600px] flex items-center justify-center bg-gray-50">
                    <NavbarsDemo />
                </div>
            )
        },
        {
            id: 'extra-2',
            title: 'Bot de Chat IA',
            imageSrc: 'https://picsum.photos/seed/extra2/768/1344',
            category: 'Communication',
            description: 'Chatbot expandible con respuestas simuladas de IA.',
            preview: (
                <div className="w-full h-full relative pointer-events-none flex items-center justify-center bg-gray-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50" />
                    <div className="scale-[0.8] origin-bottom-right absolute bottom-4 right-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                        </div>
                    </div>
                    <div className="absolute bottom-20 right-8 bg-white p-2 rounded-lg shadow-sm border text-xs text-gray-500">
                        ¡Hola! ¿En qué puedo ayudarte?
                    </div>
                </div>
            ),
            component: (
                <ExpandableChatDemo />
            )
        },
        {
            id: 'extra-3',
            title: 'Mapas',
            imageSrc: 'https://picsum.photos/seed/extra3/768/1344',
            category: 'Location',
            description: 'Mapa interactivo 3D de Quito, Ecuador.',
            preview: (
                <div className="w-full h-full relative pointer-events-none flex items-center justify-center bg-gray-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-teal-50 opacity-50" />
                    <div className="scale-[0.6] transform translate-y-2">
                        <div className="relative w-[240px] h-[140px] rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-transparent to-gray-200 opacity-50" />
                            <div className="grid grid-cols-2 gap-8 opacity-20 w-full h-full absolute">
                                <div className="border-r border-gray-400 h-full mx-auto" />
                                <div className="border-l border-gray-400 h-full mx-auto" />
                            </div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 mb-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                                <span className="text-[10px] font-medium text-gray-800">Quito, Ecuador</span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            component: (
                <ExpandMapDemo />
            )
        },
        {
            id: 'extra-4',
            title: 'Precios',
            imageSrc: 'https://picsum.photos/seed/extra4/768/1344',
            category: 'Business',
            description: 'Tablas de precios modernas y responsivas.',
            preview: (
                <div className="w-full h-full relative pointer-events-none flex items-center justify-center bg-gray-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50" />
                    <div className="flex flex-col gap-2 scale-[0.6] w-[180px]">
                        <div className="h-24 bg-white rounded-lg shadow-sm border border-gray-200 p-2 flex flex-col gap-1 items-center justify-center">
                            <div className="w-8 h-1 bg-gray-200 rounded-full" />
                            <div className="w-12 h-4 bg-gray-900 rounded-sm my-1" />
                            <div className="w-16 h-2 bg-gray-100 rounded-full" />
                        </div>
                        <div className="flex gap-2 justify-center">
                            <div className="w-full h-12 bg-white rounded-lg shadow-sm border border-gray-200 opacity-80" />
                            <div className="w-full h-12 bg-white rounded-lg shadow-sm border border-gray-200 opacity-80" />
                        </div>
                    </div>
                </div>
            ),
            component: (
                <PricingDemo />
            )
        },
        {
            id: 'extra-5',
            title: 'Historia',
            imageSrc: 'https://picsum.photos/seed/extra5/768/1344',
            category: 'Company',
            description: 'Línea de tiempo corporativa interactiva.',
            preview: (
                <div className="w-full h-full relative pointer-events-none flex items-center justify-center bg-gray-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-indigo-50 opacity-50" />
                    <div className="scale-[0.6] flex flex-col items-center gap-4">
                        <div className="w-1 h-32 bg-gray-200 relative">
                            <div className="absolute top-4 -left-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                            <div className="absolute top-16 -left-1.5 w-4 h-4 rounded-full bg-gray-300 border-2 border-white shadow-sm" />
                            <div className="absolute top-6 left-6 w-32 h-10 bg-white rounded-lg shadow-sm border border-gray-100 p-2" />
                            <div className="absolute top-20 right-6 w-32 h-10 bg-white rounded-lg shadow-sm border border-gray-100 p-2" />
                        </div>
                    </div>
                </div>
            ),
            component: (
                <TimelineDemo />
            )
        },
    ],
};
