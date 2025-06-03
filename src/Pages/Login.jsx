import React, { use, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { NavLink } from "react-router";
import img from "../assets/img3.png";
import city from "../assets/img4.jpg"; // bottom-left city image
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password })
    signIn(email, password).then((userCredential) => {

      const user = userCredential.user;
      console.log(user)
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)    // ..
      });
  }
  return (
    <div className="min-h-screen flex  lg:justify-center md:justify-center md:flex-row bg-white mt-10 lg:mt-10 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className=" w-full md:w-2/3 flex flex-col  items-center px-6 py-12 md:px-16 relative">
        <div className="w-full max-w-md">
          <p className="text-sm text-blue-600 text-center font-medium mb-2">
            Welcome back!
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-950 mb-2">
            Member Login
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Access to all features. No credit card required.
          </p>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm font-medium mb-4">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          <div className="flex items-center gap-2 mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username or Email address<span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Steven Job"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="************"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <button
                type="submit"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? <LuEye /> : <LuEyeClosed />}
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2 rounded-lg font-medium hover:bg-blue-900 transition"
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-500 mt-10">
              Don't have an Account?{" "}
              <NavLink to="/auth/register">
                <span className="text-blue-600 hover:underline">Sign up</span>
              </NavLink>
            </p>
          </form>
        </div>

        {/* Bottom City Image */}
        <img
          src={city}
          alt="city"
          className="absolute hidden lg:block bottom-45 -left-50 w-142 h-50 md:w-72 opacity-90"
        />
      </div>

      {/* Right Side Image */}
      <div className="lg:block md:hidden hidden w-full md:w-3/12 absolute  right-30 bottom-95  p-6  ml-3 md:p-12">
        <img src={img} alt="Login Graphic" className="w-28 md:w-42 h-auto" />
      </div>
    </div>
  );
};

export default Login;
