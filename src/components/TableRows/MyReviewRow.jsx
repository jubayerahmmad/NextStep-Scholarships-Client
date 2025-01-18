import { FaEdit } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const MyReviewRow = ({ index, reviews }) => {
  const { review, universityName, scholarshipName, reviewDate } = reviews;
  return (
    <tr className="hover">
      <th>{index + 1}</th>

      <td>{scholarshipName}</td>
      <td>{universityName}</td>
      <td>
        <div className="flex flex-wrap">
          {review.slice(0, 55)}...
          <button className="btn btn-xs btn-link">Read More</button>
        </div>
      </td>

      <td>{new Date(reviewDate).toLocaleDateString()}</td>
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
