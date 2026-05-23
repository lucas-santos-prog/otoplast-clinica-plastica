"use client";
import { HomeHeroImageUrl } from "@/shared/constants/home.constants";
import { Award, ShieldCheck, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeHeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          fill
          src={HomeHeroImageUrl}
          alt="Paciente feliz após otoplastia na OtoPlast"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-r from-secondary/97 via-secondary/85 to-secondary/30 object-cover" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.05] mb-6">
              Orelhas em abano?{" "}
              <span className="text-primary">
                Existe solução segura e definitiva.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              A OtoPlast é uma clínica{" "}
              <strong className="text-white/90">
                exclusivamente dedicada à otoplastia
              </strong>{" "}
              — cirurgia de redução e reposicionamento de orelhas. Mais de 3.200
              procedimentos realizados pela Dra. Ana Beatriz, membro titular da
              SBCP.
            </p>

            {/* Social proof mini */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/70 text-sm">
                <strong className="text-white">4.9/5</strong> — mais de 600
                avaliações verificadas
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 h-14 px-8 text-base w-full sm:w-auto"
                >
                  Agendar Consulta Gratuita
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-muted-foreground border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base w-full sm:w-auto"
                >
                  Como Funciona
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Trust Credentials Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {[
              { Icon: ShieldCheck, label: "CRM-SP 45.892" },
              { Icon: Award, label: "SBCP Membro Titular" },
              { Icon: ShieldCheck, label: "ANVISA Certificada" },
              { Icon: Award, label: "HC-USP Residência" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-white/50 text-xs font-mono"
              >
                <Icon className="w-3 h-3 text-primary/70" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
