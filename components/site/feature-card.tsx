"use client";

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = keyof typeof Icons;

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const IconComponent = Icons[icon as IconName] as React.ComponentType<{
    size?: number;
    className?: string;
  }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group rounded-2xl border border-border bg-card p-6",
        "transition-colors duration-300 hover:border-primary/30 hover:bg-card/80"
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        {IconComponent && <IconComponent size={24} className="text-primary" />}
      </div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
