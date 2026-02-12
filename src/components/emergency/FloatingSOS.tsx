import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function FloatingSOS() {
  const navigate = useNavigate();

  const handleSOS = () => {
    toast.error("🚨 Emergency Activated");
    navigate("/emergency");
  };

  return (
    <button
      onClick={handleSOS}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50 animate-pulse"
      aria-label="Emergency SOS"
    >
      🚨
    </button>
  );
}
