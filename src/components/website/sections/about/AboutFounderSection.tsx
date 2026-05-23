"use client";

import { AboutDoctorUrlImage } from "@/shared/constants/about.constants";
import { motion } from "framer-motion";

export default function AboutFounderSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={AboutDoctorUrlImage}
                alt="Dra. Ana Beatriz Carvalho"
                className="w-full h-125 object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
              Fundadora
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-6">
              Dra. Ana Beatriz Carvalho
            </h2>
            <p className="text-muted-foreground font-mono text-xs mb-6">
              CRM-SP 45.892 · Membro SBCP
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Especialista em Cirurgia Plástica com foco em otoplastia
                estética e funcional, a Dra. Ana Beatriz é graduada em Medicina
                pela Universidade de São Paulo (USP) e possui residência em
                Cirurgia Plástica pelo Hospital das Clínicas.
              </p>
              <p>
                Membro titular da Sociedade Brasileira de Cirurgia Plástica
                (SBCP), dedicou sua carreira ao aperfeiçoamento contínuo das
                técnicas de remodelagem auricular, participando regularmente de
                congressos nacionais e internacionais.
              </p>
              <p>
                Sua filosofia de cuidado é baseada na escuta atenta e no
                planejamento individualizado, garantindo que cada paciente
                receba um tratamento que respeite sua anatomia única e suas
                expectativas pessoais.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
