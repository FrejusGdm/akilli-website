"use client";

import { useCallback, useLayoutEffect, useState } from "react";

const STORAGE_KEY = "manifestoView";
type View = "default" | "editorial";

const readView = (): View => {
  if (typeof window === "undefined") return "default";
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "editorial" ? "editorial" : "default";
};

const applyToDocument = (view: View) => {
  document.documentElement.setAttribute("data-manifesto-view", view);
};

export function ManifestoStyleToggle() {
  const [view, setView] = useState<View>("default");
  const isEditorial = view === "editorial";

  useLayoutEffect(() => {
    const next = readView();
    setView(next);
    applyToDocument(next);
  }, []);

  const handleClick = useCallback(() => {
    setView((prev) => {
      const next: View = prev === "editorial" ? "default" : "editorial";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      applyToDocument(next);
      return next;
    });
  }, []);

  return (
    <button
      type="button"
      className="manifesto__styleToggle"
      onClick={handleClick}
      aria-pressed={isEditorial}
      aria-label={
        isEditorial
          ? "Switch to original layout"
          : "Switch to editorial layout with side column"
      }
    >
      {isEditorial ? "Original layout" : "Try editorial layout"}
    </button>
  );
}
