import { Link } from "react-router-dom";
import errorImg from "../assets/error.gif";
import { BiArrowBack } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="lg:flex gap-3 items-center max-w-5xl mx-auto ">
        <img src={errorImg} alt="error" />
        <div className="space-y-4  px-4 py-2">
          <p className="text-4xl">
            The Page you are looking for is not Available!
          </p>
          <Link
            to="/"
            className="btn bg-teal-600 hover:bg-teal-900 text-white font-playfair"
          >
            <BiArrowBack /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
