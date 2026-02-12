import { useNavigate } from "react-router-dom";

export default function EmergencyModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-96 text-center">
        <h2 className="text-xl font-bold text-red-600">
          🚨 Emergency Detected
        </h2>
        <p className="mt-3">
          You are being redirected to Emergency Assistance.
        </p>

        <button
          onClick={() => {
            onClose();
            navigate("/emergency");
          }}
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
