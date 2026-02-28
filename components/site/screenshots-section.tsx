"use client";

import { motion } from "motion/react";
import { Section } from "./section";
import { IPhoneMockup } from "./iphone-mockup";

export function ScreenshotsSection() {
  return (
    <Section id="screenshots" className="overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
          Designed for students
        </h2>
        <p className="mt-3 text-base sm:mt-4 sm:text-lg text-muted-foreground">
          Clean, fast, and built for how you actually use your phone.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={i === 1 ? "z-10 scale-105" : "hidden opacity-70 md:block"}
          >
            <IPhoneMockup />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
