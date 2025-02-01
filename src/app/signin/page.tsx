import React from "react";
import Hero from "./Hero";
import Image from "next/image";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";

export default function Signin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Sign-In Form Section */}
      <div
        id="signin2"
        className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md mt-20 w-full max-w-md"
      >
        <h2
          id="signup2"
          className="text-2xl font-bold mb-6 self-start"
        >
          Sign in
        </h2>

        <form className="w-full">
          {/* Email Input */}
          <div className="relative mb-4">
            <MdOutlineMail className="absolute left-3 top-1/2 w-6 h-6 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <MdLockOutline className="absolute left-3 top-1/2 w-6 h-6 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Remember Me */}
          <div
            id="rememberMe2"
            className="flex items-center gap-2 mb-6"
          >
            <input
              type="checkbox"
              id="rememberMeCheckbox"
              className="h-4 w-4 text-yellow-500 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMeCheckbox"
              className="text-sm text-gray-700"
            >
              Remember me?
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            id="submit1"
            type="submit"
            className="w-full py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Forget Password */}
        <div className="mt-4 text-sm text-gray-600 w-full text-right">
          <a href="#" className="hover:underline">
            Forget password?
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-6 w-full relative">
          <span className="bg-white px-4 text-gray-500 z-10">OR</span>
          <div className="absolute top-1/2 w-full h-px bg-gray-300"></div>
        </div>

        {/* Sign Up with Google and Apple */}
        <div className="flex flex-col gap-4 w-full">
          <button className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            <span className="text-gray-700 font-medium">
              Sign up with Google
            </span>
          </button>

          <button className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <Image
              src="/APPLE.png"
              alt="Apple"
              width={20}
              height={20}
            />
            <span className="text-gray-700 font-medium">
              Sign up with Apple
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
