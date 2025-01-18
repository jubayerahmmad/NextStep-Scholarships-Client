import { FcRating } from "react-icons/fc";
import { MdDelete } from "react-icons/md";

const AllReviewsRow = ({ reviews, index }) => {
  const {
    rating,
    review,
    universityName,
    scholarshipName,
    reviewDate,
    reviewerImage,
    reviewerName,
  } = reviews;
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-8 w-8 lg:h-12 lg:w-12">
              <img
                referrerPolicy="no-referrer"
                src={reviewerImage}
                alt="reviewer image"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewerName}</div>
            <div className="opacity-50 flex items-center gap-2">
              <FcRating /> {rating}
            </div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex flex-wrap">
          {review.slice(0, 25)}...
          <button className="btn btn-xs btn-link">Read More</button>
        </div>
      </td>
      <td>
        <span>{universityName}</span>
      </td>
      <td>
        <span>{scholarshipName}</span>
      </td>
      <td>{new Date(reviewDate).toLocaleDateString()}</td>
      <td>
        <button className="btn btn-error text-white btn-xs">
          <MdDelete size={16} />
        </button>
      </td>
    </tr>
  );
};

export default AllReviewsRow;
