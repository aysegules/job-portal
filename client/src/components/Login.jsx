import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const [mode, setMode] = useState("login");

  const { role } = useSelector((store) => store.app);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isLogin = mode === "login";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast.warn("Passwords don't match");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            {isLogin ? "Welcome" : "Create Account"}
          </h1>

          <p className="mt-2 text-slate-500">
            {isLogin ? "Login in to your account." : "Create a new account."}
          </p>
        </div>

        {!isLogin && (
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              {role === "recruiter" ? "Company Name" : "Name"}
            </label>
            <input
              id="name"
              name="name"
              type="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            {role === "recruiter" ? "Company Email" : "Email"}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="john_doe@sample.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            {role === "recruiter" ? "Company Password" : "Password"}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="************"
          />
        </div>

        {!isLogin && (
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium"
            >
              {role === "recruiter"
                ? "Confirm Company Password"
                : "Confirm Password"}
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="************"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="text-center text-sm text-slate-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => {
              setMode(isLogin ? "register" : "login");
            }}
            className="font-semibold text-blue-600 hover:underline"
          >
            <span className="mx-1">{isLogin ? "Register" : "Login"}</span>
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
