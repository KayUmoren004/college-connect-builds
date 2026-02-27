"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { IPhoneMockup } from "./iphone-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 md:pb-32 md:pt-36">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                v{siteConfig.appVersion}
              </span>
            </div>

            <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              {siteConfig.tagline.split(",")[0]},
              <br />
              <span className="text-primary">
                {siteConfig.tagline.split(",")[1]?.trim() || "Connected."}
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              {siteConfig.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                disabled
                className="rounded-xl bg-primary/20 px-6 py-3 text-sm font-semibold text-primary cursor-not-allowed"
              >
                App Store - Coming Soon
              </button>
              <button
                disabled
                className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-muted-foreground cursor-not-allowed"
              >
                Google Play - Coming Soon
              </button>
            </div>
          </motion.div>

          {/* Right column - mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex lg:justify-center"
          >
            <IPhoneMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
