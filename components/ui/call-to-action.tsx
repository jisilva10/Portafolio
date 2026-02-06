"use client";
import { cn } from "@/lib/utils";

export function CallToAction() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-white p-4">
            <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#5524B7] to-[#380B60] rounded-2xl p-10 text-white shadow-xl">
                <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-purple-600/10 backdrop-blur border border-purple-500/40 text-sm mb-5">
                    <div className="flex items-center -space-x-2 mr-2">
                        <img className="size-6 md:size-7 rounded-full border-2 border-white object-cover"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop" alt="user1" />
                        <img className="size-6 md:size-7 rounded-full border-2 border-white object-cover"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="user2" />
                        <img className="size-6 md:size-7 rounded-full border-2 border-white object-cover"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
                            alt="user3" />
                        <div className="size-6 md:size-7 rounded-full border-2 border-white bg-gray-200 text-gray-800 flex items-center justify-center text-[10px] font-bold">
                            +1k
                        </div>
                    </div>
                    <p className="px-2 font-medium">Únete a nuestra comunidad</p>
                </div>
                <h1 className="text-3xl md:text-5xl md:leading-tight font-semibold max-w-2xl bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
                    Desbloquea tu próxima gran oportunidad.
                </h1>
                <p className="text-purple-200 mt-4 max-w-lg mx-auto">
                    Conecta con otros desarrolladores, comparte tus proyectos y crece profesionalmente junto a nosotros.
                </p>
                <button className="px-8 py-3 text-white bg-violet-600 hover:bg-violet-700 transition-all rounded-full uppercase text-sm font-semibold tracking-wide mt-8 shadow-lg hover:shadow-violet-600/25">
                    Unirse a WhatsApp
                </button>
            </div>
        </div>
    );
};
