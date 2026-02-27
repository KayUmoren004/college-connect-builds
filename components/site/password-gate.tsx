"use client";

import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "0110110";
const STORAGE_KEY = "cc-install-auth";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center">
      <h2 className="font-display text-xl font-bold">Access Required</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Enter the access code to view this page.
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Access code"
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-center font-mono text-sm outline-none focus:border-primary"
          autoFocus
        />
        {error && (
          <p className="mt-2 text-xs text-destructive">Incorrect code</p>
        )}
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
