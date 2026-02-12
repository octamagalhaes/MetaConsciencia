import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueProp } from "@/components/value-prop";
import { Curriculum } from "@/components/curriculum";
import { CTAPricing } from "@/components/cta-pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Global Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[130px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <Navbar />

      <div className="space-y-0">
        <Hero />

        <div id="metodo">
          <ValueProp />
        </div>

        <div id="curriculo">
          <Curriculum />
        </div>

        <div id="preço">
          <CTAPricing />
        </div>
      </div>
    </main>
  );
}
