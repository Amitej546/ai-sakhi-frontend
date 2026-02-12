import { useLanguageStore } from "../store/language.store";

const translations = {
  en: {
    assistant: "AI Sakhi – Government Assistant",
    placeholder: "Ask about schemes, health, safety...",
    emergency: "Emergency",
    send: "Send",
    tutorTitle: "Government Schemes for Women",
  },
  hi: {
    assistant: "एआई सखी – सरकारी सहायक",
    placeholder: "योजना, स्वास्थ्य, सुरक्षा के बारे में पूछें...",
    emergency: "आपातकाल",
    send: "भेजें",
    tutorTitle: "महिलाओं के लिए सरकारी योजनाएं",
  },
  te: {
    assistant: "ఏఐ సఖి – ప్రభుత్వ సహాయకురాలు",
    placeholder: "పథకాలు, ఆరోగ్యం, భద్రత గురించి అడగండి...",
    emergency: "అత్యవసరం",
    send: "పంపండి",
    tutorTitle: "మహిళల కోసం ప్రభుత్వ పథకాలు",
  },
};

export const useTranslate = () => {
  const { lang } = useLanguageStore();
  return translations[lang];
};
