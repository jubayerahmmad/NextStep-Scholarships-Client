import React, { useState } from "react";
import Heading from "../../components/Heading";
import ManageScholarshipRow from "../../components/TableRows/ManageScholarshipRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

import UpdateScholarshipModal from "../../components/Modals/UpdateScholarshipModal";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import Loader from "../../components/Loaders/Loader";

const ManageScholarships = () => {
  const axiosPrivate = useAxiosPrivate();
  const [modalOpen, setModalOpen] = useState(false);
  const [updateScholarship, setUpdateScholarship] = useState({});

  const {
    data: scholarships = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manage-scholarships"],
    queryFn: async () => {
      const { data } = await axiosPrivate("/scholarship-admin-access");
      return data;
    },
  });
  if (isLoading) return <Loader />;

  const handleOpenModal = async (id) => {
    setModalOpen(true);

    try {
      const { data } = await axiosPrivate(`/scholarship/${id}`);
      setUpdateScholarship(data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Manage Scholarships || Dashboard</title>
      </Helmet>
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
                <thead className="bg-teal-500 text-gray-50">
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
                      handleOpenModal={handleOpenModal}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {modalOpen && (
              <UpdateScholarshipModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                updateScholarship={updateScholarship}
                refetch={refetch}
              />
            )}
          </div>
        ) : (
          <p className="text-4xl text-center font-playfair">No Data Found!</p>
        )}
      </div>
    </div>
  );
};

export default ManageScholarships;
