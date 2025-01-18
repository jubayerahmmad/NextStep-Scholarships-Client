import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import AppliedScholarshipRow from "../../components/TableRows/AppliedScholarshipRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../components/Loader";

const AppliedScholarships = () => {
  const axiosPrivate = useAxiosPrivate();

  const { data: appliedScholarships = [], isLoading } = useQuery({
    queryKey: ["appliedScholarships"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/applied-scholarships`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  console.log(appliedScholarships);

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
                  <th>Scholarship Name</th>
                  <th>Scholarship Category</th>
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
                {appliedScholarships.map((applications, i) => (
                  <AppliedScholarshipRow
                    i={i}
                    key={applications._id}
                    applications={applications}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AppliedScholarships;
