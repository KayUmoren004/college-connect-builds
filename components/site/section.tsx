import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-12 md:py-20 lg:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}
