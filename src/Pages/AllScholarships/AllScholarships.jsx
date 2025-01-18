import { Helmet } from "react-helmet-async";
import ScholarshipCards from "../../components/Cards/ScholarshipCards";
import Heading from "../../components/Heading";
import SearchBar from "../../components/SearchBar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { useState } from "react";

const AllScholarships = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");

  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["scholarships", search],
    queryFn: async () => {
      const { data } = await axiosPublic(`/scholarships?search=${search}`);
      return data;
    },
    initialData: [],
  });

  if (isLoading) return <Loader />;

  return (
    <section className="px-4 py-6">
      <Helmet>
        <title>All Scholarships | NextStep Scholarships</title>
      </Helmet>
      <div>
        <Heading Heading="Check All Scholarships"></Heading>
        <SearchBar setSearch={setSearch} />
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
        <>
          <p className="text-4xl font-bold text-center p-10">No Data Found</p>
        </>
      )}
    </section>
  );
};

export default AllScholarships;
