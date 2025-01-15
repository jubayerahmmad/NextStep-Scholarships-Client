import { FcRating } from "react-icons/fc";
import { MdDelete } from "react-icons/md";

const AllReviewsRow = () => {
  return (
    <tr className="hover">
      <th>1</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-8 w-8 lg:h-12 lg:w-12">
              <img
                src="https://i.ibb.co.com/cDJwpsZ/Pau-Cubarsi.jpg"
                alt="reviewer image"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Pau Cubarsi</div>
            <div className="opacity-50 flex items-center gap-2">
              <FcRating /> 4.6
            </div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex flex-wrap">
          {`${"The scholarship process was smooth, and the support team was very helpful. Highly recommended for international students.".slice(
            0,
            18
          )}...`}{" "}
          <button className="btn btn-xs btn-link">Read More</button>
        </div>
      </td>
      <td>
        <span>Harvard University</span>
      </td>
      <td>
        <span>Engineering</span>
      </td>
      <td>10-02-2025</td>
      <td>
        <button className="btn btn-error text-white btn-xs">
          <MdDelete size={16} />
        </button>
      </td>
    </tr>
  );
};

export default AllReviewsRow;
