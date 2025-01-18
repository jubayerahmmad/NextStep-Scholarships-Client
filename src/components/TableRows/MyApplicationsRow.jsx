import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
const MyApplicationsRow = ({ application, index }) => {
  // console.log(application);
  const {
    scholarshipId,
    universityName,
    universityAddress,
    subjectCategory,
    degree,
    applicationFees,
    serviceCharge,
    subjectName,
    status,
  } = application;
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>
        <div>
          <div className="font-bold text-xs">{universityName}</div>
          <div className="opacity-50">
            {universityAddress.city}, {universityAddress.country}
          </div>
        </div>
      </td>

      <td>
        {degree}
        <br />
        <span className="badge badge-ghost badge-xs text-xs">
          {subjectCategory}
        </span>
      </td>
      <td>
        <div className="flex flex-wrap">
          {`${"Congratulations! Your application has been accepted.".slice(
            0,
            18
          )}...`}{" "}
          <button className="btn btn-xs btn-link">Read More</button>
        </div>
      </td>
      <td>
        <span>${applicationFees}</span>
      </td>
      <td>
        <span>${serviceCharge}</span>
      </td>
      <td>{status}</td>
      <td>
        <div className="flex">
          <Link to={`/scholarship-details/${scholarshipId}`}>
            <button className="btn btn-ghost btn-sm">
              <FaInfoCircle size={20} />{" "}
            </button>
          </Link>
          <button className="btn btn-ghost btn-sm">
            <FaEdit size={20} />{" "}
          </button>
          <button className="btn btn-ghost btn-sm">
            <GiCancel size={20} />
          </button>
        </div>
      </td>
      <td>
        <button className="btn btn-sm btn-accent">Review</button>
      </td>
    </tr>
  );
};

export default MyApplicationsRow;
