"use client";
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactForm() {
    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            contact: "Support@example.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            contact: "+1 (555) 000-000"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            contact: "Mountain View, California, United State."
        },
    ];

    return (
        <main className="w-full h-full bg-white relative overflow-y-auto">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 py-10">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <h3 className="text-indigo-600 font-semibold">
                            Contacto
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Dinos cómo podemos ayudarte
                        </p>
                        <p>
                            Estamos aquí para ayudar y responder cualquier pregunta que tengas. ¡Esperamos saber de ti! Por favor completa el formulario o usa la información de contacto a continuación.
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form
                            onSubmit={(e) => { e.preventDefault(); console.log("Form submitted!"); }}
                            className="space-y-5"
                        >
                            <div>
                                <label className="font-medium">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Mensaje
                                </label>
                                <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
