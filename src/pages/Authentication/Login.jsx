import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import logo from "../../assets/images/logooooo.png";
import loginLottieData from "../../assets/login.json";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      toast.success("Signin Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      await signIn(email, password);
      toast.success("Signin Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] py-12 bg-gradient-to-br from-gray-100 to-gray-200 container px-4 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login - Digital World Technology</title>
        <link rel="canonical" href="https://fullstackservice1.web.app" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg shadow-lg bg-white">
        <Lottie animationData={loginLottieData} className="w-full" />

        <div className="w-full px-6 py-8 md:px-8">
          <div className="flex justify-center mx-auto">
            <img className="w-14 h-auto sm:h-10" src={logo} alt="Logo" />
          </div>

          <p className="mt-3 text-xl font-bold text-center text-blue-600 ">
           
            <Typewriter
              words={[`Digital World Technology`]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </p>

          <div
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center justify-center mt-6 text-gray-700 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 hover:shadow-sm"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-medium text-center">
              Sign in with Google
            </span>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b border-gray-300"></span>
            <div className="text-xs text-center text-gray-600 uppercase hover:underline">
              or login with email
            </div>
            <span className="w-1/5 border-b border-gray-300"></span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /\S+@\S+\.\S+/,
                })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                  })}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 w-full py-3 text-white bg-blue-600 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-xs font-medium text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
