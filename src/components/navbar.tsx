"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-background/40 backdrop-blur-md border border-white/5 px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-outfit font-bold text-xl tracking-tight text-white">
                        MetaConsciência
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#metodo">O Método</NavLink>
                    <NavLink href="#curriculo">Módulos</NavLink>
                    <NavLink href="#preço">Garantia</NavLink>
                </div>

                <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6">
                    Comprar Agora
                </Button>
            </div>
        </motion.nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
        >
            {children}
        </a>
    );
}
