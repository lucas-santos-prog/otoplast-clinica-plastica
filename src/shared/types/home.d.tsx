import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type ServiceType = { emoji: string; title: string; desc: string };

export type CredentialType = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  subtitle: string;
  desc: string;
  highlight: boolean;
};

export type StepType = {
  num: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  desc: string;
};

export type TeamMemberType = {
  name: string;
  role: string;
  credential: string;
  image: string;
};

export type TestimonialType = {
  quote: string;
  name: string;
  context: string;
  period: string;
  verified: boolean;
};
