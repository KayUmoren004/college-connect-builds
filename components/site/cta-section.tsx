import { Section } from "./section";

export function CTASection() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[350px] sm:h-[400px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[60px] sm:blur-[100px]" />
      </div>

      <div className="text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight md:text-5xl">
          Ready to Connect?
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-md text-base sm:text-lg text-muted-foreground">
          Join your campus community. Available soon on iOS and Android.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <button
            disabled
            className="rounded-xl bg-primary/20 px-6 sm:px-8 py-3.5 text-sm font-semibold text-primary cursor-not-allowed w-full sm:w-auto min-h-[44px]"
          >
            App Store - Coming Soon
          </button>
          <button
            disabled
            className="rounded-xl border border-border bg-card px-6 sm:px-8 py-3.5 text-sm font-semibold text-muted-foreground cursor-not-allowed w-full sm:w-auto min-h-[44px]"
          >
            Google Play - Coming Soon
          </button>
        </div>
      </div>
    </Section>
  );
}
