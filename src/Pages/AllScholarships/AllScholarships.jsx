import { Helmet } from "react-helmet-async";
import ScholarshipCards from "../../components/Cards/ScholarshipCards";
import Heading from "../../components/Heading";
import SearchBar from "../../components/SearchBar";

const AllScholarships = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 max-w-7xl mx-auto">
        <ScholarshipCards />
        <ScholarshipCards />
        <ScholarshipCards />
        <ScholarshipCards />
        <ScholarshipCards />
        <ScholarshipCards />
      </div>
    </section>
  );
};

export default AllScholarships;
