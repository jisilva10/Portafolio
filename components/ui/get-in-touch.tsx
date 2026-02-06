"use client"

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, MessageCircle, Youtube, ArrowRight } from 'lucide-react';

export const ProfessionalConnect = () => {
    const [, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialPlatforms = [
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-7 h-7" />,
            gradient: 'from-blue-600 to-blue-400',
            shadowColor: 'rgba(59, 130, 246, 0.5)',
            link: '#',
            description: 'Red Profesional'
        },
        {
            name: 'GitHub',
            icon: <Github className="w-7 h-7" />,
            gradient: 'from-gray-700 to-gray-500',
            shadowColor: 'rgba(75, 85, 99, 0.5)',
            link: '#',
            description: 'Repositorio de Código'
        },
        {
            name: 'Twitter',
            icon: <Twitter className="w-7 h-7" />,
            gradient: 'from-slate-800 to-slate-600',
            shadowColor: 'rgba(51, 65, 85, 0.5)',
            link: '#',
            description: 'Actualizaciones Sociales'
        },
        {
            name: 'Instagram',
            icon: <Instagram className="w-7 h-7" />,
            gradient: 'from-purple-600 via-pink-600 to-orange-500',
            shadowColor: 'rgba(219, 39, 119, 0.5)',
            link: '#',
            description: 'Historias Visuales'
        },
        {
            name: 'Discord',
            icon: <MessageCircle className="w-7 h-7" />,
            gradient: 'from-indigo-600 to-purple-600',
            shadowColor: 'rgba(99, 102, 241, 0.5)',
            link: '#',
            description: 'Chat de la Comunidad'
        },
        {
            name: 'YouTube',
            icon: <Youtube className="w-7 h-7" />,
            gradient: 'from-red-600 to-red-400',
            shadowColor: 'rgba(239, 68, 68, 0.5)',
            link: '#',
            description: 'Contenido en Video'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden relative w-full flex items-center justify-center">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* Floating Orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-700"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full p-8">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Conecta y Colabora
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent">
                            Ponte en Contacto
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Únete a nuestra vibrante comunidad en múltiples plataformas y mantente conectado con las últimas actualizaciones.
                    </p>
                </div>

                {/* Social Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
                    {socialPlatforms.map((platform, index) => (
                        <a
                            key={platform.name}
                            href={platform.link}
                            className={`group relative transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Card Container */}
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-slate-600/50 h-full">
                                {/* Hover Gradient Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                ></div>

                                {/* Glow Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${platform.shadowColor}, transparent 70%)`,
                                        filter: 'blur(40px)'
                                    }}
                                ></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-start h-full">
                                    {/* Icon Container */}
                                    <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.gradient} text-white transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                        {platform.icon}
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-white font-semibold text-lg mb-1 transition-colors duration-300">
                                        {platform.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-gray-400 mb-4 flex-grow">
                                        {platform.description}
                                    </p>

                                    {/* Arrow Icon */}
                                    <div className="mt-auto flex items-center text-gray-600 group-hover:text-white transition-all duration-300">
                                        <span className="text-sm font-medium group-hover:translate-x-0 transition-all duration-300">
                                            Conectar
                                        </span>
                                        <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                        <span className="relative z-10">Explorar Todas</span>
                        <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                        {/* Button Shimmer */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </button>
                </div>
            </div>

            {/* Mouse Follow Light */}
            <div
                className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-[100px] transition-all duration-200 ease-out z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)',
                    left: `${mousePosition.x - 192}px`,
                    top: `${mousePosition.y - 192}px`,
                }}
            />
        </div>
    );
};
