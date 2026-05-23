"use client";

import { Button } from "@/components/ui/button";
import { services } from "@/shared/constants/services.constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ServiceCard from "../../cards/ServiceCard";
import { ServiceType } from "@/shared/types/services.d";

export default function ServicesGridSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: ServiceType, i: number) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Tem dúvidas sobre qual procedimento é ideal para você?
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group"
            >
              Agendar Consulta Gratuita
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
