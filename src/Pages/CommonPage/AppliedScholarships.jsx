import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import AppliedScholarshipRow from "../../components/TableRows/AppliedScholarshipRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../components/Loader";
import { useState } from "react";
import ApplicationDetailsModal from "../../components/Modals/ApplicationDetailsModal";
import FeedbackModal from "../../components/Modals/FeedbackModal";

const AppliedScholarships = () => {
  const axiosPrivate = useAxiosPrivate();
  const [isModalOpen, setisModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [feedbackId, setFeedbackId] = useState("");

  const {
    data: appliedScholarships = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appliedScholarships"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/applied-scholarships`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  const handleDetails = async (id) => {
    try {
      const { data } = await axiosPrivate(`/applied-scholarship/${id}`);
      setSingleData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFeedbackId = (id) => {
    setFeedbackId(id);
  };

  return (
    <div>
      <Heading
        Heading="Applied Scholarships"
        subHeading="Manage and review all applied scholarships."
      ></Heading>
      {/* table */}
      {appliedScholarships.length > 0 ? (
        <div className="max-w-7xl mx-auto my-6">
          <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
            <table className="table ">
              {/* head */}
              <thead className="">
                <tr>
                  <th>#</th>
                  <th>Applicants Info</th>
                  <th>Scholarship Category</th>
                  <th>Subject Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {/* row*/}
                {appliedScholarships.map((applications, i) => (
                  <AppliedScholarshipRow
                    i={i}
                    key={applications._id}
                    applications={applications}
                    setisModalOpen={setisModalOpen}
                    setFeedbackModalOpen={setFeedbackModalOpen}
                    handleDetails={handleDetails}
                    getFeedbackId={getFeedbackId}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* details modal */}
      {isModalOpen && (
        <ApplicationDetailsModal
          setisModalOpen={setisModalOpen}
          isModalOpen={isModalOpen}
          singleData={singleData}
        />
      )}

      {/* feedback modal */}
      {feedbackModalOpen && (
        <FeedbackModal
          setFeedbackModalOpen={setFeedbackModalOpen}
          feedbackModalOpen={feedbackModalOpen}
          feedbackId={feedbackId}
        />
      )}
    </div>
  );
};

export default AppliedScholarships;
