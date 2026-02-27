"use client";

import { ChevronDown } from "lucide-react";
import { Accordion } from "@base-ui/react/accordion";
import { Section } from "./section";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-10 text-center font-display text-3xl font-bold tracking-tight md:text-4xl">
          Frequently asked questions
        </h2>

        <Accordion.Root>
          {siteConfig.faq.map((item, i) => (
            <Accordion.Item key={i} className="border-b border-border">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left text-sm font-medium transition-colors hover:text-primary [&[data-panel-open]>svg]:rotate-180">
                  {item.question}
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-muted-foreground transition-transform duration-200"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="overflow-hidden text-sm leading-relaxed text-muted-foreground data-[ending-style]:animate-accordion-close data-[starting-style]:animate-accordion-open">
                <div className="pb-5">{item.answer}</div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Section>
  );
}
