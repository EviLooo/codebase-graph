import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { AccountControls } from "./components/account-controls";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codebase Graph",
  description: "Explore and understand your codebase.",
};

const themeBootstrap = `try {
  const preference = localStorage.getItem("codebase-graph-theme") || "system";
  const dark = preference === "dark" || (preference === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
} catch {
  document.documentElement.dataset.theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <ClerkProvider>
          <div className="app-frame">
            <header className="app-header">
              <Link aria-label="Codebase Graph home" className="brand" href="/">
                <span className="brand-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 7.25h5.5v4.5H6zM12.5 12.25H18v4.5h-5.5zM11.5 9.5h2.75v2.75" />
                    <path d="M11.5 9.5v5" />
                  </svg>
                </span>
                <span className="brand-name">Codebase Graph</span>
              </Link>
              <AccountControls />
            </header>
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
