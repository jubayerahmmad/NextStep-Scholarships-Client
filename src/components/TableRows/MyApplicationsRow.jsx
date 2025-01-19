import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const MyApplicationsRow = ({
  application,
  index,
  refetch,
  setReviewModalOpen,
  getScholarshipId,
  setUpdateModalOpen,
  getApplicationId,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const {
    _id,
    scholarshipId,
    universityName,
    universityAddress,
    subjectCategory,
    degree,
    applicationFees,
    serviceCharge,
    status,
    feedback,
  } = application;

  const handleCancelApplication = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate.delete(`/delete-application/${_id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Application has been cancelled.",
          icon: "success",
        });
      }
    });
  };

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
          {feedback ? (
            <>
              {feedback.slice(0, 30)}...
              <button className="btn btn-xs btn-link">Read More</button>
            </>
          ) : (
            "No Feedback Given"
          )}
        </div>
      </td>
      <td>
        <span>${applicationFees}</span>
      </td>
      <td>
        <span>${serviceCharge}</span>
      </td>
      <td>
        <span
          className={`px-2 py-1  ${status === "Rejected" && "text-red-500"}  ${
            status === "Pending" && "text-yellow-600"
          }  ${status === "Completed" && "text-green-500"}  ${
            status === "Processing" && "text-teal-800"
          }`}
        >
          {status}
        </span>
      </td>
      <td>
        <div className="flex">
          <Link to={`/scholarship-details/${scholarshipId}`}>
            <button className="btn btn-ghost btn-sm">
              <FaInfoCircle size={20} />{" "}
            </button>
          </Link>
          <button
            onClick={() => {
              if (status !== "Pending") {
                return toast.warning(
                  "Cannot Update while its processing or already Completed!"
                );
              }
              setUpdateModalOpen(true);
              getApplicationId(_id);
            }}
            className="btn btn-ghost btn-sm"
          >
            <FaEdit size={20} />{" "}
          </button>
          <button
            onClick={handleCancelApplication}
            className="btn btn-ghost btn-sm"
          >
            <GiCancel size={20} />
          </button>
        </div>
      </td>
      <td>
        <button
          onClick={() => {
            setReviewModalOpen(true);
            getScholarshipId(scholarshipId);
          }}
          className="btn btn-sm btn-accent"
        >
          Review
        </button>
      </td>
    </tr>
  );
};

export default MyApplicationsRow;
