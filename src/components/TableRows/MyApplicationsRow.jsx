import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
const MyApplicationsRow = () => {
  return (
    <tr className="text-xs">
      <th>1</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-8 w-8 lg:h-12 lg:w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-xs">Harvard University</div>
            <div className="text-xs opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Master of Business Administration
        <br />
        <span className="badge badge-ghost badge-xs text-xs">
          Business Administration
        </span>
      </td>
      <td>
        <div className="flex flex-wrap">
          {`${"Congratulations! Your application has been accepted.".slice(
            0,
            18
          )}...`}{" "}
          <button className="btn btn-xs btn-link">Read More</button>
        </div>
      </td>
      <td>
        <span>$999</span>
      </td>
      <td>
        <span>$35</span>
      </td>
      <td>Pending</td>
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
      <td>
        <button className="btn btn-xs btn-accent">Review</button>
      </td>
    </tr>
  );
};

export default MyApplicationsRow;
