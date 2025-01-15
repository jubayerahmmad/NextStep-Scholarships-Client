import Heading from "../../components/Heading";

import MyApplicationsRow from "../../components/TableRows/MyApplicationsRow";

const MyApplications = () => {
  return (
    <div>
      <Heading
        Heading="Check All Your Applications"
        subHeading="View the status of all your submitted applications and track your progress."
      ></Heading>

      {/* table */}
      <div className="max-w-7xl mx-auto my-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>University</th>
                <th>Degree</th>
                <th>Feedback</th>
                <th>Fees</th>
                <th>Charge</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <MyApplicationsRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
