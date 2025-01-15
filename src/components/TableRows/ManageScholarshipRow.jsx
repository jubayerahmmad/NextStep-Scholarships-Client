import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const ManageScholarshipRow = () => {
  return (
    <tr className="hover">
      <th>1</th>

      <td>Global Innovators Scholarship</td>
      <td>Harvard University</td>
      <td>Masters</td>
      <td>Engineering</td>
      <td>$99</td>
      <td>
        <div className="flex">
          <button className="btn btn-ghost btn-xs">
            <FaInfoCircle size={16} />{" "}
          </button>
          <button className="btn btn-ghost btn-xs">
            <FaEdit size={16} />{" "}
          </button>
          <button className="btn btn-ghost btn-xs">
            <GiCancel size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageScholarshipRow;
