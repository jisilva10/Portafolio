"use client";

import { QrCode } from "@ark-ui/react/qr-code";
import { User, Phone, Mail } from "lucide-react";

export default function QrCodeContact() {
    // vCard format for contact information
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:John Doe
ORG:TarkUI
TITLE:Frontend Developer
TEL:+1-555-123-4567
EMAIL:john.doe@tarkui.com
URL:https://tarkui.com
END:VCARD`;

    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-white dark:bg-black p-8">
            <div className="flex flex-col items-center space-y-6 max-w-sm mx-auto">
                <div className="text-center space-y-2">
                    <User className="w-8 h-8 text-green-600 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Tarjeta de Contacto
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Escanea para guardar contacto
                    </p>
                </div>

                <QrCode.Root value={vCardData} encoding={{ ecc: "M" }}>
                    <QrCode.Frame className="w-48 h-48 bg-gray-50 dark:bg-gray-900 border border-green-200 dark:border-green-700 rounded-xl p-4 shadow-lg">
                        <QrCode.Pattern className="fill-green-700 dark:fill-green-300" />
                    </QrCode.Frame>
                </QrCode.Root>

                <div className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-2">
                    <div className="flex items-center gap-3">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900 dark:text-gray-100">
                            John Doe
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            +1-555-123-4567
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            john.doe@tarkui.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
