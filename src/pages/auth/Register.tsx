import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields required");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(user));

    toast.success("Registration successful! Please login.");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <form
        onSubmit={handleRegister}
        className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Create Account
        </h2>

        <input
          placeholder="Name"
          className="w-full mt-4 border p-2 rounded dark:bg-gray-800"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full mt-3 border p-2 rounded dark:bg-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-3 border p-2 rounded dark:bg-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded">
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
