"use client";

import { useSyncExternalStore } from "react";
import type { Language } from "@/lib/translations";

// Bahasa bisa dipilih manual lewat toggle di header (tersimpan di localStorage).
// Default pertama kali mengikuti bahasa browser.
const STORAGE_KEY = "lotc.lang";
const listeners = new Set<() => void>();
let current: Language | null = null;

function isLanguage(value: unknown): value is Language {
  return value === "id" || value === "en";
}

function getLanguage(): Language {
  if (current) return current;
  let stored: string | null = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch {
    // localStorage diblokir: fallback ke bahasa browser
  }
  current = isLanguage(stored)
    ? stored
    : navigator.language.toLowerCase().startsWith("en")
      ? "en"
      : "id";
  return current;
}

export function setLanguage(lang: Language) {
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // storage penuh / diblokir: bahasa tetap berlaku di sesi ini
  }
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useLanguage(): Language {
  // getSnapshot harus return referensi yang stabil — `current` di-cache modul-level.
  return useSyncExternalStore(subscribe, getLanguage, () => "id" as const);
}
