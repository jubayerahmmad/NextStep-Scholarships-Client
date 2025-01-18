import {
  FaClock,
  FaHourglass,
  FaLocationArrow,
  FaMoneyBill,
} from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import Heading from "../../components/Heading";
import Reviews from "../../components/Cards/Reviews";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import useRole from "../../hooks/useRole";
import { FaGraduationCap } from "react-icons/fa6";

const ScholarshipDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: scholarship = {}, isLoading } = useQuery({
    queryKey: ["scholarship"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/scholarship/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  // TODO: Apply functionality

  const {
    image,
    description,
    applicationFees,
    universityName,
    subjectCategory,
    applicationDeadline,
    city,
    country,
    scholarshipName,
    subjectName,
    stipend,
    postDate,
    degree,
    worldRank,
  } = scholarship;

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 py-6">
      <Helmet>
        <title>Scholarship Details | NextStep Scholarships</title>
      </Helmet>
      <Heading Heading="Check Full Details"></Heading>
      <div className="divider"></div>
      <div className="w-full rounded-sm duration-500 mt-6 relative animate__animated animate__zoomInDown">
        <span className="absolute top-2 right-4 badge badge-accent badge-lg">
          World Rank: {worldRank}
        </span>
        <div className="lg:flex items-center gap-4">
          {/* University Image */}
          <figure className="p-4">
            <img
              src={image}
              alt={`Logo`}
              className="h-20 w-20 lg:h-36 lg:w-36 object-cover rounded-full"
            />
          </figure>
          <div className="space-y-2">
            {/* Scholarship Name */}
            <div>
              <h2 className="text-xl lg:text-4xl font-bold text-gray-800">
                {scholarshipName}{" "}
              </h2>
              <span className=""> By {universityName}</span>
            </div>

            {/* degree */}
            <p className="text-sm flex items-center gap-2">
              <FaGraduationCap /> {degree}
            </p>
            {/* Location */}
            <p className="text-sm flex items-center gap-2">
              <FaLocationArrow /> {city}, {country}
            </p>
            {/* postDate */}
            <p className="text-sm flex items-center gap-2">
              <FaClock /> Posted On:{" "}
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
              <IoBookSharp /> Subject Category:{" "}
              <span className="font-medium">{subjectCategory}</span>
            </p>

            {/* stipend */}
            <p className="text-sm flex items-center gap-2">
              <FaMoneyBill /> Stipend:{" "}
              <span className="font-medium">
                {stipend === "0" ? "Self-Funded" : `$${stipend} /month`}
              </span>
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="space-y-4 py-5">
          <h2 className="text-xl lg:text-4xl font-bold mb-4 font-playfair bg-gradient-to-br from-cyan-800 via-teal-800 to-teal-50 bg-clip-text text-transparent">
            {subjectName}{" "}
            <span className="badge badge-success badge-md text-white">
              ${applicationFees}
            </span>
          </h2>
          {/* Scholarship Details */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold underline">Description</h3>
            <p className="first-letter:text-2xl text-xs lg:text-base">
              {description}
            </p>
          </div>
          <Link to={`/checkout/${id}`}>
            <button
              className={`btn btn-outline text-teal-700 hover:bg-teal-800 btn-sm mt-1`}
            >
              Apply
            </button>
          </Link>
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
