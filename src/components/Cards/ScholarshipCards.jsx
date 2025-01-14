const ScholarshipCards = ({
  universityName = "Harvard University",
  universityLogo = "https://i.ibb.co.com/zxcDpWs/harvard.webp",
  scholarshipCategory = "Graduate",
  location = { city: "Cambridge", country: "USA" },
  deadline = "31st March 2025",
  subjectCategory = "Engineering, Science",
  applicationFee = 75,
  rating = 4.8,
  onDetailsClick,
}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
      {/* University Image */}
      <figure className="p-4">
        <img
          src={universityLogo}
          alt={`${universityName} Logo`}
          className="h-20 w-20 object-cover rounded-full"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* University Name */}
        <h2 className="card-title text-lg font-bold text-gray-800">
          {universityName}
        </h2>

        {/* Scholarship Category */}
        <p className="text-sm text-blue-600 font-medium">
          Scholarship Category:{" "}
          <span className="font-semibold">{scholarshipCategory}</span>
        </p>

        {/* Location */}
        <p className="text-sm text-gray-600">
          📍 {location.city}, {location.country}
        </p>

        {/* Deadline */}
        <p className="text-sm text-red-500">
          ⏳ Deadline: <span className="font-medium">{deadline}</span>
        </p>

        {/* Subject Category */}
        <p className="text-sm text-gray-600">
          📘 Subject: <span className="font-medium">{subjectCategory}</span>
        </p>

        {/* Application Fee */}
        <p className="text-sm text-gray-600">
          💵 Application Fee:{" "}
          <span className="font-medium">${applicationFee}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500">⭐</span>
          <span className="font-bold text-gray-800">{rating.toFixed(1)}</span>
        </div>

        {/* Scholarship Details Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm" onClick={onDetailsClick}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCards;
