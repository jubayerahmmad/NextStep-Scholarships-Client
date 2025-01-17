import { useQuery } from "@tanstack/react-query";
import ScholarshipCards from "../../../components/Cards/ScholarshipCards";
import Heading from "../../../components/Heading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";

const TopScholarships = () => {
  const axiosPublic = useAxiosPublic();
  const { data: TopScholarships = [], isLoading } = useQuery({
    queryKey: ["top-scholarship"],
    queryFn: async () => {
      const { data } = await axiosPublic(
        "/top-scholarships?fees=true&date=true"
      );
      return data;
    },
  });
  if (isLoading) return <Loader />;
  console.log(TopScholarships);
  return (
    <section className="px-4 py-6">
      <Heading
        Heading="Top Scholarships"
        subHeading="Explore the scholarships with lowest application fees"
      />
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 max-w-7xl mx-auto">
        {TopScholarships.map((scholarship) => (
          <ScholarshipCards key={scholarship._id} scholarship={scholarship} />
        ))}
      </div>
      <div className=" flex justify-center my-6">
        <Link to="allScholarships">
          <button className="btn btn-accent btn-sm text-center">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopScholarships;
