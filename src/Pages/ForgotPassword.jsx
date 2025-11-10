import React, { use, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const preEmail = location.state?.email || "";
  const [email, setEmail] = useState(preEmail);
  const { resetPassword } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        toast.success("Password reset link has been sent to your email!");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#f8f6f6] p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-[#403F3F] mb-6">
          Reset Your Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter your email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full border text-[14px] border-gray-300 bg-base-200 rounded-md px-3 py-2"
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#037965] hover:bg-[#026553] text-white font-medium py-2 rounded-md transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Remember password?{" "}
          <Link to="/login" className="text-[#037965] font-medium hover:underline">
            Go back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
