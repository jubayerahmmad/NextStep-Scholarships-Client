import { FaHourglass, FaLocationArrow, FaMoneyBill } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import Reviews from "../../components/Cards/Reviews";

const ScholarshipDetails = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 py-6">
      <Heading Heading="Check Full Details"></Heading>
      <div className="divider"></div>
      <div className="w-full rounded-sm duration-500 mt-6">
        <div className="flex items-center">
          {/* University Image */}
          <figure className="p-4">
            <img
              src="https://i.ibb.co.com/zxcDpWs/harvard.webp"
              alt={`Logo`}
              className="h-20 w-20 lg:h-36 lg:w-36 object-cover rounded-full"
            />
          </figure>
          <div className="space-y-2">
            {/* University Name */}
            <h2 className="text-xl lg:text-5xl flex items-center gap-2 font-bold text-gray-800">
              Harvard University{" "}
              <span className="badge badge-accent badge-xs lg:badge-lg">
                Graduate
              </span>
            </h2>

            {/* Location */}
            <p className="text-sm flex items-center gap-2">
              <FaLocationArrow /> California, USA
            </p>
            {/* Deadline */}
            <p className="text-sm flex items-center gap-2">
              <FaHourglass /> Deadline:{" "}
              <span className="font-medium">12-5-2025</span>
            </p>

            {/* Subject Category */}
            <p className="text-sm flex items-center gap-2">
              <IoBookSharp /> Subject:{" "}
              <span className="font-medium">Engineering,Science</span>
            </p>

            {/* Application Fee */}
            <p className="text-sm flex items-center gap-2">
              <FaMoneyBill /> Application Fee:{" "}
              <span className="font-medium">$999</span>
            </p>
            {/* Rating */}
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-bold text-gray-800">4</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="space-y-4 p-5">
          {/* Scholarship Details */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold underline">Description</h3>
            <p className="first-letter:text-2xl">
              The Harvard Global Scholars Program is designed to attract
              outstanding students from around the world. The scholarship covers
              tuition fees, provides a monthly stipend for living expenses, and
              offers additional funding for research opportunities. It is aimed
              at fostering innovative research and interdisciplinary learning.
              Applicants must demonstrate academic excellence, leadership
              potential, and a commitment to societal impact.
            </p>
          </div>
          <button className="btn btn-outline text-teal-700 hover:bg-teal-800 btn-sm">
            Apply
          </button>
        </div>
      </div>

      <div className="divider"></div>

      {/* reviews */}
      <div className="my-6">
        <Reviews />
      </div>
    </div>
  );
};

export default ScholarshipDetails;
