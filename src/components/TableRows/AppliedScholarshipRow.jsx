import { RxCross2 } from "react-icons/rx";

const AppliedScholarshipRow = ({ applications, i }) => {
  const {
    degree,
    subjectCategory,
    scholarshipCategory,
    universityName,
    applicantName,
    applicantEmail,
    scholarshipName,
    status,
  } = applications;
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
          className="px-2 py-1 rounded-lg bg-teal-900 text-white"
        >
          <option value="">Update Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
      <td>
        <div className="flex">
          <button className="btn btn-error btn-xs">
            <RxCross2 size={20} />
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
