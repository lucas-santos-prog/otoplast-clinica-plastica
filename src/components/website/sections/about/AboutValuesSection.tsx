"use client";

import { values } from "@/shared/constants/about.constants";
import { ValueType } from "@/shared/types/about.d";
import { motion } from "framer-motion";

export default function AboutValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
            Nossos Valores
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            O Que Nos Move
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v: ValueType, i: number) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="bg-card rounded-2xl p-8 h-full border border-border/50 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
