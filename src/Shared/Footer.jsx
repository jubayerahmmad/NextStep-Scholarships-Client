import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="py-10 bg-teal-100">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* logo */}
            <div className="flex items-center gap-2">
              <img className="w-16 h-16" src={logo} alt="" />
              <div className="text-left bg-gradient-to-br from-cyan-500 via-cyan-700 to-cyan-900 bg-clip-text text-transparent">
                <h1 className="text-lg lg:text-xl font-bold">NextStep</h1>
                <p className="text-lg lg:text-xl font-bold">Scholarships</p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Unlock Your Academic Dreams with NextStep Scholarships, Your
              Partner in Higher Education.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-cyan-600 focus:bg-cyan-600"
                >
                  <FaFacebook />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-cyan-600 focus:bg-cyan-600"
                >
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-cyan-600 focus:bg-cyan-600"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"
                >
                  All Scholarships
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form className="mt-6">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-teal-800 transition-all duration-200 bg-teal-50 border border-gray-200 rounded-md focus:outline-none focus:border-cyan-600 caret-cyan-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 mt-3 font-semibold text-white transition-all duration-200 bg-cyan-600 rounded-md hover:bg-cyan-700 focus:bg-cyan-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2025, All Rights Reserved by{" "}
          <span className="bg-gradient-to-br from-cyan-500 via-cyan-700 to-cyan-900 bg-clip-text text-transparent">
            NextStep Scholarships
          </span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
