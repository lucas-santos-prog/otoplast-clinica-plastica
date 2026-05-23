"use client";
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeCTABannerSection() {
  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Agende uma consulta gratuita e sem compromisso com a Dra. Ana
            Beatriz. Tire todas as suas dúvidas e descubra como a otoplastia
            pode transformar sua vida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="ghost"
              asChild
              size="lg"
              className="bg-foreground/90 text-white hover:bg-foreground/70 hover:text-white shadow-xl h-14 px-8 text-base"
            >
              <Link href="/contato">
                Agendar Consulta Gratuita
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-gray-950 bg-white/50 hover:bg-white/90  h-14 px-8 text-base"
            >
              <a href="tel:+551140028922">
                <Phone className="w-4 h-4 mr-2" />
                (11) 4002-8922
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
