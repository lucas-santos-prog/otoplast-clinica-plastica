"use client";

import { testimonials } from "@/shared/constants/home.constants";
import { CheckCircle, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeTestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
            Depoimentos Reais
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Quem passou pela OtoPlast conta
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Depoimentos reais de pacientes que viveram a experiência. Confiança
            se constrói com resultados, não com promessas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border/50 relative flex flex-col">
                <Quote className="w-8 h-8 text-muted/60 absolute top-6 right-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 text-sm flex-1">
                  "{t.quote}"
                </p>

                <div className="border-t border-border pt-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">
                        {t.name}
                      </p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {t.context}
                      </p>
                      <p className="text-muted-foreground/70 text-xs">
                        {t.period}
                      </p>
                    </div>
                    {t.verified && (
                      <span className="flex items-center gap-1 text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1 shrink-0">
                        <CheckCircle className="w-3 h-3" />
                        Verificado
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-card border border-border/50 rounded-2xl px-8 py-5 shadow-sm">
            <div>
              <p className="font-heading font-bold text-4xl text-foreground">
                4.9
              </p>
              <div className="flex gap-0.5 mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-accent text-accent"
                    />
                  ))}
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">
                Nota média dos pacientes
              </p>
              <p className="text-muted-foreground text-xs">
                Baseada em +600 avaliações verificadas no Google
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
