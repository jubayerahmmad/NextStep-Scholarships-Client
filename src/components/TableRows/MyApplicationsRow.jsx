import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
const MyApplicationsRow = ({ application }) => {
  console.log(application);
  const { scholarshipId } = application;
  return (
    <tr className="hover">
      <th>1</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-8 w-8 lg:h-12 lg:w-12">
              <img
                src="https://i.ibb.co.com/cDJwpsZ/Pau-Cubarsi.jpg"
                alt="user profile"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-xs">Harvard University</div>
            <div className="opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Masters
        <br />
        <span className="badge badge-ghost badge-xs text-xs">Engineering</span>
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
          <Link to={`/scholarship-details/${scholarshipId}`}>
            <button className="btn btn-ghost btn-sm">
              <FaInfoCircle size={20} />{" "}
            </button>
          </Link>
          <button className="btn btn-ghost btn-sm">
            <FaEdit size={20} />{" "}
          </button>
          <button className="btn btn-ghost btn-sm">
            <GiCancel size={20} />
          </button>
        </div>
      </td>
      <td>
        <button className="btn btn-sm btn-accent">Review</button>
      </td>
    </tr>
  );
};

export default MyApplicationsRow;
