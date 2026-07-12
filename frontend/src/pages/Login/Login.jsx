import { useState } from "react";
import { Eye, EyeOff, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      formData.email === "admin@transit.com" &&
      formData.password === "password123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left */}

      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white items-center justify-center">

        <div className="text-center px-12">

          <Truck size={70} className="mx-auto mb-6" />

          <h1 className="text-5xl font-bold">
            TransitOps
          </h1>

          <p className="mt-5 text-lg text-blue-100">
            Smart Transport Operations Platform
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-100">

        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
        >

          <h2 className="mb-2 text-3xl font-bold">
            Welcome Back
          </h2>

          <p className="mb-8 text-gray-500">
            Login to continue
          </p>

          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-600">
              {error}
            </div>
          )}

          <div className="mb-5">

            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@transit.com"
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />

          </div>

          <div className="mb-6">

            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-lg border p-3 pr-12 outline-none focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          <button
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>

          <div className="mt-6 text-center text-sm text-gray-500">

            Demo Credentials

            <br />

            admin@transit.com

            <br />

            password123

          </div>

        </form>

      </div>

    </div>
  );
}