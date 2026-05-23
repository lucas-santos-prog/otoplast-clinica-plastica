import { Badge } from "@/components/ui/badge";

export default function ServicesBannerSection() {
  return (
    <section className="bg-secondary pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 text-xs font-mono uppercase tracking-wider mb-6">
          Serviços
        </Badge>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
          Procedimentos especializados em otoplastia
        </h1>
        <p className="text-white/60 text-lg mt-6 max-w-2xl">
          Conheça nossos serviços e descubra como podemos ajudar você a alcançar
          os resultados desejados com segurança e precisão.
        </p>
      </div>
    </section>
  );
}
