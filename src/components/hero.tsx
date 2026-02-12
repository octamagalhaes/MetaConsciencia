"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero-bg.png"
                    alt="MetaConsciência Prosperity Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto space-y-6 relative z-10"
            >
                <Badge variant="outline" className="px-4 py-1.5 border-primary/50 text-primary bg-primary/10 backdrop-blur-md uppercase tracking-widest text-[10px] sm:text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 mr-2" />
                    A Ciência da Prosperidade Diária
                </Badge>

                <h1 className="text-6xl md:text-8xl font-outfit font-bold tracking-tighter text-white leading-[0.9]">
                    MetaConsciência
                </h1>

                <p className="text-xl md:text-3xl text-primary font-medium tracking-tight max-w-2xl mx-auto leading-tight">
                    Vá além da sorte. <br />
                    <span className="text-white">Sintonize sua consciência com a ciência da prosperidade.</span>
                </p>

                <div className="space-y-6 max-w-2xl mx-auto pt-4">
                    <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed">
                        O método definitivo para reprogramar sua visão financeira e instalar o hábito de <span className="text-primary font-semibold">enriquecer um pouco todos os dias</span> — através das suas próprias decisões.
                    </p>
                </div>

                <div className="pt-8 flex flex-col items-center justify-center gap-6">
                    <Button size="lg" className="h-16 px-10 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(var(--primary),0.4)] group">
                        ATIVAR MINHA PROSPERIDADE
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                        <span className="line-through opacity-50 text-lg">R$ 997</span>
                        <span className="text-white text-2xl font-bold bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">R$ 297</span>
                        <span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[10px] font-bold">OFERTA ÚNICA</span>
                    </div>
                </div>
            </motion.div>

            {/* Quote Section at bottom of Hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-24 border-t border-white/10 pt-12 text-center"
            >
                <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                    "Imagina saber que, todo dia, você está mais próspero que no dia anterior.
                    Não porque caiu do céu, mas porque as <span className="text-white font-semibold underline decoration-primary underline-offset-4">suas decisões</span> mudaram."
                </p>
            </motion.div>
        </section>
    );
}
