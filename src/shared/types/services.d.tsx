export type ServiceType = {
  emoji: string;
  title: string;
  desc: string;
  duration?: string | undefined;
  recovery?: string | undefined;
  anesthesia?: string | undefined;
  indication?: string | undefined;
};

export type FAQType = {
  q: string;
  a: string;
};
