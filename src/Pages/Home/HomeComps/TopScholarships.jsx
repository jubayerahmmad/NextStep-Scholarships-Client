import ScholarshipCards from "../../../components/Cards/ScholarshipCards";
import Heading from "../../../components/Heading";

const TopScholarships = () => {
  return (
    <section className="px-4 py-6">
      <Heading
        Heading="Top Scholarships"
        subHeading="Explore the most sought-after scholarships"
      />
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto px-6 py-4">
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

export default TopScholarships;
