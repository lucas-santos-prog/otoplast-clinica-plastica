import { MapPin } from "lucide-react";

export default function ContactAddressMapSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-card rounded-xl border border-border/50 p-6 mt-8">
        <div className="bg-muted rounded-xl h-48 flex items-center justify-center mb-4">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-muted-foreground text-sm">Av. Paulista, 1578</p>
            <p className="text-muted-foreground text-xs">
              Bela Vista, São Paulo — SP
            </p>
          </div>
        </div>
        <p className="text-muted-foreground text-xs">
          📍 Fácil acesso pelo metrô — Estação Trianon-Masp (Linha 2 - Verde)
        </p>
      </div>
    </section>
  );
}
