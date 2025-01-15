import Heading from "../../components/Heading";
import MyReviewRow from "../../components/TableRows/MyReviewRow";

const MyReviews = () => {
  return (
    <div>
      <Heading
        Heading="Your Reviews"
        subHeading="View all reviews given by you."
      ></Heading>

      {/* table */}
      <div className="max-w-7xl mx-auto my-6">
        <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Scholarship</th>
                <th>University</th>
                <th>Review</th>
                <th>Review Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <MyReviewRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
