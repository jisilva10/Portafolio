"use client";

import React, { useState, useEffect } from 'react';

interface PhotoCardProps {
    src: string;
    alt: string;
    rotation: number;
    text: string;
    index: number;
    style?: React.CSSProperties;
}

// Component for the individual photo cards
const PhotoCard = ({ src, alt, rotation, text, index, style = {} }: PhotoCardProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 700 + (index * 300));
        return () => clearTimeout(timer);
    }, [index]);

    const cardStyle: React.CSSProperties = {
        position: 'absolute',
        transform: `rotate(${rotation}deg) ${isHovered ? `rotate(${rotation + 2}deg) scale(1.05)` : `rotate(${rotation}deg) scale(1)`}`,
        zIndex: isHovered ? 20 : (index === 1 ? 2 : 1),
        transition: 'all 0.3s ease-out',
        opacity: isVisible ? 1 : 0,
        ...style
    };

    return (
        <div
            className="w-[162px] h-[240px] bg-white p-2 rounded-md shadow-2xl cursor-pointer"
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full h-[85%] bg-muted rounded-sm overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
                    onLoad={() => setIsLoaded(true)}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://placehold.co/162x200/e2e8f0/94a3b8?text=Image';
                        setIsLoaded(true);
                    }}
                />
            </div>
            <div className="h-[15%] flex items-center justify-center">
                <p style={{ fontFamily: '"Zeyada", cursive' }} className="text-sm text-gray-500 tracking-tighter text-center">
                    {text}
                </p>
            </div>
        </div>
    );
};

// Animated Gradient Grid Background Component
const AnimatedGrid = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset(prev => (prev + 0.5) % 40);
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {/* Main grid with gradient fade - Light theme */}
            <div
                className="absolute inset-0 dark:hidden"
                style={{
                    background: `
            radial-gradient(circle at 50% 50%, transparent 0%, #ffffff 50%, #ffffff 100%),
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
                    backgroundSize: 'cover, 40px 40px, 40px 40px',
                    backgroundPosition: `center, ${offset}px ${offset}px, ${offset}px ${offset}px`,
                }}
            />

            {/* Main grid with gradient fade - Dark theme */}
            <div
                className="absolute inset-0 hidden dark:block bg-background"
                style={{
                    background: `
            radial-gradient(circle at 50% 50%, transparent 0%, #0f172a 50%, #0f172a 100%),
            linear-gradient(#374151 1px, transparent 1px),
            linear-gradient(90deg, #374151 1px, transparent 1px)
          `,
                    backgroundSize: 'cover, 40px 40px, 40px 40px',
                    backgroundPosition: `center, ${offset}px ${offset}px, ${offset}px ${offset}px`,
                }}
            />

            {/* Subtle moving overlay for depth - Light theme */}
            <div
                className="absolute inset-0 opacity-30 dark:hidden"
                style={{
                    background: `
            radial-gradient(circle at ${50 + Math.sin(offset * 0.1) * 20}% ${50 + Math.cos(offset * 0.1) * 20}%, rgba(107, 114, 128, 0.1) 0%, transparent 60%)
          `,
                }}
            />

            {/* Subtle moving overlay for depth - Dark theme */}
            <div
                className="absolute inset-0 opacity-30 hidden dark:block"
                style={{
                    background: `
            radial-gradient(circle at ${50 + Math.sin(offset * 0.1) * 20}% ${50 + Math.cos(offset * 0.1) * 20}%, rgba(156, 163, 175, 0.15) 0%, transparent 60%)
          `,
                }}
            />
        </div>
    );
};

// Main App Component
export function StackedPhotos() {
    return (
        <div className="w-full h-full relative">
            {/* Adding the Google Font 'Zeyada' for the handwritten text */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
      `}</style>

            <div className="bg-gray-50 dark:bg-black/50 min-h-[400px] h-full flex items-center justify-center w-full p-8 relative rounded-2xl overflow-hidden">

                {/* Animated Grid Background */}
                <AnimatedGrid />
                {/* Photo Cards Container - positioned exactly like your image */}
                <div className="relative w-[300px] h-[300px] flex items-center justify-center">

                    {/* Back Photo Card - rotated left, positioned behind */}
                    <PhotoCard
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop"
                        alt="A person standing in a field with mountains in the background"
                        rotation={-8}
                        text="Adventure awaits"
                        index={0}
                        style={{ top: '20px', left: '0px' }}
                    />

                    {/* Front Photo Card - rotated right, positioned on top */}
                    <PhotoCard
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop"
                        alt="A close-up of a person's face"
                        rotation={15}
                        text="Portrait sessions"
                        index={1}
                        style={{ top: '10px', right: '0px' }}
                    />

                </div>
            </div>
        </div>
    );
}
