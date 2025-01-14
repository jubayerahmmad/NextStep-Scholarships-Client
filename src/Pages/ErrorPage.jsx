import { Link } from "react-router-dom";
import errorImg from "../assets/error.gif";
import { BiArrowBack } from "react-icons/bi";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lg:flex gap-3 items-center max-w-5xl mx-auto ">
        <img src={errorImg} alt="" />
        <div className="space-y-4">
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
