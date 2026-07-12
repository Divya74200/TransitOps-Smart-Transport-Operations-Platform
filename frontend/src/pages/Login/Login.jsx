import { useState } from "react";
import { Lock, Mail, UserCog } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("Fleet Manager");

  const handleLogin = (e) => {
  e.preventDefault();

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password &&
      u.role === role
  );

  if (!user) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("email", user.email);
  localStorage.setItem("role", user.role);
  localStorage.setItem("name", user.name);

  navigate("/dashboard", {
  replace: true,
});
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-2 text-center text-4xl font-bold text-blue-600">
          TransitOps
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Smart Transport Operations Platform
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Email */}

          <div className="relative">

            <Mail
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-lg border py-3 pl-10 pr-3"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <Lock
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-lg border py-3 pl-10 pr-3"
            />

          </div>

          {/* Role */}

          <div className="relative">

            <UserCog
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full rounded-lg border py-3 pl-10 pr-3"
            >
              <option>Fleet Manager</option>
              <option>Driver</option>
              <option>Safety Officer</option>
              <option>Financial Analyst</option>
            </select>

          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>
        
        <p className="mt-6 text-center">

  Don't have an account?

  <Link
    to="/signup"
    className="ml-2 font-semibold text-blue-600"
  >
    Sign Up
  </Link>

</p>

      </div>

    </div>
  );
}