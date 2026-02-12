import AppLayout from "../../components/layout/AppLayout";

const schemes = [
  {
    name: "Ujjwala Yojana",
    desc: "Free LPG Gas Connection for Women",
  },
  {
    name: "Jan Dhan Yojana",
    desc: "Zero Balance Bank Account",
  },
  {
    name: "PM Matru Vandana Yojana",
    desc: "Pregnancy Cash Support",
  },
  {
    name: "Mudra Yojana",
    desc: "Business Loan for Women",
  },
];

export default function SchemeList() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Government Schemes for Women
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {schemes.map((scheme, i) => (
          <div
            key={i}
            className="
              bg-white 
              dark:bg-gray-900 
              p-6 
              rounded-xl 
              shadow 
              hover:shadow-lg 
              transition
            "
          >
            <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              {scheme.name}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {scheme.desc}
            </p>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
