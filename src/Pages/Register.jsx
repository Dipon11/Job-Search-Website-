import React, { use, useContext } from 'react';
import { NavLink } from "react-router";
import img from "../assets/img3.png";
import city from "../assets/img4.jpg";
import { AuthContext } from '../provider/AuthProvider';



const Register = () => {
  const { createUser, setUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target)
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;
    console.log({ name, email, number, password })
    createUser(email, password)
      .then(res => {
        const user = res.user;
        // console.log(user)
        setUser(user)
      })
      .catch((error) => {

        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  return (
    <div className="min-h-screen flex flex-col lg:justify-center md:justify-center md:flex-row bg-white mt-10 lg:mt-10 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className=" w-full md:w-2/3 flex flex-col  items-center px-6 py-12 md:px-16 relative">
        <div className="w-full max-w-md">
          <p className="text-sm text-blue-600 text-center font-medium mb-2">
            Join us today!
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-950 mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Sign up to access all features.
          </p>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm font-medium mb-4">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          <div className="flex items-center gap-2 mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form */}
          <form onSubmit={handleRegister}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                name='name'
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                name='email'
                type="email"
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                name='number'
                type="tel"
                placeholder="+880 1723661912"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>


            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                name='password'
                type="password"
                placeholder="************"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>



            {/* Terms */}
            <div className="mb-6">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input type="checkbox" required className="mr-2" />
                I agree to the&nbsp;
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
                <span className="text-red-500">*</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2 rounded-lg font-medium hover:bg-blue-900 transition"
            >
              Register
            </button>

            <p className="text-sm text-center text-gray-500 mt-10">
              Already have an Account?{" "}
              <NavLink to="/auth/login">
                <span className="text-blue-600 hover:underline">Login</span>
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



      {/* Fixed Side Image */}
      <div className="lg:block md:hidden hidden w-full md:w-3/12 absolute right-60 bottom-95  p-6 md:p-12">
        <img src={img} alt="Register Graphic" className="w-36 h-auto" />
      </div>
    </div>

  );
};

export default Register;