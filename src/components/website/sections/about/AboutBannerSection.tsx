import { Badge } from "@/components/ui/badge";

export default function AboutBannerSection() {
  return (
    <section className="bg-secondary pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 text-xs font-mono uppercase tracking-wider mb-6">
          Sobre Nós
        </Badge>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
          Mais de 15 anos dedicados à excelência em otoplastia
        </h1>
        <p className="text-white/60 text-lg mt-6 max-w-2xl">
          Conheça a história, os valores e a equipe que fazem da OtoPlast uma
          referência em cirurgia de orelhas no Brasil.
        </p>
      </div>
    </section>
  );
}
