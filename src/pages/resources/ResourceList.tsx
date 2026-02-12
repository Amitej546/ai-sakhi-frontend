import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";

const resources = [
  {
    id: 1,
    title: "Basic Digital Literacy for Women",
    level: "Beginner",
    category: "Digital Literacy",
    description: "Learn how to use smartphones, internet, and digital services safely.",
  },
  {
    id: 2,
    title: "Financial Independence & SHG Training",
    level: "Beginner",
    category: "Financial Inclusion",
    description: "Understanding savings, UPI payments, SHGs, and small business basics.",
  },
  {
    id: 3,
    title: "Women Health & Hygiene Awareness",
    level: "Beginner",
    category: "Healthcare",
    description: "Maternal health, nutrition, hygiene, and government health schemes.",
  },
  {
    id: 4,
    title: "Women Safety, Legal Rights & Emergency Help",
    level: "Intermediate",
    category: "Safety & Legal Aid",
    description: "Know your rights, emergency contacts, and legal protections.",
  },
  {
    id: 5,
    title: "Participating in Local Governance",
    level: "Intermediate",
    category: "Governance",
    description: "Learn about Panchayats, voting rights, and community participation.",
  },
];

export default function ResourceList() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Learning Resources for Women Empowerment
          </h1>
          <p className="text-gray-600 mt-1">
            Curated learning modules focused on skills, safety, health, and empowerment.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((res) => (
              <div
                key={res.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-indigo-700">
                  {res.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Level: {res.level}
                </p>

                <span className="inline-block mt-3 text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                  {res.category}
                </span>

                <p className="text-sm text-gray-600 mt-3">
                  {res.description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
