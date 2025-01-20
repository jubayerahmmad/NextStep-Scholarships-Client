import { FcRating } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const AllReviewsRow = ({ reviews, index, refetch }) => {
  const {
    _id,
    rating,
    review,
    universityName,
    scholarshipName,
    reviewDate,
    reviewerImage,
    reviewerName,
  } = reviews;

  const axiosPrivate = useAxiosPrivate();

  const deleteReview = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate.delete(`/delete-review/${_id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Review has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
  };

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
        <div className="flex flex-wrap w-80">{review}</div>
      </td>
      <td>
        <span>{universityName}</span>
      </td>
      <td>
        <span>{scholarshipName}</span>
      </td>
      <td>{new Date(reviewDate).toLocaleDateString()}</td>
      <td>
        <button
          onClick={deleteReview}
          className="btn btn-error text-white btn-xs"
        >
          <MdDelete size={16} />
        </button>
      </td>
    </tr>
  );
};

export default AllReviewsRow;
