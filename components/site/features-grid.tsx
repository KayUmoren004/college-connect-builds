import { Section } from "./section";
import { FeatureCard } from "./feature-card";
import { siteConfig } from "@/config/site";

export function FeaturesGrid() {
  return (
    <Section id="features">
      <div className="mb-8 sm:mb-12 max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
          Built for how students actually connect
        </h2>
        <p className="mt-3 text-base sm:mt-4 sm:text-lg text-muted-foreground">
          Study partners, event companions, ride shares — all in one verified platform.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}
