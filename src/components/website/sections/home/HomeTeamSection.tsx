"use client";

import { Badge } from "@/components/ui/badge";
import { team } from "@/shared/constants/home.constants";
import { motion } from "framer-motion";

export default function HomeTeamSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
            Nossa Equipe
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Profissionais de Excelência
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500">
                <div className="aspect-3/4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {member.role}
                  </p>
                  <Badge
                    variant="secondary"
                    className="mt-3 font-mono text-xs tracking-wider"
                  >
                    {member.credential}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
