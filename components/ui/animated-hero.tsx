import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function AnimatedHero({ className }: { className?: string }) {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["increíble", "nuevo", "maravilloso", "hermoso", "inteligente"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className={cn("w-full bg-white text-black antialiased", className)}>
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    <div>
                        <Button variant="secondary" size="sm" className="gap-4">
                            Lee nuestro artículo de lanzamiento <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                            <span className="text-black">Esto es algo</span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold"
                                        initial={{ opacity: 0, y: "-100" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-500 max-w-2xl text-center">
                            Gestionar un negocio hoy en día es un desafío. Evita complicaciones innecesarias
                            dando el salto a la modernidad. Nuestro objetivo es optimizar tu flujo de trabajo,
                            haciéndolo más fácil y rápido que nunca.
                        </p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Button size="lg" className="gap-4" variant="outline">
                            Agendar llamada <PhoneCall className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-4">
                            Regístrate aquí <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { AnimatedHero };
