import { useState } from "react";
import { forgotPassword } from "../api/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    alert("If account exists, reset instructions sent to email.");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-96"
      >
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter Email"
          className="border p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="bg-purple-500 text-white py-2 px-4 rounded w-full">
          Reset Password
        </button>
      </form>
    </div>
  );
}
