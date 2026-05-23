"use client";
import { ServiceType } from "@/shared/types/services.d";
import { motion } from "framer-motion";
import { Calendar, Clock, Stethoscope } from "lucide-react";
export default function ServiceCard({
  service,
  index,
}: {
  service: ServiceType;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
        <span className="text-4xl mb-5 block">{service.emoji}</span>
        <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {service.desc}
        </p>

        {/* Stats */}
        <div className="space-y-3 border-t border-border pt-5">
          {service.duration && (
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Duração:</span>
              <span className="text-foreground font-medium">
                {service.duration}
              </span>
            </div>
          )}
          {service.recovery && (
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Recuperação:</span>
              <span className="text-foreground font-medium">
                {service.recovery}
              </span>
            </div>
          )}
          {service.anesthesia && (
            <div className="flex items-center gap-2 text-sm">
              <Stethoscope className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Anestesia:</span>
              <span className="text-foreground font-medium">
                {service.anesthesia}
              </span>
            </div>
          )}
          {service.indication && (
            <p className="text-xs text-muted-foreground italic pt-1">
              Indicação: {service.indication}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
