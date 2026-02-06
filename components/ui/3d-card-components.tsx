"use client"

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'

interface ModelViewerProps {
    modelPath: string
    scale?: number
    autoRotate?: boolean
    intensity?: number
}

function Model({ path, scale }: { path: string, scale: number }) {
    const { scene } = useGLTF(path)
    return <primitive object={scene} scale={scale} />
}

export function ThreeDViewer({ modelPath, scale = 1, autoRotate = true, intensity = 1 }: ModelViewerProps) {
    return (
        <div className="w-full h-full relative" style={{ backgroundColor: 'white' }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }} className="block" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={intensity}>
                        <Model path={modelPath} scale={scale} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate={autoRotate} />
            </Canvas>
        </div>
    )
}
