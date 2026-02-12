import { useEffect, useRef, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import VoiceWave from "../../components/ui/VoiceWave";
import EmergencyModal from "../../components/emergency/EmergencyModal";
import { useTranslate } from "../../hooks/useTranslate";

interface Message {
  sender: "user" | "ai";
  text?: string;
  schemes?: Scheme[];
}

interface Scheme {
  title: string;
  description: string;
}

export default function TutorChat() {
  const t = useTranslate();

  const [messages, setMessages] = useState<Message[]>(() =>
    JSON.parse(localStorage.getItem("sakhi_chat") || "[]") || [
      {
        sender: "ai",
        text: "🌸 Namaste! I am AI Sakhi. How can I assist you today?",
      },
    ]
  );

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  /* Persist + Auto Scroll */
  useEffect(() => {
    localStorage.setItem("sakhi_chat", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* Text-to-Speech */
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    window.speechSynthesis.speak(utterance);
  };

  /* Speech-to-Text */
  const startListening = () => {
    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();
    setListening(true);

    recognition.onresult = (event: any) => {
      setInput(event.results[0][0].transcript);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
  };

  /* AI Logic */
  const generateReply = (text: string): Message => {
    const lower = text.toLowerCase();

    if (lower.includes("scheme")) {
      return {
        sender: "ai",
        schemes: [
          {
            title: "PM Ujjwala Yojana",
            description: "Free LPG Gas Connection for Women",
          },
          {
            title: "Jan Dhan Yojana",
            description: "Zero balance bank account scheme",
          },
        ],
      };
    }

    if (lower.includes("emergency") || lower.includes("help")) {
      setShowEmergency(true);
      return {
        sender: "ai",
        text: "🚨 Emergency detected. Redirecting you for assistance.",
      };
    }

    if (lower.includes("health"))
      return {
        sender: "ai",
        text:
          "🩺 Please visit your nearest Primary Health Center or ASHA worker.",
      };

    if (lower.includes("income"))
      return {
        sender: "ai",
        text:
          "💰 Self-Help Groups and digital payments can improve financial independence.",
      };

    if (lower.includes("hindi"))
      return {
        sender: "ai",
        text: "🌸 नमस्ते! मैं आपकी सहायता के लिए यहाँ हूँ।",
      };

    if (lower.includes("telugu"))
      return {
        sender: "ai",
        text: "🌸 నమస్తే! నేను మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాను.",
      };

    return {
      sender: "ai",
      text:
        "🌸 I am here to guide you regarding government schemes, safety, and empowerment.",
    };
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = generateReply(text);
      setMessages((prev) => [...prev, reply]);
      if (reply.text) speak(reply.text);
      setTyping(false);
    }, 800);
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto flex flex-col h-[85vh]">

        {/* Header */}
        <h1 className="text-2xl font-bold mb-4 dark:text-white">
          {t.assistant}
        </h1>

        {/* Chat Container */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900 p-4 md:p-6 rounded-xl shadow space-y-4">

          {messages.map((msg, index) => (
            <div key={index}>

              {/* Text Message */}
              {msg.text && (
                <div
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-xs md:max-w-md ${
                      msg.sender === "user"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 dark:bg-gray-800 dark:text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              )}

              {/* Scheme Cards */}
              {msg.schemes && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  {msg.schemes.map((scheme, i) => (
                    <div
                      key={i}
                      className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-xl shadow"
                    >
                      <h3 className="font-bold text-indigo-600 dark:text-indigo-400">
                        {scheme.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {scheme.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {typing && (
            <div className="text-sm text-gray-500 animate-pulse">
              AI Sakhi is typing...
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Sticky Input (Mobile Optimized) */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-900 pt-4 mt-4">
          <div className="flex gap-2">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 border rounded-xl px-4 py-3 text-base dark:bg-gray-800 dark:text-white"
            />

            <button
              onClick={startListening}
              className={`px-4 rounded-xl ${
                listening
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {listening ? <VoiceWave /> : "🎤"}
            </button>

            <button
              onClick={() => sendMessage(input)}
              className="bg-indigo-600 text-white px-5 rounded-xl text-base"
            >
              {t.send}
            </button>

          </div>
        </div>

        {/* Emergency Modal */}
        {showEmergency && (
          <EmergencyModal onClose={() => setShowEmergency(false)} />
        )}
      </div>
    </AppLayout>
  );
}
