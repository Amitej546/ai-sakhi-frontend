import { useNavigate } from "react-router-dom";

export default function FloatingSOS() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/emergency")}
      className="
        fixed
        bottom-28
        md:bottom-24
        right-4
        md:right-6
        z-40
        bg-red-600
        hover:bg-red-700
        text-white
        w-14
        h-14
        md:w-16
        md:h-16
        rounded-full
        shadow-xl
        flex
        items-center
        justify-center
        transition
        active:scale-95
      "
    >
      🚨
    </button>
  );
}
