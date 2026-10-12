import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="auth-page">
      <section aria-label="Codebase Graph account access" className="auth-layout">
        <div className="auth-intro">
          <p className="eyebrow">Understand the shape of your code</p>
          <h1>See how your code fits together.</h1>
          <p className="auth-description">
            Follow real imports across a repository, and see what depends on the file you are changing.
          </p>
          <div aria-hidden="true" className="auth-graphic">
            <svg viewBox="0 0 520 220" fill="none">
              <path d="M115 83h105m0 0 47-42m-47 42 47 48m0-90h88m-88 90h111m0 0 59 45m-59-45 59-48m-82-90v48m82 90v44" />
              <rect x="53" y="61" width="62" height="44" rx="5" />
              <rect x="220" y="19" width="62" height="44" rx="5" />
              <rect x="220" y="107" width="62" height="44" rx="5" />
              <rect x="355" y="19" width="62" height="44" rx="5" />
              <rect x="393" y="85" width="62" height="44" rx="5" />
              <rect x="393" y="151" width="62" height="44" rx="5" />
              <circle cx="220" cy="83" r="3" />
              <circle cx="329" cy="107" r="3" />
            </svg>
            <span className="auth-graphic-caption">Folders, files, and the paths between them</span>
          </div>
          <div className="auth-proofline">
            <span className="proof-indicator" aria-hidden="true" />
            <span>Built from parsed code, not guessed connections</span>
          </div>
        </div>
        <div className="auth-form-column">
          {children}
        </div>
      </section>
    </main>
  );
}
