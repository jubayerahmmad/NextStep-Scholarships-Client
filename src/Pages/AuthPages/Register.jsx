import bg from "../../assets/loginbg.png";
import loginGif from "../../assets/login.gif";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaArrowLeft, FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col bg-cover bg-center justify-center items-center min-h-screen p-6"
    >
      <Helmet>
        <title>Register | NextStep Scholarships</title>
      </Helmet>
      <div className="card relative flex-col-reverse lg:flex-row lg:card-side bg-base-100 shadow-xl animate__animated animate__fadeInLeft">
        <div className="card-body lg:w-2/3 bg-cyan-950">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="btn btn-sm btn-outline text-white hover:bg-transparent hover:border-teal-500 hover:text-teal-500"
              >
                <FaArrowLeft /> Back{" "}
              </button>
              {/* logo */}
              <div className="flex justify-center items-center gap-2">
                <img className="w-16 h-16" src={logo} alt="" />
                <div className="text-left bg-gradient-to-br from-teal-200 via-teal-300 to-teal-500 bg-clip-text text-transparent">
                  <h1 className="text-lg lg:text-xl font-bold">NextStep</h1>
                  <p className="text-lg lg:text-xl font-bold">Scholarships</p>
                </div>
              </div>
            </div>

            {/* login */}
            <h1 className="text-xl text-white font-bold">Register Now</h1>

            <button className="w-full text-center border border-[#e5eaf2] rounded-md py-2 px-4 flex justify-center items-center mx-auto gap-[10px] text-[1rem] text-white transition-all duration-200">
              <img
                src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                alt="google logo"
                className="w-[23px]"
              />
              Sign in with Google
            </button>
          </div>
          <div className="divider divider-accent text-teal-400">OR</div>
          {/* login form */}
          <form className="">
            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 block w-full p-2.5"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5 relative">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Your Password"
                className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 block w-full p-2.5"
                required
              />
              <button
                className="text-white absolute right-3 bottom-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <button
              type="submit"
              className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Register
            </button>
          </form>
          <p className="text-center text-white">
            Have an Account?{" "}
            <Link to="/login" className="text-teal-600 font-bold underline">
              {" "}
              Login Here
            </Link>
          </p>
        </div>
        <figure className="lg:w-1/3">
          <img src={loginGif} alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default Register;
