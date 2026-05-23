"use client";

import { Button } from "@/components/ui/button";
import {
  benefits,
  HomeLifestyleImageUrl,
  HomeSurgeryImageUrl,
} from "@/shared/constants/home.constants";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomeResultSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
            O Procedimento
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            O que muda na sua vida após a otoplastia
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            A otoplastia é uma das cirurgias plásticas com maior índice de
            satisfação do mundo. O impacto vai muito além do físico — é
            autoestima, liberdade e qualidade de vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image surgery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={HomeSurgeryImageUrl}
                alt="Dra. Ana Beatriz realizando otoplastia"
                className="w-full h-100 lg:h-120 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground">
              Resultados que você pode esperar
            </h3>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl border border-border/30"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">
                    {b}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group mt-4"
              >
                Quero Saber Se Sou Candidato
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Patient lifestyle image + stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-muted/40 rounded-3xl p-8 lg:p-12 border border-border/40">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={HomeLifestyleImageUrl}
                alt="Paciente confiante após otoplastia na OtoPlast"
                className="w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
              Nossos Números
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "98%", label: "Taxa de satisfação" },
                { value: "1h30", label: "Duração média" },
                { value: "7 dias", label: "Retorno ao trabalho" },
                { value: "15+", label: "Anos de especialidade" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card rounded-xl p-5 border border-border/50"
                >
                  <p className="font-heading font-bold text-2xl text-foreground">
                    {s.value}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
