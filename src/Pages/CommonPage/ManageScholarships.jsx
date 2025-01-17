import React from "react";
import Heading from "../../components/Heading";
import ManageScholarshipRow from "../../components/TableRows/ManageScholarshipRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";

const ManageScholarships = () => {
  const axiosPrivate = useAxiosPrivate();
  const {
    data: scholarships = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const { data } = await axiosPrivate("/scholarship-admin-access");
      return data;
    },
  });
  if (isLoading) return <Loader />;

  return (
    <div>
      <Heading
        Heading="Manage All Scholarships"
        subHeading="View and manage all available scholarships on NextStep"
      ></Heading>

      {/* table */}
      <div>
        {scholarships.length > 0 ? (
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
                    <th>Application Fee</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row*/}
                  {scholarships.map((scholarship, index) => (
                    <ManageScholarshipRow
                      key={scholarship._id}
                      scholarship={scholarship}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          "No Data"
        )}
      </div>
    </div>
  );
};

export default ManageScholarships;
