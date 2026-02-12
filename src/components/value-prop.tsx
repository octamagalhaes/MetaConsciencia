"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle2, TrendingUp, Wallet, Brain } from "lucide-react";

const comparisonData = [
    {
        icon: <XCircle className="w-8 h-8 text-destructive" />,
        title: "Como você decide hoje",
        points: [
            "Decisões movidas pelo medo da escassez",
            "O ciclo exaustivo de 'correr atrás do dinheiro'",
            "Tentativas frustradas (trabalhar mais, rezar mais)",
            "A incerteza constante se o mês fechará no azul",
        ],
        className: "border-destructive/20 bg-destructive/5",
    },
    {
        icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
        title: "Com MetaConsciência",
        points: [
            "Bússola de decisão: Lucro e Expansão total",
            "Hábito de Riqueza instalado no subconsciente",
            "Decidir com a calma de quem domina as leis",
            "Crescimento financeiro previsível por A+B",
        ],
        className: "border-primary/20 bg-primary/5 shadow-[0_0_30px_rgba(var(--primary),0.1)]",
    },
];

export function ValueProp() {
    return (
        <section className="py-24 px-4 bg-secondary/30">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white leading-tight">
                        Por que sua vida financeira <br />
                        <span className="text-primary italic">está travada?</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Não é falta de esforço. É falta de <span className="text-white font-semibold">critério</span>. O MetaConsciência revela o erro lógico que impede seu crescimento e instala a habilidade de decidir como os prósperos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className={`h-full border ${item.className} backdrop-blur-sm overflow-hidden`}>
                                <CardContent className="p-8 space-y-6">
                                    <div className="flex items-center gap-4">
                                        {item.icon}
                                        <h3 className="text-2xl font-outfit font-semibold text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {item.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                    <FeatureItem
                        icon={<Wallet className="w-6 h-6" />}
                        title="Relacionamento"
                        description="Entenda como sua conexão com o dinheiro dita seus resultados."
                    />
                    <FeatureItem
                        icon={<Brain className="w-6 h-6" />}
                        title="Auto-Observação"
                        description="Instala o hábito de se perguntar: 'Isso me prospera ou me sabota?'"
                    />
                    <FeatureItem
                        icon={<TrendingUp className="w-6 h-6" />}
                        title="Matemática Real"
                        description="Se você prospera um pouco todo dia, o resultado final é inevitável."
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="p-6 rounded-2xl border border-white/5 bg-white/5 space-y-4 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {icon}
            </div>
            <h4 className="text-xl font-outfit font-semibold text-white">{title}</h4>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}
