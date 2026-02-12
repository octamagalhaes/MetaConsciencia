"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, Zap, CreditCard, ArrowRight } from "lucide-react";

export function CTAPricing() {
    return (
        <section className="py-24 px-4 bg-primary/[0.03] relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2" />

            <div className="max-w-4xl mx-auto">
                <div className="bg-secondary/50 border border-primary/20 rounded-3xl p-8 md:p-16 backdrop-blur-md shadow-2xl relative overflow-hidden">
                    {/* Top Badge */}
                    <div className="flex justify-center mb-8">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm font-bold rounded-full uppercase tracking-widest">
                            OFERTA EXCLUSIVA DE LANÇAMENTO
                        </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white leading-tight">
                                    Tudo que você precisa para <span className="text-primary italic">mudar sua frequência</span>.
                                </h2>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    Acesso imediato ao treinamento completo MetaConsciência e ao arsenal de ferramentas para ativação diária.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                <CTAListItem text="12 Aulas de Alto Impacto (Direto ao ponto)" />
                                <CTAListItem text="O Protocolo de Ativação de Riqueza" />
                                <CTAListItem text="Mapa das Oitavas de Prosperidade" />
                                <CTAListItem text="Suporte e Acesso Vitalício" />
                            </ul>
                        </div>

                        <div className="bg-background/50 border border-primary/20 p-8 rounded-3xl space-y-8 text-center shadow-inner relative z-10">
                            <div className="space-y-2">
                                <span className="text-muted-foreground line-through text-lg opacity-50 font-medium">R$ 997,00</span>
                                <div className="flex items-center justify-center gap-1">
                                    <span className="text-2xl font-bold text-white mt-2">R$</span>
                                    <span className="text-7xl font-bold text-white tracking-tighter">297</span>
                                </div>
                                <p className="text-primary font-bold tracking-widest uppercase text-xs">Ou em até 12x no cartão</p>
                            </div>

                            <div className="space-y-4">
                                <Button size="lg" className="w-full h-20 text-xl font-black rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_15px_40px_rgba(var(--primary),0.3)] transition-all hover:scale-[1.03] active:scale-95 group">
                                    QUERO ATIVAR AGORA
                                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <div className="flex flex-col gap-3 pt-4">
                                    <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">
                                        <ShieldCheck className="w-4 h-4 text-green-500" />
                                        Garantia Incondicional de 7 Dias
                                    </div>
                                    <div className="flex items-center justify-center gap-4 text-white/20">
                                        <CreditCard className="w-5 h-5" />
                                        <Zap className="w-5 h-5" />
                                        <Check className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing Thought */}
                <div className="mt-16 text-center space-y-8">
                    <p className="text-white/50 max-w-2xl mx-auto text-xl italic font-light leading-relaxed">
                        "Sua prosperidade para de ser uma dúvida e <span className="text-white font-medium not-italic">passa a ser uma decisão deliberada</span> através da MetaConsciência."
                    </p>
                    <div className="flex items-center justify-center gap-2 text-white/30 text-sm">
                        <span>© 2026 MetaConsciência</span>
                        <span className="mx-2">•</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTAListItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-white/90 font-medium">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Check className="w-4 h-4" />
            </div>
            {text}
        </li>
    );
}
