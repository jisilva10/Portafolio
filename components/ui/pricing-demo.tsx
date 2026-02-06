import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function PricingDemo() {
    const plans = [
        {
            name: 'Gratis',
            price: '$0 / mes',
            desc: 'Por editor',
            features: ['Panel de Análisis Básico', '5GB de Almacenamiento', 'Soporte por Email y Chat'],
            buttonVariant: 'secondary'
        },
        {
            name: 'Pro',
            price: '$19 / mes',
            desc: 'Por editor',
            features: [
                'Todo en el Plan Gratis',
                '50GB de Almacenamiento',
                'Soporte Prioritario',
                'Acceso al Foro de Comunidad',
                'Acceso de Usuario Único',
                'Acceso a Plantillas Básicas',
                'Acceso a App Móvil',
                '1 Reporte Personalizado al Mes',
                'Actualizaciones Mensuales',
                'Funciones de Seguridad Estándar'
            ],
            buttonVariant: 'default'
        },
        {
            name: 'Pro Plus',
            price: '$49 / mes',
            desc: 'Por editor',
            features: ['Todo en el Plan Pro', 'Almacenamiento Ilimitado', 'Soporte 24/7 y Gestor de Cuenta'],
            buttonVariant: 'secondary'
        }
    ]

    return (
        <div className="bg-muted relative py-16 md:py-32 w-full h-full overflow-y-auto">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                        Precios que escalan con tu negocio
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
                        Elige el plan perfecto para tus necesidades y comienza a optimizar tu flujo de trabajo hoy mismo.
                    </p>
                </div>

                {/* Horizontal cards container */}
                <div className="mt-12 md:mt-20 grid gap-6 md:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <Card key={idx} className="flex flex-col">
                            <CardHeader className="p-8">
                                <CardTitle className="font-medium">{plan.name}</CardTitle>
                                <span className="mb-0.5 mt-2 block text-2xl font-semibold">{plan.price}</span>
                                <CardDescription className="text-sm">{plan.desc}</CardDescription>
                            </CardHeader>
                            <div className="border-y px-8 py-4">
                                <Button
                                    asChild
                                    className="w-full"
                                    variant={plan.buttonVariant as 'default' | 'secondary'}
                                >
                                    <Link href="#">Comenzar</Link>
                                </Button>
                            </div>
                            <ul role="list" className="space-y-3 p-8">
                                {plan.features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="text-primary size-3" strokeWidth={3.5} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
