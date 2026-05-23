"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/shared/constants/home.constants";
import type { ServiceType } from "@/shared/types/home.d";

export default function HomeServicesGridSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Procedimentos Especializados
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: ServiceType, i: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href="/servicos" className="block h-full">
                <div className="bg-card rounded-xl p-8 h-full border border-transparent hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <span className="text-4xl mb-5 block">{service.emoji}</span>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/servicos">
            <Button size="lg" variant="outline" className="group">
              Ver Todos os Serviços
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
