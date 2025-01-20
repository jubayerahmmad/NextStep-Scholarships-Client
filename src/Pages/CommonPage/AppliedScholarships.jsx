import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import AppliedScholarshipRow from "../../components/TableRows/AppliedScholarshipRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../components/Loader";
import { useState } from "react";
import ApplicationDetailsModal from "../../components/Modals/ApplicationDetailsModal";
import FeedbackModal from "../../components/Modals/FeedbackModal";
import { Helmet } from "react-helmet-async";

const AppliedScholarships = () => {
  const axiosPrivate = useAxiosPrivate();
  const [isModalOpen, setisModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [feedbackId, setFeedbackId] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { data: appliedScholarships = [], isLoading } = useQuery({
    queryKey: ["appliedScholarships", sortBy],
    queryFn: async () => {
      const { data } = await axiosPrivate(
        `/applied-scholarships?date=${sortBy}`
      );
      return data;
    },
  });

  if (isLoading) return <Loader />;

  // view application details
  const handleDetails = async (id) => {
    try {
      const { data } = await axiosPrivate(`/applied-scholarship/${id}`);
      setSingleData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // getting the id of the applied scholarship where  the feedback will be added.
  const getFeedbackId = (id) => {
    setFeedbackId(id);
  };

  return (
    <div>
      <Helmet>
        <title>Applied Scholarships || Dashboard</title>
      </Helmet>
      <Heading
        Heading="Applied Scholarships"
        subHeading="Manage and review all applied scholarships."
      ></Heading>
      {/* table */}
      {appliedScholarships.length > 0 ? (
        <div className="max-w-7xl mx-auto my-6">
          <div className="my-6 flex items-center gap-3 justify-end">
            <select
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-teal-900 rounded-md px-2 py-1 text-white text-lg font-playfair"
              name="role"
              value={sortBy}
            >
              <option value="">Sort</option>
              <option value="appliedDate">Apply Date</option>
              <option value="applicationDeadline">Deadline</option>
            </select>
          </div>

          <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
            <table className="table ">
              {/* head */}
              <thead className="bg-teal-500 text-gray-50">
                <tr>
                  <th>#</th>
                  <th>Applicants Info</th>
                  <th>Scholarship Category</th>
                  <th>Subject Category</th>
                  <th>Applied Date</th>
                  <th>Deadline</th>
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
        <p className="text-4xl text-center font-playfair">
          No one has applied to any Scholarship
        </p>
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
