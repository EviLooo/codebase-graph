"use client";

import { useEffect, useRef } from "react";

type ThemePreference = "system" | "light" | "dark";

const storageKey = "codebase-graph-theme";

function setTheme(preference: ThemePreference) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = preference === "dark" || (preference === "system" && prefersDark);

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
}

function isThemePreference(value: string): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

export function ThemeControl() {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    const initialPreference: ThemePreference =
      stored === "light" || stored === "dark" ? stored : "system";

    if (selectRef.current) selectRef.current.value = initialPreference;
    setTheme(initialPreference);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      const currentPreference = window.localStorage.getItem(storageKey);
      if (currentPreference !== "light" && currentPreference !== "dark") {
        setTheme("system");
      }
    };

    media.addEventListener("change", updateSystemTheme);
    return () => media.removeEventListener("change", updateSystemTheme);
  }, []);

  function changePreference(value: string) {
    if (!isThemePreference(value)) return;

    const nextPreference = value;
    window.localStorage.setItem(storageKey, nextPreference);
    setTheme(nextPreference);
  }

  return (
    <label className="theme-control">
      <span>Theme</span>
      <select
        aria-label="Theme preference"
        defaultValue="system"
        onChange={(event) => changePreference(event.target.value)}
        ref={selectRef}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
