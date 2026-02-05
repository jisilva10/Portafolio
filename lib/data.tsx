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
import Image from "next/image";
import React from "react";

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
                <div className="w-full h-full flex items-center justify-center bg-white overflow-hidden">
                    <div className="scale-[0.2] origin-center">
                        <ContainerScroll
                            titleComponent={
                                <>
                                    <h1 className="text-4xl font-semibold text-black dark:text-white">
                                        Unleash the power of <br />
                                        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                            Scroll Animations
                                        </span>
                                    </h1>
                                </>
                            }
                        >
                            <Image
                                src={`https://images.unsplash.com/photo-1629757685603-0c3c6f4e1f7d?q=80&w=3840&auto=format&fit=crop`}
                                alt="hero"
                                height={720}
                                width={1400}
                                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                                draggable={false}
                            />
                        </ContainerScroll>
                    </div>
                </div>
            ),
            component: (
                <div className="w-full h-full min-h-[1000px] bg-white overflow-hidden">
                    <ContainerScroll
                        titleComponent={
                            <>
                                <h1 className="text-4xl font-semibold text-black dark:text-white">
                                    Unleash the power of <br />
                                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                        Scroll Animations
                                    </span>
                                </h1>
                            </>
                        }
                    >
                        <Image
                            src={`https://images.unsplash.com/photo-1629757685603-0c3c6f4e1f7d?q=80&w=3840&auto=format&fit=crop`}
                            alt="hero"
                            height={720}
                            width={1400}
                            className="mx-auto rounded-2xl object-cover h-full object-left-top"
                            draggable={false}
                        />
                    </ContainerScroll>
                </div>
            )
        },
        {
            id: 'ui-2',
            title: 'Conócenos',
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
                <div className="w-full h-full flex items-center justify-center bg-white scale-[0.5] origin-top pointer-events-none overflow-hidden pt-20">
                    <div className="max-w-2xl w-full">
                        <InteractiveBentoGallery
                            title="Galería"
                            description=""
                            mediaItems={[
                                { id: 1, type: "image", title: "Proyecto A", desc: "Diseño UI", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", span: "md:col-span-2 md:row-span-2" },
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
                                title: "Anurag Mishra",
                                desc: "Driven, innovative, visionary",
                                url: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcbP3rYTiXwH7Y106CepJOsoAgQjyFi3MUfDkh",
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
        { id: 'ui-5', title: 'Loaders', imageSrc: 'https://picsum.photos/seed/ui5/768/1344', category: 'Feedback', description: 'Indicadores de carga creativos y no intrusivos.' },
    ],
    contacto: [
        { id: 'contact-1', title: 'Formulario Simple', imageSrc: 'https://picsum.photos/seed/contact1/768/1344', category: 'Forms', description: 'Formulario de contacto limpio y directo.' },
        { id: 'contact-2', title: 'Redes Sociales', imageSrc: 'https://picsum.photos/seed/contact2/768/1344', category: 'Social', description: 'Grid visual de enlaces a redes sociales.' },
        { id: 'contact-3', title: 'Mapa Interactivo', imageSrc: 'https://picsum.photos/seed/contact3/768/1344', category: 'Location', description: 'Mapa personalizado con estilos oscuros.' },
    ],
    tipografias: [
        { id: 'type-1', title: 'Sans Serif Modern', imageSrc: 'https://picsum.photos/seed/type1/768/1344', category: 'Typography', description: 'Fuentes limpias y modernas para startups.' },
        { id: 'type-2', title: 'Serif Elegante', imageSrc: 'https://picsum.photos/seed/type2/768/1344', category: 'Typography', description: 'Para marcas de lujo y moda.' },
        { id: 'type-3', title: 'Display Bold', imageSrc: 'https://picsum.photos/seed/type3/768/1344', category: 'Typography', description: 'Fuentes grandes y bold para titulares impactantes.' },
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
        { id: '3d-2', title: 'Productos', imageSrc: 'https://picsum.photos/seed/3d2/768/1344', category: 'Product Design', description: 'Visualización de productos y empaques en 3D.' },
        { id: '3d-3', title: 'Abstracto', imageSrc: 'https://picsum.photos/seed/3d3/768/1344', category: 'Art', description: 'Formas abstractas y fluidas en 3D.' },
    ],
    extras: [
        { id: 'extra-1', title: 'Navbars', imageSrc: 'https://picsum.photos/seed/extra1/768/1344', category: 'Navigation', description: 'Diferentes estilos de barras de navegación.' },
        { id: 'extra-2', title: 'Chats', imageSrc: 'https://picsum.photos/seed/extra2/768/1344', category: 'Communication', description: 'Interfaces de chat y mensajería.' },
        { id: 'extra-3', title: 'Pricing', imageSrc: 'https://picsum.photos/seed/extra3/768/1344', category: 'Business', description: 'Tablas de precios comparativas.' },
    ],
};
