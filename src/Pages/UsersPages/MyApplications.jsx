import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";

import MyApplicationsRow from "../../components/TableRows/MyApplicationsRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader";

const MyApplications = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const { data: myApplications = [], isLoading } = useQuery({
    queryKey: ["myApplications", user?.email],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/my-applications/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div>
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
                {myApplications?.map((application) => (
                  <MyApplicationsRow
                    key={application._id}
                    application={application}
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
    </div>
  );
};

export default MyApplications;
