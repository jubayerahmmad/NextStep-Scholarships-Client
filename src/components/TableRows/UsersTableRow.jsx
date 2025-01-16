import { MdDelete } from "react-icons/md";

const UsersTableRow = ({ userData }) => {
  const { name, email, image, role } = userData;
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
          className="px-3 py-1 rounded-lg bg-teal-900 text-white"
        >
          <option value="">Change Role</option>
          <option value="User">User</option>
          <option value="Moderator">Moderator</option>
          <option value="Admin">Admin</option>
        </select>
      </td>
      <td>
        <div className="flex">
          <button className="btn btn-error btn-sm">
            <MdDelete size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersTableRow;
