import { FaUniversity } from "react-icons/fa";
import { FaAddressCard, FaClock, FaGraduationCap } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const ApplicationDetailsModal = ({
  isModalOpen,
  setisModalOpen,
  singleData,
}) => {
  const {
    applicantPhoto,
    applicantName,
    appliedDate,
    city,
    country,
    scholarshipName,
    degree,
    universityName,
    status,
  } = singleData;
  return (
    <div>
      <div
        className={`${
          isModalOpen ? " visible" : " invisible"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
      >
        <div
          className={`${
            isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
          } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
        >
          <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
            <h1 className="text-[1.5rem] font-bold">
              Application Details of {applicantName}
            </h1>
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setisModalOpen(false)}
            />
          </div>

          {/* info */}

          <div>
            <div className="lg:flex items-center gap-4 p-4">
              {/* University Image */}
              <figure className="p-4">
                <img
                  src={applicantPhoto}
                  alt={`Logo`}
                  className="h-20 w-20 object-cover rounded-full"
                />
              </figure>
              <div className="space-y-2">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {applicantName}{" "}
                  </h2>
                </div>

                <p
                  className={`text-xs badge ${
                    status === "Rejected" ? "badge-error" : "badge-accent"
                  }`}
                >
                  {status}
                </p>

                <p className="text-xs lg:text-sm flex items-center gap-2">
                  <IoBookSharp /> Scholarship Name:{" "}
                  <span className="font-medium">{scholarshipName}</span>
                </p>

                <p className="text-xs lg:text-sm flex items-center gap-2">
                  <FaUniversity />
                  University Name:{" "}
                  <span className="font-medium">{universityName}</span>
                </p>

                <p className="text-xs lg:text-sm flex items-center gap-2">
                  <FaGraduationCap />
                  Degree: {degree}
                </p>

                <p className="text-xs lg:text-sm flex items-center gap-2">
                  <FaAddressCard /> {city}, {country}
                </p>

                <p className="text-xs lg:text-sm flex items-center gap-2">
                  <FaClock /> Applied On:{" "}
                  <span className="font-medium">
                    {new Date(appliedDate).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;
