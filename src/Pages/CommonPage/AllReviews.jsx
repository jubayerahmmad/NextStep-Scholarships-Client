import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import AllReviewsRow from "../../components/TableRows/AllReviewsRow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../components/Loader";

const AllReviews = () => {
  const axiosPrivate = useAxiosPrivate();

  const { data: allReviews = [], isLoading } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const { data } = await axiosPrivate("/reviews");
      return data;
    },
  });

  if (isLoading) return <Loader />;
  console.log(allReviews);
  return (
    <div>
      <Heading
        Heading="View All Reviews"
        subHeading="Reviews given by all users"
      ></Heading>
      {/* table */}
      {allReviews.length > 0 ? (
        <div className="max-w-7xl mx-auto my-6">
          <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
            <table className="table ">
              {/* head */}
              <thead className="">
                <tr>
                  <th>#</th>
                  <th>Reviewer</th>
                  <th>Comment</th>
                  <th>University</th>
                  <th>Scholarship Name</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allReviews?.map((reviews, index) => (
                  <AllReviewsRow
                    key={reviews._id}
                    reviews={reviews}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-4xl text-center font-bold font-playfair">
          No Reviews Given by the user!
        </p>
      )}
    </div>
  );
};

export default AllReviews;
