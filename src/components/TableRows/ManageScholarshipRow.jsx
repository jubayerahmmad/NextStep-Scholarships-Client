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
        <div className="flex gap-2">
          <button className="btn btn-success btn-sm">
            <FaInfoCircle size={20} />{" "}
          </button>
          <button className="btn btn-outline btn-sm">
            <FaEdit size={20} />{" "}
          </button>
          <button className="btn btn-error btn-sm">
            <GiCancel size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageScholarshipRow;
