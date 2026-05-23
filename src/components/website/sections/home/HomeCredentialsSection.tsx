"use client";

import {
  credentials,
  HomeDiplomasImageUrl,
} from "@/shared/constants/home.constants";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function HomeCredentialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Habilitação Profissional
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-2xl mx-auto leading-tight">
              Você está em mãos devidamente habilitadas
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              Cirurgia plástica exige muito mais do que habilidade técnica —
              exige formação rigorosa, registro regular e estrutura certificada.
              Confira cada credencial que garante sua segurança.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Credentials Grid */}
          <div className="grid gap-5">
            {credentials.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div
                    className={`flex items-start gap-5 p-5 rounded-xl border transition-all duration-300 ${
                      cred.highlight
                        ? "bg-primary/5 border-primary/30 shadow-sm"
                        : "bg-card border-border/50 hover:border-primary/20 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        cred.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${cred.highlight ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h3 className="font-heading font-semibold text-base text-foreground">
                          {cred.title}
                        </h3>
                        {cred.highlight && (
                          <span className="text-[10px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5 shrink-0">
                            Reconhecido CFM
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono mt-0.5 mb-2">
                        {cred.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Image + Trust note */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={HomeDiplomasImageUrl}
                alt="Diplomas e certificados da Dra. Ana Beatriz Carvalho"
                className="w-full h-80 lg:h-105 object-cover"
              />
            </div>

            {/* Notice box */}
            <div className="bg-secondary rounded-xl p-6 border border-secondary/20">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-semibold text-white text-base mb-2">
                    Como verificar as credenciais
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Você pode consultar o registro ativo da Dra. Ana Beatriz no
                    portal oficial do{" "}
                    <a
                      href="https://portal.cfm.org.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      CFM
                    </a>{" "}
                    ou do{" "}
                    <a
                      href="https://www.cremesp.org.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      CRM-SP
                    </a>
                    . A transparência é parte do nosso compromisso com cada
                    paciente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
