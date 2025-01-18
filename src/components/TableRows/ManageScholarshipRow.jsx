import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const ManageScholarshipRow = ({
  scholarship,
  refetch,
  index,
  handleOpenModal,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const {
    _id,
    scholarshipName,
    subjectCategory,
    degree,
    universityName,
    applicationFees,
  } = scholarship;

  const handleDelete = async () => {
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
        axiosPrivate.delete(`/delete-scholarship/${_id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Scholarship has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{scholarshipName}</td>
      <td>{universityName}</td>
      <td>{degree}</td>
      <td>{subjectCategory}</td>
      <td>${applicationFees}</td>
      <td>
        <div className="flex gap-2">
          <Link to={`/scholarship-details/${_id}`}>
            <button className="btn btn-ghost btn-sm">
              <FaInfoCircle size={20} />{" "}
            </button>
          </Link>

          <button
            onClick={() => handleOpenModal(_id)}
            className="btn btn-ghost btn-sm"
          >
            <FaEdit size={20} />{" "}
          </button>

          <button
            onClick={handleDelete}
            className="btn btn-ghost text-error btn-sm"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageScholarshipRow;
