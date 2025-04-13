import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="py-10 bg-teal-100">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            {/* logo */}
            <div className="flex items-center gap-2">
              <img className="w-16 h-16" src={logo} alt="logo" />
              <div className="text-left bg-gradient-to-br from-teal-500 via-teal-700 to-teal-900 bg-clip-text text-transparent">
                <h1 className="text-lg lg:text-xl font-bold">NextStep</h1>
                <p className="text-lg lg:text-xl font-bold">Scholarships</p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-600 mt-2">
              Unlock Your Academic Dreams with NextStep Scholarships, Your
              Partner in Higher Education.
            </p>
          </div>

          <div className="">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Useful Links
            </p>

            <ul className="mt-6 flex items-center gap-12">
              <li>
                <Link className="flex text-base text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="allScholarships"
                  className="flex text-base text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"
                >
                  All Scholarships
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="flex text-base text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"
                >
                  Help
                </Link>
              </li>
            </ul>
            <ul className="flex items-center space-x-3 mt-6">
              <li>
                <a className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-teal-600 focus:bg-teal-600">
                  <FaFacebook />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-teal-600 focus:bg-teal-600"
                >
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-teal-600 focus:bg-teal-600"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        <p className="text-sm text-center text-gray-600">
          © Copyright 2025, All Rights Reserved by{" "}
          <span className="bg-gradient-to-br from-teal-500 via-teal-700 to-teal-900 bg-clip-text text-transparent">
            NextStep Scholarships
          </span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
