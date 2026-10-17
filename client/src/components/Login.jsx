import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogin, useRegister } from "../hooks/useAuth";
import { useCompanyLogin, useCompanyRegister } from "../hooks/useCompany";
import { setResume, setShowLogin, setToken } from "../features/app/appSlice";
import { assets } from "../assets/assets";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [isTextSubmitted, setIsTextSubmitted] = useState(false);

  const { role } = useSelector((store) => store.app);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    img: "",
    resume: "",
  });

  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const loginCompanyMutation = useCompanyLogin();
  const registerCompanyMutation = useCompanyRegister();

  const isLogin = mode === "login";
  const activeMutation =
    role === "recruiter"
      ? isLogin
        ? loginCompanyMutation
        : registerCompanyMutation
      : isLogin
        ? loginMutation
        : registerMutation;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast.warn("Passwords don't match");
      return;
    }

    if (!isLogin && !isTextSubmitted) {
      setIsTextSubmitted(true);
      return;
    }

    const payload = {
      email: formData.email.trim(),
      password: formData.password,
    };

    if (!isLogin) {
      payload.name = formData.name.trim();
      payload.img = formData.img;
      payload.resume = formData.resume;
    }

    try {
      const data = await activeMutation.mutateAsync(payload);

      if (activeMutation.isError) {
        toast.error(activeMutation.error.message);
        return;
      }

      if (isLogin) {
        if (!data.token) {
          throw new Error("The server did not return an authentication token.");
        }

        dispatch(setToken(data.token));

        if (role === "user") {
          dispatch(setResume(data.user.resume));
        }

        dispatch(setShowLogin(false));
        toast.success("Logged in successfully.");

        if (role === "recruiter") {
          navigate("/dashboard");
        }
      } else {
        toast.success("Account created. Please log in.");
        setFormData((prev) => ({
          ...prev,
          password: "",
          confirmPassword: "",
        }));
        setIsTextSubmitted(false);
        setMode("login");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to complete your request.",
      );
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

        {!isLogin && !isTextSubmitted && (
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              {role === "recruiter" ? "Company Name" : "Name"}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              minLength={2}
              maxLength={100}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>
        )}

        {!isTextSubmitted && (
          <>
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
                autoComplete="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="john_doe@sample.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                {role === "recruiter" ? "Company Password" : "Password"}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                minLength={6}
                maxLength={100}
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="************"
              />
            </div>
          </>
        )}

        {!isLogin && !isTextSubmitted && (
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
              minLength={6}
              maxLength={100}
              autoComplete="new-password"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="************"
            />
          </div>
        )}

        {!isLogin && isTextSubmitted && (
          <div className="flex items-center justify-center gap-4 max-sm:flex-col">
            <label
              htmlFor="img"
              className="mb-2 flex gap-2 items-center text-sm font-medium"
            >
              {role === "recruiter" && "Upload Company Image"}
              <img
                src={`${formData.img ? URL.createObjectURL(formData.img) : assets.upload_area}`}
                alt="Upload image"
                style={{ borderRadius: "50%" }}
                className="rounded-full w-16"
              />
              <input
                id="img"
                name="img"
                type="file"
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, img: e.target.files[0] }));
                }}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 mb-2 outline-none focus:border-blue-500"
                hidden
              />
            </label>

            {role === "user" && (
              <label
                htmlFor="resume"
                className="mb-2 block text-sm font-medium"
              >
                <p
                  className={`bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 ${formData.resume && "bg-green-100 text-green-600"}`}
                >
                  {formData.resume ? formData.resume.name : "Select Resume"}
                </p>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      resume: e.target.files[0],
                    }));
                  }}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 mb-2 outline-none focus:border-blue-500"
                  hidden
                />
              </label>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={activeMutation.isPending}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {activeMutation.isPending
            ? "Please wait..."
            : isLogin
              ? "Login"
              : isTextSubmitted
                ? "Register"
                : "Continue"}
        </button>

        <p className="text-center text-sm text-slate-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            disabled={activeMutation.isPending}
            onClick={() => {
              setIsTextSubmitted(false);
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
