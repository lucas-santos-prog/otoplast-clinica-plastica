"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AboutDiplomasUrlImage,
  AboutSurgicalUrlImage,
} from "@/shared/constants/about.constants";

export default function AboutInfrastructureSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
              Estrutura Certificada
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight mb-6">
              Centro cirúrgico próprio, certificado pela ANVISA
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Realizar uma cirurgia em ambiente não certificado é um risco
                real. Por isso, a OtoPlast investiu em um centro cirúrgico
                próprio que atende integralmente as normas da Vigilância
                Sanitária — você opera onde tudo foi pensado para a sua
                segurança.
              </p>
              <p>
                Nossa estrutura conta com equipamentos de monitoramento cardíaco
                contínuo, sistema de filtração de ar com pressão positiva,
                instrumentais cirúrgicos descartáveis e sala de recuperação com
                enfermagem dedicada.
              </p>
              <p>
                Não terceirizamos a cirurgia para hospitais parceiros. O
                controle de qualidade começa antes mesmo de você chegar.
              </p>
            </div>
            <Link href="/contato" className="inline-block mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Agendar Consulta
                <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={AboutSurgicalUrlImage}
                alt="Dra. Ana Beatriz em procedimento de otoplastia"
                className="w-full h-64 lg:h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={AboutDiplomasUrlImage}
                alt="Certificados e diplomas OtoPlast"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
