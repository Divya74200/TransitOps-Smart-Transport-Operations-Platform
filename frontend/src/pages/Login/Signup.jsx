import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, UserCog } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Fleet Manager",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Temporary localStorage
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find(
      (u) => u.email === formData.email
    );

    if (alreadyExists) {
      alert("Email already registered");
      return;
    }

    users.push({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Account Created Successfully!");

    navigate("/", {
  replace: true,
});
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-2 text-center text-4xl font-bold text-blue-600">
          TransitOps
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Create Your Account
        </p>

        <form
          onSubmit={handleSignup}
          className="space-y-5"
        >

          <div className="relative">
            <User
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border py-3 pl-10"
            />
          </div>

          <div className="relative">
            <Mail
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border py-3 pl-10"
            />
          </div>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border py-3 pl-10"
            />
          </div>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg border py-3 pl-10"
            />
          </div>

          <div className="relative">
            <UserCog
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-lg border py-3 pl-10"
            >
              <option>Fleet Manager</option>
              <option>Driver</option>
              <option>Safety Officer</option>
              <option>Financial Analyst</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center">

          Already have an account?

          <Link
            to="/"
            className="ml-2 font-semibold text-blue-600"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}