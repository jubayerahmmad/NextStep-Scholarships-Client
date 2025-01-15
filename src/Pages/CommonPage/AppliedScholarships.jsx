import Heading from "../../components/Heading";
import AppliedScholarshipRow from "../../components/TableRows/AppliedScholarshipRow";

const AppliedScholarships = () => {
  return (
    <div>
      <Heading
        Heading="Applied Scholarships"
        subHeading="Manage and review all applied scholarships."
      ></Heading>
      {/* table */}
      <div className="max-w-7xl mx-auto my-6">
        <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
          <table className="table ">
            {/* head */}
            <thead className="">
              <tr>
                <th>#</th>
                <th>Applicants Info</th>
                <th>Scholarship</th>
                <th>University</th>
                <th>Degree</th>
                <th>Subject Category</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row*/}
              <AppliedScholarshipRow></AppliedScholarshipRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedScholarships;
