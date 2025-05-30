import { FaHourglassStart, FaMoneyBill } from "react-icons/fa";
import { FaGraduationCap, FaHourglass, FaLocationArrow } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ScholarshipCards = ({ scholarship }) => {
  const {
    _id,
    scholarshipName,
    universityName,
    country,
    applicationFees,
    scholarshipCategory,
    subjectCategory,
    city,
    degree,
    applicationDeadline,
    image,
    postDate,
    averageRating,
    numberOfReviews,
  } = scholarship || {};

  return (
    <div className="w-full shadow-lg hover:shadow-xl hover:shadow-teal-100 hover:bg-gradient-to-b from-transparent via-teal-50 to-teal-100 transition-all duration-500 rounded-2xl border animate__animated animate__fadeIn">
      <div className="relative flex items-center py-6 xl:py-4">
        {/* University Image */}
        <figure className="p-2">
          <img
            src={image}
            alt={`${universityName} Logo`}
            className="h-20 w-20 object-cover rounded-full border-2"
          />
        </figure>
        <div className="">
          {/* University Name */}
          <h2 className="lg:text-lg flex items-center gap-2 font-bold text-gray-800">
            {universityName}{" "}
          </h2>
          {/* degree */}
          <p className="text-sm flex items-center gap-2">
            <FaGraduationCap /> {degree}
          </p>
          {/* Location */}
          <p className="text-sm flex items-center gap-2">
            <FaLocationArrow /> {city}, {country}
          </p>
        </div>
        <span className="absolute right-2 top-2 badge badge-accent badge-sm">
          {scholarshipCategory}
        </span>
      </div>

      {/* Card Body */}
      <div className="px-5 pb-2 h-32">
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-br from-cyan-800 via-teal-800 to-teal-50 bg-clip-text text-transparent">
          {scholarshipName}
        </h2>
        {/* Post date */}
        <p className="text-sm flex items-center gap-2">
          <FaHourglassStart /> Posted On:{" "}
          <span className="font-medium">
            {new Date(postDate).toLocaleDateString()}
          </span>
        </p>
        {/* Deadline */}
        <p className="text-sm flex items-center gap-2">
          <FaHourglass /> Deadline:{" "}
          <span className="font-medium">
            {new Date(applicationDeadline).toLocaleDateString()}
          </span>
        </p>

        {/* Subject Category */}
        <p className="text-sm flex items-center gap-2">
          <IoBookSharp /> Subject:{" "}
          <span className="font-medium">{subjectCategory}</span>
        </p>

        {/* Application Fee */}
        <p className="text-sm flex items-center gap-2">
          <FaMoneyBill /> Application Fee:{" "}
          <span className="font-medium">${applicationFees}</span>
        </p>
      </div>
      {/* Scholarship Details Button */}
      <div className="flex items-center justify-between px-5 pb-4 mt-8 lg:mt-4">
        {/* Rating */}
        {averageRating ? (
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">
              <FcRating />
            </span>
            <span className="font-bold text-gray-800">
              {averageRating} <small>/ {numberOfReviews} Review(s)</small>{" "}
            </span>
          </div>
        ) : (
          <small>⭐ No Reviews</small>
        )}
        <Link to={`/scholarship-details/${_id}`}>
          <button className="btn btn-outline text-teal-700 hover:bg-teal-800 btn-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipCards;
