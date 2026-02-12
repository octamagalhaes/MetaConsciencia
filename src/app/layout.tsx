import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetaConsciência | A Arte de Decidir com Prosperidade",
  description: "Aprenda a habilidade de tomar decisões que te tornam mais próspero todos os dias. O treinamento definitivo para mudar sua realidade financeira.",
  keywords: ["prosperidade", "metaconsciência", "decisões financeiras", "sucesso", "mindset"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} font-inter antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
