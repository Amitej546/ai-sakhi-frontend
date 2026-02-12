import { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import toast from "react-hot-toast";

export default function EmergencyPage() {
  const [location, setLocation] = useState<string | null>(null);

  const handleLocationShare = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setLocation(mapsUrl);
        toast.success("📍 Location captured successfully");
      },
      () => {
        toast.error("Unable to retrieve location");
      }
    );
  };

  const callEmergency = () => {
    window.location.href = "tel:112";
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto bg-red-100 dark:bg-red-900 p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-red-600 dark:text-red-300">
          🚨 Emergency Assistance
        </h1>

        <div className="mt-6 space-y-4">

          <button
            onClick={callEmergency}
            className="w-full bg-red-600 text-white py-3 rounded-xl text-lg"
          >
            📞 Call 112 (Emergency)
          </button>

          <button
            onClick={handleLocationShare}
            className="w-full bg-red-500 text-white py-3 rounded-xl text-lg"
          >
            📍 Share My Location
          </button>

          {location && (
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-4">
              <p className="text-sm break-words">
                <strong>Location Link:</strong>
              </p>
              <a
                href={location}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline text-sm"
              >
                {location}
              </a>
            </div>
          )}

          <button
            className="w-full bg-red-400 text-white py-3 rounded-xl text-lg"
          >
            📩 Alert Trusted Contacts (Coming Soon)
          </button>

        </div>
      </div>
    </AppLayout>
  );
}
