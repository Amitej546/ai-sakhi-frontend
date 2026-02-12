import { translations } from "../i18n/translations";
import { useLanguageStore } from "../store/language.store";

export function useLanguage() {
  const { lang } = useLanguageStore();
  return (key: string) => {
    const keys = key.split(".");
    let value: any = translations[lang];
    keys.forEach((k) => (value = value?.[k]));
    return value || key;
  };
}
