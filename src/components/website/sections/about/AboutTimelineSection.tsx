"use client";

import { timeline } from "@/shared/constants/about.constants";
import { motion } from "framer-motion";

export default function AboutTimelineSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
            Nossa Trajetória
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            15 Anos de História
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs font-bold text-primary">
                    {item.year}
                  </span>
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pt-2.5 pb-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
