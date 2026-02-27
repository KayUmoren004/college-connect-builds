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
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}
