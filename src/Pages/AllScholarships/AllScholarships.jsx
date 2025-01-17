import { Helmet } from "react-helmet-async";
import ScholarshipCards from "../../components/Cards/ScholarshipCards";
import Heading from "../../components/Heading";
import SearchBar from "../../components/SearchBar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";

const AllScholarships = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: scholarships = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const { data } = await axiosPublic("/scholarships");
      return data;
    },
  });

  if (isLoading) return <Loader />;
  console.log(scholarships);
  return (
    <section className="px-4 py-6">
      <Helmet>
        <title>All Scholarships | NextStep Scholarships</title>
      </Helmet>
      <div>
        <Heading Heading="Check All Scholarships"></Heading>
        <SearchBar />
      </div>

      {/* cards */}
      {scholarships.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 max-w-7xl mx-auto">
            {scholarships.map((scholarship) => (
              <ScholarshipCards
                key={scholarship._id}
                scholarship={scholarship}
              />
            ))}
          </div>
        </>
      ) : (
        "No Data"
      )}
    </section>
  );
};

export default AllScholarships;
