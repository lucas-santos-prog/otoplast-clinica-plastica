import { Badge } from "@/components/ui/badge";

export default function ContactBannerSection() {
  return (
    <section className="bg-secondary pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 text-xs font-mono uppercase tracking-wider mb-6">
          Contato
        </Badge>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
          Vamos conversar sobre seu caso
        </h1>
        <p className="text-white/60 text-lg mt-6 max-w-2xl">
          Agende uma consulta gratuita e sem compromisso. Estamos prontos para
          ajudá-lo a dar o primeiro passo.
        </p>
      </div>
    </section>
  );
}
