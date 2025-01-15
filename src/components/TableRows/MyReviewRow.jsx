import { FaEdit } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const MyReviewRow = () => {
  return (
    <tr className="hover">
      <th>1</th>

      <td>Global Excellence Scholarship</td>
      <td>Harvard University</td>
      <td>
        <div className="flex flex-wrap">
          {`${"The scholarship process was smooth, and the support team was very helpful. Highly recommended for international students.".slice(
            0,
            25
          )}...`}{" "}
          <button className="btn btn-xs btn-link">Read More</button>
        </div>
      </td>

      <td>12/2/2025</td>
      <td>
        <div className="flex">
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

export default MyReviewRow;
