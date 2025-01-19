import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import MyReviewRow from "../../components/TableRows/MyReviewRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader";

const MyReviews = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();
  const {
    data: myReviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myReviews"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/my-reviews/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <Heading
        Heading="Your Reviews"
        subHeading="View all reviews given by you."
      ></Heading>

      {/* table */}
      {myReviews.length > 0 ? (
        <div className="max-w-7xl mx-auto my-6">
          <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
            <table className="table">
              {/* head */}
              <thead className="bg-teal-500 text-gray-50">
                <tr>
                  <th>#</th>
                  <th>Scholarship</th>
                  <th>University</th>
                  <th>Review</th>
                  <th>Review Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myReviews?.map((reviews, index) => (
                  <MyReviewRow
                    key={reviews._id}
                    reviews={reviews}
                    index={index}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-4xl text-center font-bold font-playfair">
          You haven't given any reviews yet.
        </p>
      )}
    </div>
  );
};

export default MyReviews;
