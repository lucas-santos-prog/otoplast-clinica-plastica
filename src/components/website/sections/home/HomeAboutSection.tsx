"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import {
  differentials,
  HomeClinicImageUrl,
} from "@/shared/constants/home.constants";
import { motion } from "framer-motion";

export default function HomeAboutSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={HomeClinicImageUrl}
                alt="Clínica OtoPlast — ambiente de atendimento"
                className="w-full h-80 lg:h-120 object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-card rounded-xl shadow-2xl p-6 backdrop-blur-sm border border-border/50">
              <p className="font-heading font-bold text-3xl text-primary">
                3.200+
              </p>
              <p className="text-muted-foreground text-sm">
                Otoplastias realizadas
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
              Por Que Nos Escolher
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Especialização exclusiva é o que garante resultados excepcionais
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Diferente de clínicas generalistas, a OtoPlast foi construída com
              um único propósito: ser a melhor referência em cirurgia de orelhas
              no Brasil. Quando um médico faz a mesma cirurgia todos os dias há
              15 anos, o resultado aparece em cada detalhe — da precisão do
              corte à naturalidade do resultado final.
            </p>

            <div className="space-y-4 mb-10">
              {differentials.map((item: string) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl mb-8">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Transparência total:
                </strong>{" "}
                todas as nossas credenciais podem ser verificadas publicamente
                nos portais do CFM e CRM-SP.
              </p>
            </div>

            <Link href="/sobre">
              <Button variant="outline" size="lg" className="group">
                Conhecer Nossa Estrutura
                <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
