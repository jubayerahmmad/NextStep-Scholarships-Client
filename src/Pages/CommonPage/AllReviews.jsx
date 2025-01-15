import Heading from "../../components/Heading";
import AllReviewsRow from "../../components/TableRows/AllReviewsRow";

const AllReviews = () => {
  return (
    <div>
      <Heading
        Heading="View All Reviews"
        subHeading="Reviews given by all users"
      ></Heading>
      {/* table */}
      <div className="max-w-7xl mx-auto my-6">
        <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
          <table className="table ">
            {/* head */}
            <thead className="">
              <tr>
                <th>#</th>
                <th>Reviewer</th>
                <th>Comment</th>
                <th>University</th>
                <th>Subject Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row*/}
              <AllReviewsRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
