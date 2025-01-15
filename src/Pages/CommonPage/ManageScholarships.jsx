import React from "react";
import Heading from "../../components/Heading";
import ManageScholarshipRow from "../../components/TableRows/ManageScholarshipRow";

const ManageScholarships = () => {
  return (
    <div>
      <Heading
        Heading="Manage All Scholarships"
        subHeading="View and manage all available scholarships on NextStep"
      ></Heading>

      {/* table */}
      <div className="max-w-7xl mx-auto my-6">
        <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
          <table className="table ">
            {/* head */}
            <thead className="">
              <tr>
                <th>#</th>
                <th>Scholarship</th>
                <th>University</th>
                <th>Degree</th>
                <th>Subject Category</th>
                <th>Fees</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row*/}
              <ManageScholarshipRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageScholarships;
