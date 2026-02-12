import { create } from "zustand";

type Lang = "en" | "hi" | "te";

interface LanguageState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: (localStorage.getItem("lang") as Lang) || "en",

  setLang: (lang) => {
    localStorage.setItem("lang", lang);
    set({ lang });
  },
}));
