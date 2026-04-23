"use client";

import { useCallback, useLayoutEffect, useState } from "react";

const STORAGE_KEY = "colorMode";
type Mode = "system" | "light" | "dark";

const applyMode = (mode: Mode) => {
  if (mode === "system") {
    document.documentElement.removeAttribute("data-color-mode");
  } else {
    document.documentElement.setAttribute("data-color-mode", mode);
  }
  window.dispatchEvent(new Event("manifesto-color-mode"));
};

const readMode = (): Mode => {
  if (typeof window === "undefined") return "system";
  const v = window.localStorage.getItem(STORAGE_KEY);
  if (v === "light" || v === "dark" || v === "system") return v;
  return "system";
};

export function ColorModeControl() {
  const [mode, setMode] = useState<Mode>("system");

  useLayoutEffect(() => {
    const m = readMode();
    setMode(m);
    applyMode(m);
  }, []);

  const setAndPersist = useCallback((next: Mode) => {
    setMode(next);
    applyMode(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  return (
    <div
      className="manifesto__colorBar"
      role="group"
      aria-label="Color theme"
    >
      <span className="manifesto__colorLabel">Theme</span>
      <div className="manifesto__colorChips" role="group" aria-label="Choose theme">
        <button
          type="button"
          className="manifesto__colorChip"
          onClick={() => setAndPersist("system")}
          aria-pressed={mode === "system"}
        >
          Auto
        </button>
        <button
          type="button"
          className="manifesto__colorChip"
          onClick={() => setAndPersist("light")}
          aria-pressed={mode === "light"}
        >
          Light
        </button>
        <button
          type="button"
          className="manifesto__colorChip"
          onClick={() => setAndPersist("dark")}
          aria-pressed={mode === "dark"}
        >
          Dark
        </button>
      </div>
    </div>
  );
}
