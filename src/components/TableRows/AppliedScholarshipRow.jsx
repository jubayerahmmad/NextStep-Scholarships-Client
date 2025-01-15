import { RxCross2 } from "react-icons/rx";

const AppliedScholarshipRow = () => {
  return (
    <tr className="hover">
      <th>1</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-8 w-8 lg:h-12 lg:w-12">
              <img
                src="https://i.ibb.co.com/cDJwpsZ/Pau-Cubarsi.jpg"
                alt="Avatar"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-xs">Pau Cubarsi</div>
            <div className="text-xs">cucu@cubarsi.com</div>
          </div>
        </div>
      </td>
      <td>Global Innovators Scholarship</td>
      <td>Harvard University</td>
      <td>Masters</td>
      <td>Engineering</td>
      <td>
        <select
          defaultValue={"Pending"}
          className="px-3 py-1 rounded-lg bg-teal-900 text-white"
        >
          <option value="">Update Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
      <td>
        <div className="flex">
          <button className="btn btn-error btn-sm">
            <RxCross2 size={20} />
          </button>
        </div>
      </td>
      <td>
        <button className="btn btn-sm btn-accent">Feedback</button>
      </td>
    </tr>
  );
};

export default AppliedScholarshipRow;
