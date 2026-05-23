import { contactInfo } from "@/shared/constants/contact.constants";

export default function ContactContactWaysSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 lg:col-span-2 space-y-6">
        {contactInfo.map((info) => {
          const Icon = info.icon;
          const Wrapper = info.href ? "a" : "div";
          return (
            <Wrapper
              key={info.label}
              {...(info.href ? { href: info.href } : {})}
              className="items-start gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 block"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-1">
                  {info.label}
                </p>
                <p className="text-foreground font-medium text-sm">
                  {info.value}
                </p>
              </div>
            </Wrapper>
          );
        })}

        {/* Map Placeholder */}
      </div>
    </section>
  );
}
