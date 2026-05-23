import type {
  ServiceType,
  StepType,
  TeamMemberType,
  TestimonialType,
} from "../types/home.d";

import {
  ShieldCheck,
  Award,
  BookOpen,
  Building2,
  Microscope,
  Users,
  Stethoscope,
  ClipboardList,
  HeartPulse,
  CalendarCheck,
} from "lucide-react";

export const HomeHeroImageUrl: string = "/images/home/home-hero-section.png";
export const HomeClinicImageUrl: string = "/images/home/home-clinic-image.png";
export const HomeDiplomasImageUrl: string =
  "/images/home/home-certificate-section.png";
export const HomeSurgeryImageUrl: string =
  "/images/home/home-surgery-section.png";
export const HomeLifestyleImageUrl: string =
  "/images/home/home-lifestyle-section.png";
export const HomeTeamImageUrls: string[] = [
  "/images/home/home-dra-lima.png",
  "/images/home/home-dr-silva.png",
  "/images/home/home-dra-oliveira.png",
];

export const differentials: string[] = [
  "Clínica 100% dedicada à otoplastia — foco gera excelência",
  "Técnica de sutura permanente sem cicatrizes visíveis",
  "Centro cirúrgico próprio certificado pela ANVISA",
  "Dra. Ana Beatriz: Membro Titular SBCP, o título reconhecido pelo CFM",
  "Acompanhamento pós-operatório até o resultado final",
];

export const stats = [
  { value: 15, suffix: "+", label: "Anos de Experiência" },
  { value: 98, suffix: "%", label: "Satisfação dos Pacientes" },
  { value: 3200, suffix: "+", label: "Cirurgias Realizadas" },
  { value: 5, suffix: "", label: "Especialistas na Equipe" },
];

export const services: ServiceType[] = [
  {
    emoji: "👂",
    title: "Otoplastia Estética",
    desc: "Correção de orelhas proeminentes com resultados naturais e duradouros.",
  },
  {
    emoji: "👶",
    title: "Otoplastia Pediátrica",
    desc: "Procedimento seguro para crianças a partir de 6 anos, prevenindo bullying.",
  },
  {
    emoji: "🔬",
    title: "Otoplastia Funcional",
    desc: "Restauração de funcionalidade em casos de deformidades congênitas.",
  },
  {
    emoji: "✨",
    title: "Correção de Orelhas em Abano",
    desc: "Técnica de sutura permanente com resultado imediato e visível.",
  },
  {
    emoji: "📋",
    title: "Avaliação Pré-Operatória",
    desc: "Análise facial completa com simulação 3D do resultado esperado.",
  },
  {
    emoji: "💊",
    title: "Acompanhamento Pós-Op",
    desc: "Retornos programados e suporte contínuo durante toda a recuperação.",
  },
];

export const credentials = [
  {
    icon: ShieldCheck,
    title: "Membro Titular SBCP",
    subtitle: "Sociedade Brasileira de Cirurgia Plástica",
    desc: "A Dra. Ana Beatriz é membro titular da SBCP — o único título reconhecido pelo CFM para especialistas em cirurgia plástica no Brasil.",
    highlight: true,
  },
  {
    icon: Award,
    title: "CRM-SP Ativo",
    subtitle: "Conselho Regional de Medicina — SP nº 45.892",
    desc: "Registro profissional ativo e regular, consultável publicamente no portal do CRM-SP a qualquer momento.",
    highlight: false,
  },
  {
    icon: Building2,
    title: "Centro Cirúrgico Certificado",
    subtitle: "ANVISA — Vigilância Sanitária",
    desc: "Nossa estrutura cirúrgica é certificada pela ANVISA, seguindo os mais rígidos protocolos de segurança assistencial.",
    highlight: false,
  },
  {
    icon: BookOpen,
    title: "Residência Hospital das Clínicas USP",
    subtitle: "Universidade de São Paulo",
    desc: "Formação em cirurgia plástica pelo HC-USP, referência mundial em medicina e o maior complexo hospitalar universitário da América Latina.",
    highlight: false,
  },
  {
    icon: Microscope,
    title: "Fellowship em Otoplastia",
    subtitle: "European Association of Plastic Surgeons",
    desc: "Treinamento avançado em técnicas europeias de remodelagem auricular, garantindo padrão internacional na execução dos procedimentos.",
    highlight: false,
  },
  {
    icon: Users,
    title: "+3.200 Cirurgias Realizadas",
    subtitle: "Experiência comprovada em otoplastia",
    desc: "Volume cirúrgico que proporciona precisão refinada e domínio técnico adquirido ao longo de 15 anos de prática exclusivamente focada em otoplastia.",
    highlight: false,
  },
];

export const steps: StepType[] = [
  {
    num: "01",
    icon: Stethoscope,
    title: "Consulta Inicial",
    desc: "Avaliação completa com a Dra. Ana Beatriz para entender suas expectativas e planejar o melhor caminho.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Planejamento Cirúrgico",
    desc: "Análise facial 3D e simulação de resultado para um plano totalmente personalizado ao seu caso.",
  },
  {
    num: "03",
    icon: HeartPulse,
    title: "Cirurgia Segura",
    desc: "Procedimento em centro cirúrgico próprio, com equipe especializada e protocolos rigorosos de segurança.",
  },
  {
    num: "04",
    icon: CalendarCheck,
    title: "Recuperação Acompanhada",
    desc: "Retornos programados e suporte contínuo para garantir resultados perfeitos e recuperação tranquila.",
  },
];

export const benefits: string[] = [
  "Orelhas reposicionadas com proporção harmoniosa ao rosto",
  "Cicatriz escondida naturalmente atrás da orelha",
  "Resultado permanente — a correção não reverte",
  "Retorno às atividades normais em 7 dias",
  "Procedimento em ambiente cirúrgico seguro e certificado",
];

export const team: TeamMemberType[] = [
  {
    name: "Dra. Ana Beatriz Carvalho",
    role: "Cirurgiã Plástica Chefe",
    credential: "CRM-SP 45.892",
    image: HomeTeamImageUrls[0],
  },
  {
    name: "Dr. Rafael Mendes",
    role: "Anestesiologista",
    credential: "CRM-SP 52.108",
    image: HomeTeamImageUrls[1],
  },
  {
    name: "Enf. Carla Santos",
    role: "Enfermeira-Chefe",
    credential: "COREN-SP 312.456",
    image: HomeTeamImageUrls[2],
  },
];

export const testimonials: TestimonialType[] = [
  {
    quote:
      "Sofri bullying por causa das orelhas durante toda a infância. Depois da otoplastia com a Dra. Ana Beatriz, minha vida mudou completamente. O resultado ficou incrivelmente natural — ninguém percebe que fiz cirurgia.",
    name: "Carlos Eduardo S.",
    context: "Correção de Orelhas em Abano",
    period: "Paciente há 2 anos",
    verified: true,
  },
  {
    quote:
      "A equipe me explicou cada etapa do processo com muita clareza e transparência. Me senti segura do início ao fim. O resultado superou minha expectativa. Ficou perfeito e completamente harmonioso com meu rosto.",
    name: "Mariana Costa P.",
    context: "Otoplastia Estética",
    period: "Paciente há 1 ano",
    verified: true,
  },
  {
    quote:
      "Minha filha de 8 anos fez o procedimento e toda a equipe foi excepcional com ela. Da consulta até o pós-operatório, sentimos total segurança. Hoje ela está muito mais confiante na escola.",
    name: "Fernanda Lopes",
    context: "Otoplastia Pediátrica — Mãe de paciente",
    period: "Paciente há 8 meses",
    verified: true,
  },
];
