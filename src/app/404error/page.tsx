
import Link from "next/link";
import Hero from "./Hero";

export default function ErrorPage() {
  return (
    <>
      <Hero />
      <div className="min-h-screen bg-white w-full mx-auto">
        {/* Signup Form Section */}
        <section className="p-6 sm:p-10 relative bg-white pt-20 sm:pt-36 flex flex-col items-center w-full">
          <div className="w-full max-w-lg text-center">
            <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#FF9F0D] mb-4 sm:mb-6">
              404
            </h3>
            <p className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 w-full">
              Oops! Looks like something went wrong
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Page Cannot be found! We will have it figured out in no time.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6">
              Meanwhile, check out these fresh ideas:
            </p>
            {/* Button */}
            <Link href="/">
              <button
                className="bg-[#FF9F0D] text-white text-sm sm:text-base md:text-lg px-6 py-2 rounded hover:bg-[#e8890b]"
                style={{ width: "197px", height: "58px" }}
              >
                Go Back to Home
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
