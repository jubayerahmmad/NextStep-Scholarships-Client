import { useState } from "react";
import { MdDelete } from "react-icons/md";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UsersTableRow = ({ userData, refetch }) => {
  const { name, email, image, role, _id } = userData || {};
  const axiosPrivate = useAxiosPrivate();

  const handleRoleUpdate = async (updatedRole) => {
    if (role === updatedRole) return;

    try {
      await axiosPrivate.patch(`/update-role/${email}`, {
        role: updatedRole,
      });
      toast.success("User Role Updated");
      refetch();
    } catch (error) {
      toast.error(error.message);
    }
  };

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
        axiosPrivate.delete(`/delete-user/${_id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr className="hover">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-8 w-8 lg:h-12 lg:w-12">
              <img referrerPolicy="no-referrer" src={image} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold text-xs">{name}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>
        <select
          defaultValue={role}
          onChange={(e) => handleRoleUpdate(e.target.value)}
          className="px-3 py-1 rounded-lg bg-teal-900 text-white font-playfair"
        >
          <option value="">Change Role</option>
          <option value="User">User</option>
          <option value="Moderator">Moderator</option>
          <option value="Admin">Admin</option>
        </select>
      </td>
      <td>
        <div className="flex">
          <button onClick={handleDelete} className="btn btn-error btn-sm">
            <MdDelete size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersTableRow;
