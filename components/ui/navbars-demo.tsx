"use client";

import BottomNavBar from "@/components/ui/bottom-nav-bar";
import { NotchNav } from "@/components/ui/notch-nav";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    MenubarSeparator,
    MenubarShortcut,
} from "@/components/ui/menubar";

function MenubarDemo() {
    return (
        <Menubar className="w-full">
            <MenubarMenu>
                <MenubarTrigger>Archivo</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Nuevo Elemento <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                    <MenubarItem>Abrir... <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Guardar <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Editar</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Deshacer <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
                    <MenubarItem>Rehacer <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cortar</MenubarItem>
                    <MenubarItem>Copiar</MenubarItem>
                    <MenubarItem>Pegar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Ver</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem inset>Mostrar Barra de Estado</MenubarItem>
                    <MenubarItem inset>Mostrar Panel Lateral</MenubarItem>
                    <MenubarItem inset>Pantalla Completa</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Ayuda</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Buscar</MenubarItem>
                    <MenubarItem>Documentación</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}

export default function NavbarsDemo() {
    const notchItems = [
        { value: "home", label: "Inicio" },
        { value: "projects", label: "Proyectos" },
        { value: "library", label: "Biblioteca" },
        { value: "settings", label: "Ajustes" },
    ];

    return (
        <div className="flex flex-col gap-24 items-center justify-center p-8 bg-gray-50 min-h-[800px]">
            {/* Notch Nav */}
            <div className="w-full max-w-md">
                <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-tight">Notch Nav</h3>
                <NotchNav items={notchItems} defaultValue="projects" ariaLabel="Notch Navigation" />
            </div>

            {/* Menubar */}
            <div className="w-full max-w-md">
                <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-tight">Menubar</h3>
                <MenubarDemo />
            </div>

            {/* Bottom Nav */}
            <div className="w-full max-w-md">
                <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-tight">Bottom Nav</h3>
                <div className="flex justify-center">
                    <BottomNavBar />
                </div>
            </div>
        </div>
    );
}
