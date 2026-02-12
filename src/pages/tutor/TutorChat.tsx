import { useState, useEffect, useRef } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { useLanguageStore } from "../../store/language.store";
import { translations } from "../../i18n/translations";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export default function TutorChat() {
  const { language } = useLanguageStore();
  const t = translations[language as keyof typeof translations];

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- Reset On Language Change ---------------- */
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: t.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, [language]);

  /* ---------------- Scroll ---------------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* ---------------- Smart Response Engine ---------------- */
  const generateSmartResponse = (text: string) => {
    const lower = text.toLowerCase();

    if (lower.includes("scheme")) return t.schemeReply;
    if (lower.includes("safety")) return t.safetyReply;
    if (lower.includes("education")) return t.educationReply;
    if (lower.includes("loan") || lower.includes("finance"))
      return t.financeReply;

    return t.defaultReply;
  };

  /* ---------------- Streaming Typing Effect ---------------- */
  const streamResponse = (fullText: string) => {
    let index = 0;
    setIsTyping(true);

    const interval = setInterval(() => {
      index++;

      setMessages((prev) => {
        const last = prev[prev.length - 1];

        if (last?.role === "assistant") {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...last,
            content: fullText.slice(0, index),
          };
          return updated;
        }

        return [
          ...prev,
          {
            role: "assistant",
            content: fullText.slice(0, index),
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ];
      });

      if (index >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);
  };

  /* ---------------- Send Message ---------------- */
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    const response = generateSmartResponse(input);

    setTimeout(() => {
      streamResponse(response);
    }, 400);

    setInput("");
  };

  /* ---------------- Voice to Text ---------------- */
  const toggleVoice = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang =
      language === "hi"
        ? "hi-IN"
        : language === "te"
        ? "te-IN"
        : "en-IN";

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event: any) => {
      setInput(event.results[0][0].transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-80px)]">

        {/* Header */}
        <div className="max-w-6xl mx-auto w-full px-4 mb-6">
          <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">
            {t.aiTitle}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {t.aiSubtitle}
          </p>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-40 space-y-6">

          {messages.map((msg, index) => (
            <div key={index} className="max-w-6xl mx-auto">

              <div
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[90%] md:max-w-[65%]
                    px-5 py-4 rounded-2xl
                    whitespace-pre-line shadow-sm
                    ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white"
                        : "bg-white dark:bg-gray-800 dark:text-gray-200 border dark:border-gray-700"
                    }
                  `}
                >
                  {msg.content}

                  <div className="text-xs mt-2 text-right opacity-70">
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="text-sm text-gray-400 px-4 max-w-6xl mx-auto">
              AI Sakhi is typing...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-4 z-30">
          <div className="max-w-6xl mx-auto flex gap-2">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 p-3 rounded-xl border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={toggleVoice}
              className={`w-12 rounded-xl flex items-center justify-center ${
                isListening
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              🎙
            </button>

            <button
              onClick={sendMessage}
              className="px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
            >
              {t.send}
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
