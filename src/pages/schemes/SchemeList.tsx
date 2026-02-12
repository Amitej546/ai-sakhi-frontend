import { useTranslate } from "../../hooks/useTranslate";

const schemes = [
  {
    title: "Ujjwala Yojana",
    desc: "Free LPG Gas Connection for Women",
  },
  {
    title: "Jan Dhan Yojana",
    desc: "Zero Balance Bank Account",
  },
  {
    title: "PM Matru Vandana Yojana",
    desc: "Pregnancy Cash Support",
  },
  {
    title: "Mudra Yojana",
    desc: "Business Loan for Women",
  },
];

export default function SchemeList() {
  const t = useTranslate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        {t.tutorTitle}
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {schemes.map((s, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-indigo-600">
              {s.title}
            </h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
