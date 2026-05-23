import { Award, Heart, Shield } from "lucide-react";
import type { TimelineType, ValueType } from "../types/about.d";

export const AboutDoctorUrlImage: string = "/images/about/about-dra-lima.png";

export const AboutClinicUrlImage: string =
  "https://media.base44.com/images/public/6a100c896253ede40f79334f/717fc20a4_generated_image.png";

export const AboutSurgicalUrlImage: string =
  "/images/about/about-surgery-image.png";

export const AboutDiplomasUrlImage: string =
  "/images/about/about-certificate-image.png";

export const values: ValueType[] = [
  {
    icon: Heart,
    title: "Humanização",
    desc: "Cada paciente é único. Oferecemos atendimento personalizado, acolhedor e empático, respeitando as necessidades e expectativas individuais.",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    desc: "Utilizamos as técnicas mais avançadas e comprovadas em otoplastia, garantindo resultados precisos, naturais e duradouros.",
  },
  {
    icon: Shield,
    title: "Segurança do Paciente",
    desc: "Seguimos protocolos rigorosos de segurança, com centro cirúrgico certificado pela ANVISA e equipe altamente qualificada.",
  },
];

export const timeline: TimelineType[] = [
  {
    year: "2009",
    title: "Fundação",
    desc: "Dra. Ana Beatriz funda a OtoPlast com a visão de criar uma clínica especializada em otoplastia.",
  },
  {
    year: "2012",
    title: "Certificação ANVISA",
    desc: "Centro cirúrgico próprio recebe certificação da ANVISA, garantindo os mais altos padrões de qualidade.",
  },
  {
    year: "2018",
    title: "1.000 Procedimentos",
    desc: "Marco histórico de mil cirurgias realizadas com sucesso e taxa de satisfação acima de 95%.",
  },
  {
    year: "2024",
    title: "Top 10 Clínicas SP",
    desc: "Reconhecida como uma das 10 melhores clínicas de cirurgia plástica em São Paulo.",
  },
];
