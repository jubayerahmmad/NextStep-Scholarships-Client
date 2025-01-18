import { RxCross2 } from "react-icons/rx";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";

const AppliedScholarshipRow = ({
  applications,
  i,
  refetch,
  setisModalOpen,
  handleDetails,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const {
    _id,
    degree,
    subjectCategory,
    scholarshipCategory,
    universityName,
    applicantName,
    applicantEmail,
    scholarshipName,
    status,
  } = applications;

  const handleUpdateStatus = async (updatedStatus) => {
    if (status === updatedStatus) return;

    try {
      await axiosPrivate.patch(`/change-status/${_id}`, {
        status: updatedStatus,
      });
      // console.log(data);
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
        // console.log(data);
        toast.success("Application Rejected");
      }
    });
  };

  return (
    <tr className="hover">
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold text-xs">{applicantName}</div>
            <div className="text-xs">{applicantEmail}</div>
          </div>
        </div>
      </td>
      <td>{scholarshipName}</td>
      <td>{scholarshipCategory}</td>
      <td>{universityName}</td>
      <td>{degree}</td>
      <td>{subjectCategory}</td>
      <td>
        <select
          defaultValue={status}
          onChange={(e) => handleUpdateStatus(e.target.value)}
          className={`px-2 py-1 rounded-lg ${
            status === "Pending" && "bg-teal-500"
          }  ${status === "Processing" && "bg-green-800"}  ${
            status === "Rejected" && "bg-red-500"
          }  ${status === "Completed" && "bg-green-500"} text-white`}
        >
          <option disabled value="">
            Update Status
          </option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
          <option value="Rejected">Rejected</option>
        </select>
      </td>
      <td>
        <div className="flex gap-1">
          <button
            onClick={handleCancelApplication}
            className={`btn btn-error ${
              status === "Rejected" || status === "Completed"
                ? "btn-disabled"
                : "btn-error"
            } btn-xs`}
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
        <button className="btn btn-xs btn-accent">Feedback</button>
      </td>
    </tr>
  );
};

export default AppliedScholarshipRow;
