import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { MdDelete } from "react-icons/md";

const MyReviewRow = ({
  index,
  reviews,
  refetch,
  setUpdateReviewModal,
  getReviewId,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const { _id, review, universityName, scholarshipName, reviewDate } = reviews;

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
          <button
            onClick={() => {
              setUpdateReviewModal(true);
              getReviewId(_id);
            }}
            className="btn btn-ghost btn-xs"
          >
            <FaEdit size={16} />{" "}
          </button>
          <button onClick={deleteReview} className="btn btn-ghost btn-xs">
            <MdDelete size={16} color="red" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyReviewRow;
