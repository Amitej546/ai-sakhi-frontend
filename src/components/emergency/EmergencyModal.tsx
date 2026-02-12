import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

export default function EmergencyModal({ onClose }: Props) {
  const [location, setLocation] = useState<string>("Fetching location...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location access not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation(
          `Lat: ${pos.coords.latitude}, Long: ${pos.coords.longitude}`
        );
      },
      () => {
        setLocation("Location permission denied.");
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-xl">

        <h2 className="text-xl font-bold text-red-600 mb-4">
          🚨 Emergency Assistance
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Your current location:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm mb-6">
          {location}
        </div>

        <div className="flex gap-3">
          <a
            href="tel:112"
            className="flex-1 bg-red-600 text-white py-2 rounded-xl text-center"
          >
            Call 112
          </a>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 dark:bg-gray-700 py-2 rounded-xl"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
