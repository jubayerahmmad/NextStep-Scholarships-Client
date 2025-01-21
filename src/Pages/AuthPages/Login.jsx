import bg from "../../assets/loginbg.png";
import loginGif from "../../assets/login.gif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaArrowLeft, FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleLogin } = useAuth();
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoad(true);
    const email = data?.email;
    const password = data?.password;

    try {
      await loginUser(email, password);
      navigate(`${state ? state : "/"}`);
      toast.success("Login Successful");
      setLoad(false);
      reset();
    } catch (error) {
      setLoad(false);
      toast.error(error.code.split("/")[1].split("-").join(" ").toUpperCase());
    }
  };

  const handleGoogleLogin = async () => {
    setLoad(true);
    try {
      const { user } = await googleLogin();

      const userInfo = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      };
      //  save user to the data
      await axiosPublic.post(`/save-user/${user?.email}`, userInfo);

      navigate(`${state ? state : "/"}`);
      toast.success("User Sign In Successful");
      setLoad(false);
    } catch (error) {
      toast.error(error.code.split("/")[1].split("-").join(" ").toUpperCase());
      setLoad(false);
    }
  };

  return (
    <div>
      {load ? (
        <Loader />
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col bg-cover bg-center justify-center items-center min-h-screen p-6 overflow-hidden"
          >
            <Helmet>
              <title>Login | NextStep Scholarships</title>
            </Helmet>
            <div className="card relative lg:card-side bg-base-100 shadow-xl animate__animated animate__fadeInRight">
              <figure className="lg:w-1/3">
                <img src={loginGif} alt="Album" />
              </figure>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="absolute left-3 top-3 btn btn-sm btn-outline text-black hover:bg-transparent hover:border-teal-500 hover:text-teal-500"
              >
                <FaArrowLeft /> Back{" "}
              </button>
              <div className="card-body lg:w-2/3 bg-cyan-950">
                <div className="text-center space-y-3">
                  {/* logo */}
                  <div className="flex justify-center items-center gap-2">
                    <img className="w-16 h-16" src={logo} alt="" />
                    <div className="text-left bg-gradient-to-br from-teal-200 via-teal-300 to-teal-500 bg-clip-text text-transparent">
                      <h1 className="text-lg lg:text-xl font-bold">NextStep</h1>
                      <p className="text-lg lg:text-xl font-bold">
                        Scholarships
                      </p>
                    </div>
                  </div>

                  {/* login */}
                  <h1 className="text-xl text-white font-bold">Login Now</h1>
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full text-center border border-[#e5eaf2] rounded-md py-2 px-4 flex justify-center items-center mx-auto gap-[10px] text-[1rem] text-white transition-all duration-200"
                  >
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5">
                    <div className="flex items-center">
                      <label className="block mb-2 text-sm font-medium text-white">
                        Your Email
                      </label>
                      {errors.email && (
                        <span className="text-red-500 mb-2 font-bold">*</span>
                      )}
                    </div>
                    <input
                      type="email"
                      id="email"
                      {...register("email", { required: true })}
                      className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 block w-full p-2.5"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-5 relative">
                    <div className="flex items-center">
                      <label className="block mb-2 text-sm font-medium text-white">
                        Your Password
                      </label>
                      {errors.password && (
                        <span className="text-red-500 mb-2 font-bold">*</span>
                      )}
                    </div>
                    <input
                      {...register("password", { required: true })}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Your Password"
                      className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 block w-full p-2.5"
                    />

                    <button
                      type="button"
                      className="text-white absolute right-3 bottom-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-teal-700 hover:bg-teal-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Login
                  </button>
                </form>
                <p className="text-center text-white">
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-teal-600 font-bold underline"
                  >
                    {" "}
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
