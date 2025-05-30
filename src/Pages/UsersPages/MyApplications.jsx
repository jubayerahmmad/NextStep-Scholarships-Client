import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import MyApplicationsRow from "../../components/TableRows/MyApplicationsRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";

import { useState } from "react";
import ReviewModal from "../../components/Modals/ReviewModal";
import UpdateApplicationDetailsModal from "../../components/Modals/UpdateApplicationDetailsModal";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loaders/Loader";

const MyApplications = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [updateModal, setUpdateModalOpen] = useState(false);
  const [scholarshipId, setScholarshipId] = useState("");
  const [applicationId, setApplicationId] = useState("");

  const {
    data: myApplications = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myApplications", user?.email],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/my-applications/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <Helmet>
        <title>My Applications || Dashboard</title>
      </Helmet>
      <Heading
        Heading="Check All Your Applications"
        subHeading="View the status of all your submitted applications and track your progress."
      ></Heading>
      {/* table */}
      {myApplications.length > 0 ? (
        <div className="max-w-7xl mx-auto my-6">
          <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
            <table className="table">
              {/* head */}
              <thead className="bg-teal-500 text-gray-50">
                <tr>
                  <th>#</th>
                  <th>University</th>
                  <th>Degree</th>
                  <th>Feedback</th>
                  <th>Application Fees</th>
                  <th>Service Charge</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {myApplications?.map((application, index) => (
                  <MyApplicationsRow
                    key={application._id}
                    index={index}
                    application={application}
                    setScholarshipId={setScholarshipId}
                    setApplicationId={setApplicationId}
                    refetch={refetch}
                    setReviewModalOpen={setReviewModalOpen}
                    setUpdateModalOpen={setUpdateModalOpen}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-4xl text-center font-playfair font-bold">
          You Have not applied to any scholarship yet!!
        </p>
      )}

      {reviewModalOpen && (
        <ReviewModal
          setReviewModalOpen={setReviewModalOpen}
          reviewModalOpen={reviewModalOpen}
          scholarshipId={scholarshipId}
        />
      )}
      {updateModal && (
        <UpdateApplicationDetailsModal
          updateModal={updateModal}
          setUpdateModalOpen={setUpdateModalOpen}
          applicationId={applicationId}
        />
      )}
    </div>
  );
};

export default MyApplications;
