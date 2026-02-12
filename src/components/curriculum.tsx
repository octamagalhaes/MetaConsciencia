"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlayCircle, Clock, BookOpen, Layers } from "lucide-react";

const modules = [
    {
        id: "module-1",
        title: "Módulo 1: O Fim da Ilusão Financeira",
        description: "Desconstruindo as travas invisíveis que sabotam sua riqueza. Por que o esforço cego e as fórmulas prontas nunca funcionaram para você.",
        lessons: [
            "Aula de Boas-Vindas: Sua nova realidade começa aqui",
            "A Verdade sobre o meu Trajeto: De onde surgiu a MetaConsciência",
            "O Mito do Trabalho Duro: Por que rezas e afirmações vazias falham",
            "Identificando o Inimigo: Por que você ainda não é rico?",
        ],
    },
    {
        id: "module-2",
        title: "Módulo 2: Ativação da MetaConsciência",
        description: "A masterclass prática para instalar o novo critério de decisão próspera. Como enxergar o lucro onde outros veem apenas problemas.",
        lessons: [
            "A Técnica Base: Como observar o observador em tempo real",
            "Matemática Energética: A realidade física do dinheiro e da prosperidade",
            "Ativação Prática: O primeiro passo para puxar a energia da abundância",
            "MetaConsciência no Caos: Como decidir sob pressão e nas ruas",
        ],
    },
    {
        id: "module-3",
        title: "Módulo 3: Expansão e Escala Infinita",
        description: "Transformando sua vida e seu negócio em pontes de valor. O caminho para nunca mais estagnar financeiramente.",
        lessons: [
            "A Tríade da Riqueza: Escolhas, Contribuição e Diversão",
            "Negócios como Pontes: A engenharia das decisões empresariais",
            "O Mapa das Oitavas: Visualizando seu próximo salto de nível",
            "Continuidade: Como manter a prosperidade ativa para sempre",
        ],
    },
];

export function Curriculum() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white">
                        O Mapa da Sua Transformação
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        3 módulos práticos desenhados para instalar o novo sistema operacional da sua vida financeira.
                    </p>
                    <div className="flex items-center justify-center gap-6 pt-4 text-sm text-primary font-medium">
                        <span className="flex items-center gap-2">
                            <Layers className="w-4 h-4" /> 3 Módulos
                        </span>
                        <span className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" /> 12 Aulas
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" /> 2 Horas de conteúdo denso
                        </span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {modules.map((module, index) => (
                            <AccordionItem
                                key={module.id}
                                value={module.id}
                                className="border border-white/5 bg-white/5 rounded-2xl px-6 data-[state=open]:border-primary/20 data-[state=open]:bg-primary/[0.02] transition-all"
                            >
                                <AccordionTrigger className="hover:no-underline py-6">
                                    <div className="flex flex-col items-start text-left gap-1">
                                        <span className="text-primary text-sm font-bold uppercase tracking-wider">
                                            Módulo {index + 1}
                                        </span>
                                        <span className="text-xl md:text-2xl font-outfit font-semibold text-white">
                                            {module.title.split(": ")[1]}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6">
                                    <div className="space-y-6">
                                        <p className="text-muted-foreground text-base leading-relaxed">
                                            {module.description}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {module.lessons.map((lesson, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                                    <PlayCircle className="w-4 h-4 text-primary shrink-0" />
                                                    <span className="text-sm text-white/80">{lesson}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
