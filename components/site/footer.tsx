import { Container } from "./container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <span className="font-display text-lg font-bold">
              {siteConfig.name}
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              Built for RIT students by RIT students.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Made by Group 1
        </div>
      </Container>
    </footer>
  );
}
