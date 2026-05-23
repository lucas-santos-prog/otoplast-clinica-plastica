import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ContactInfoType } from "../types/contact.d";

export const contactInfo: ContactInfoType[] = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(11) 4002-8922",
    href: "tel:+551140028922",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@otoplast.com.br",
    href: "mailto:contato@otoplast.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Paulista, 1578 — Conj. 1405, Bela Vista, São Paulo — SP",
  },
  { icon: Clock, label: "Horário", value: "Seg–Sex 8h–18h | Sáb 8h–13h" },
];

export const procedures = [
  "Otoplastia Estética",
  "Otoplastia Pediátrica",
  "Otoplastia Funcional",
  "Correção de Orelhas em Abano",
  "Avaliação Pré-Operatória",
  "Outro",
];
