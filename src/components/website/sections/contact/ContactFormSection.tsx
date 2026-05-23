"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactForm from "../../forms/ContactForm";
import Image from "next/image";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState(""); // Salva apenas o nome para a mensagem

  const handleSuccess = (name: string) => {
    setClientName(name);
    setSubmitted(true);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:col-span-3">
        <div className="flex gap-6 justify-between items-center bg-foreground rounded-2xl border border-border/50 p-8 sm:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-foreground/80 shadow-xl shadow-primary/20 rounded-xl p-6"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-muted" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                  Solicitação Enviada!
                </h3>
                <p className="text-muted max-w-md mx-auto">
                  Obrigado, {clientName}! Nossa equipe entrará em contato em
                  breve para confirmar sua consulta. Fique atento ao seu e-mail
                  e telefone.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => {
                    setSubmitted(false);
                    setClientName("");
                  }}
                >
                  Enviar Outra Solicitação
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-foreground/80 shadow-xl shadow-primary/20 rounded-xl p-6"
              >
                <h3 className="font-heading font-bold text-2xl text-muted mb-2">
                  Agendar Consulta Gratuita
                </h3>
                <p className="text-muted text-sm mb-8">
                  Preencha o formulário abaixo e entraremos em contato.
                </p>

                {/* Passa a função que avisa o pai quando o formulário foi enviado com sucesso */}
                <ContactForm onSuccess={handleSuccess} />
              </motion.div>
            )}
            <motion.div
              key="section-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 w-auto h-125 aspect-3/4 bg-white relative rounded-xl shadow-xl"
            >
              <Image
                src={"/images/contact/contact-form-image.png"}
                fill
                alt=""
                className="object-cover rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
