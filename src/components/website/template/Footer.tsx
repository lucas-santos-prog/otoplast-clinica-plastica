import { Phone, Mail, MapPin, Clock } from "lucide-react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Giant Wordmark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span className="text-[15vw] font-heading font-bold text-white/3 leading-none whitespace-nowrap">
          OTOPLAST
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  O
                </span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                OtoPlast
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Clínica especializada em otoplastia com mais de 15 anos de
              experiência. Transformando vidas com confiança, precisão e
              resultados naturais.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Sobre Nós", path: "/sobre" },
                { label: "Serviços", path: "/servicos" },
                { label: "Contato", path: "/contato" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Serviços
            </h4>
            <div className="space-y-3">
              {[
                "Otoplastia Estética",
                "Otoplastia Pediátrica",
                "Otoplastia Funcional",
                "Correção de Orelhas em Abano",
                "Avaliação Pré-Operatória",
              ].map((s) => (
                <Link
                  key={s}
                  href="/servicos"
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+551140028922"
                className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                (11) 4002-8922
              </a>
              <a
                href="mailto:contato@otoplast.com.br"
                className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                contato@otoplast.com.br
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Av. Paulista, 1578 — Conj. 1405, Bela Vista, São Paulo — SP
              </div>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                Seg–Sex 8h–18h | Sáb 8h–13h
              </div>
            </div>
          </div>
        </div>

        {/* Hairline */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} OtoPlast — Clínica Especializada em
            Otoplastia. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            CRM-SP 45.892 | Responsável Técnica: Dra. Ana Beatriz Carvalho
          </p>
        </div>
      </div>
    </footer>
  );
}
