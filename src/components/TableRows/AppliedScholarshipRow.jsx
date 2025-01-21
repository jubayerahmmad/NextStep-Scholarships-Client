import { RxCross2 } from "react-icons/rx";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaCircleInfo } from "react-icons/fa6";

const AppliedScholarshipRow = ({
  applications,
  i,
  setisModalOpen,
  handleDetails,
  getFeedbackId,
  setFeedbackModalOpen,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const {
    _id,
    subjectCategory,
    scholarshipCategory,
    applicantName,
    applicantEmail,
    status,
    applicantPhoto,
    appliedDate,
    applicationDeadline,
  } = applications;

  const handleUpdateStatus = async (updatedStatus) => {
    if (status === updatedStatus) return;

    try {
      await axiosPrivate.patch(`/change-status/${_id}`, {
        status: updatedStatus,
      });
      toast.success("Status Updated");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelApplication = async () => {
    if (status === "Completed" || status === "Processing") {
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosPrivate.patch(`/change-status/${_id}`, {
          status: "Rejected",
        });
        toast.success("Application Rejected");
      }
    });
  };

  return (
    <tr className="hover">
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-8 w-8 lg:h-12 lg:w-12">
              <img
                referrerPolicy="no-referrer"
                src={applicantPhoto}
                alt="Avatar"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-xs">{applicantName}</div>
            <div className="text-xs">{applicantEmail}</div>
          </div>
        </div>
      </td>
      <td>{scholarshipCategory}</td>
      <td>{subjectCategory}</td>
      <td>{new Date(appliedDate).toLocaleDateString()}</td>
      <td>{new Date(applicationDeadline).toLocaleDateString()}</td>
      <td>
        <select
          defaultValue={status}
          disabled={status === "Completed" || status === "Rejected"}
          onChange={(e) => handleUpdateStatus(e.target.value)}
          className={`px-2 py-1 rounded-lg text-white disabled:cursor-not-allowed ${
            status === "Pending" && "bg-teal-500"
          }  ${status === "Processing" && "bg-green-800"}  ${
            status === "Rejected" && "bg-red-500"
          }  ${status === "Completed" && "bg-green-500"} `}
        >
          <option disabled value="">
            Update Status
          </option>
          <option disabled={status === "Processing"} value="Pending">
            Pending
          </option>
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
          <option value="Rejected">Rejected</option>
        </select>
      </td>
      <td>
        <div className="flex gap-1">
          <button
            disabled={status === "Rejected" || status === "Completed"}
            onClick={handleCancelApplication}
            className={`btn btn-error disabled:cursor-not-allowed btn-xs`}
          >
            <RxCross2 size={20} />
          </button>
          <button
            onClick={() => {
              setisModalOpen(true);
              handleDetails(_id);
            }}
            className="btn btn-xs"
          >
            <FaCircleInfo size={20} />
          </button>
        </div>
      </td>
      <td>
        <button
          onClick={() => {
            getFeedbackId(_id);
            setFeedbackModalOpen(true);
          }}
          className="btn btn-xs btn-accent"
        >
          Feedback
        </button>
      </td>
    </tr>
  );
};

export default AppliedScholarshipRow;
