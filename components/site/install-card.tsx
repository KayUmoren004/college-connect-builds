import { siteConfig } from "@/config/site";

export function InstallCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center">
      <h1 className="font-display text-2xl font-bold">
        CollegeConnect
        <span className="ml-2 rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
          Dev
        </span>
      </h1>
      <p className="mt-2 font-mono text-sm text-muted-foreground">
        v{siteConfig.appVersion}
      </p>

      <a
        href={siteConfig.installUrl}
        className="mt-6 block rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Install App
      </a>

      <div className="mt-6 space-y-1 text-xs leading-relaxed text-muted-foreground">
        <p>
          Open this page in <strong className="text-foreground">Safari</strong>.
        </p>
        <p>After installing, go to</p>
        <p>
          <strong className="text-foreground">
            Settings &rarr; General &rarr; VPN & Device Management
          </strong>
        </p>
        <p>and trust the developer certificate.</p>
      </div>
    </div>
  );
}
