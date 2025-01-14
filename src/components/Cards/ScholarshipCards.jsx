import { FaMoneyBill } from "react-icons/fa";
import { FaHourglass, FaLocationArrow } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ScholarshipCards = ({
  universityName = "Harvard University",
  universityLogo = "https://i.ibb.co.com/zxcDpWs/harvard.webp",
  scholarshipCategory = "Graduate",
  location = { city: "Cambridge", country: "USA" },
  deadline = "31st March 2025",
  subjectCategory = "Engineering, Science",
  applicationFee = 75,
  rating = 4.8,
}) => {
  return (
    <div className="w-full shadow-lg hover:shadow-xl duration-500 rounded-md border border-gray-200">
      <div className="flex items-center">
        {/* University Image */}
        <figure className="p-4">
          <img
            src={universityLogo}
            alt={`${universityName} Logo`}
            className="h-20 w-20 object-cover rounded-full"
          />
        </figure>
        <div>
          {/* University Name */}
          <h2 className="lg:text-lg flex items-center gap-2 font-bold text-gray-800">
            {universityName}{" "}
            <span className="badge badge-accent badge-xs xl:badge-sm">
              {scholarshipCategory}
            </span>
          </h2>

          {/* Location */}
          <p className="text-sm flex items-center gap-2">
            <FaLocationArrow /> {location.city}, {location.country}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className=" p-5">
        {/* Deadline */}
        <p className="text-sm flex items-center gap-2">
          <FaHourglass /> Deadline:{" "}
          <span className="font-medium">{deadline}</span>
        </p>

        {/* Subject Category */}
        <p className="text-sm flex items-center gap-2">
          <IoBookSharp /> Subject:{" "}
          <span className="font-medium">{subjectCategory}</span>
        </p>

        {/* Application Fee */}
        <p className="text-sm flex items-center gap-2">
          <FaMoneyBill /> Application Fee:{" "}
          <span className="font-medium">${applicationFee}</span>
        </p>

        {/* Scholarship Details Button */}
        <div className="flex items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-bold text-gray-800">{rating.toFixed(1)}</span>
          </div>
          <Link to={`/scholarship-details/1`}>
            <button className="btn btn-outline text-teal-700 hover:bg-teal-800 btn-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCards;
