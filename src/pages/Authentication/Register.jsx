import Lottie from "lottie-react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logooooo.png";
import registerLottieData from "../../assets/register.json";
import { AuthContext } from "../../providers/AuthProvider";
// import { Typewriter } from "react-simple-typewriter";

const Registration = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, createUser, updateUserProfile, setUser } =
    useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const pass = form.password.value;

    try {
      // User Registration
      const result = await createUser(email, pass);
      await updateUserProfile(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });
      toast.success("Signup Successful");
      navigate("/");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signin Successful");
      navigate("/");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r  py-12 px-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register - Digital World Technology</title>
        <link rel="canonical" href="https://fullstackservice1.web.app" />
      </Helmet>
      <div className="flex items-center w-full max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl lg:max-w-5xl">
        <div className="w-full px-8 py-8 md:px-10 lg:w-1/2">
          <div className="flex justify-center mx-auto mb-6">
            <img className="w-14 h-auto" src={logo} alt="Logo" />
          </div>

          <p className="mt-3 text-2xl text-center text-black font-semibold">
            Create Your Free Account
            {/* <Typewriter
                  words={[`Create Your Free Account`]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                /> */}
          </p>

          {/* Google Sign-in Button */}
          <div
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center justify-center mt-6 text-black transition-colors duration-300 transform border rounded-xl hover:bg-[#3a31d8] hover:text-white shadow-md"
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
            <span className="w-5/6 px-4 py-3 font-semibold text-center">
              Sign in with Google
            </span>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <div className="text-sm text-center text-black uppercase hover:underline">
              or Register with Email
            </div>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSignUp} className="mt-6 space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="block w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                autoComplete="photo"
                className="block w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="hidden lg:block lg:w-1/2">
          <Lottie animationData={registerLottieData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
