import { Helmet } from "react-helmet-async";
import { FaGraduationCap } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdRateReview } from "react-icons/md";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import Chart from "../../components/TableRows/Chart";
import Heading from "../../components/Heading";

const AdminProfile = () => {
  const axiosPrivate = useAxiosPrivate();

  const {
    data: {
      totalApplications,
      totalReviews,
      totalScholarships,
      avgRating,
      chartData,
    } = {},
    isLoading,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosPrivate("/admin-stats");
      return data;
    },
  });

  if (isLoading) return <Loader />;

  const stats = [
    {
      icon: <FaGraduationCap size={40} />,
      title: "Total Scholarships",
      numbers: totalScholarships,
      divClass:
        "bg-green-100 border-green-600 duration-300 hover:shadow-green-300",
      iconClass: "bg-green-300",
    },
    {
      icon: <GrDocumentPerformance size={40} />,
      title: "Total Applications",
      numbers: totalApplications,
      divClass:
        "bg-teal-100 border-teal-600 duration-300 hover:shadow-teal-300",
      iconClass: "bg-teal-300",
    },
    {
      icon: <MdRateReview size={40} />,
      title: "Total Reviews",
      numbers: totalReviews,
      divClass:
        "bg-yellow-100 border-yellow-600 duration-300 hover:shadow-yellow-300",
      iconClass: "bg-yellow-300",
    },
    {
      icon: <GiStarsStack size={40} />,
      title: "Average Ratings",
      numbers: avgRating.toFixed(2),
      divClass:
        "bg-orange-100 border-orange-600 duration-300 hover:shadow-orange-300",
      iconClass: "bg-orange-300",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <Heading Heading="Overview" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl ${stat.divClass} border shadow-md space-y-2 flex flex-col justify-center items-center w-full`}
          >
            <div className={`p-2 rounded-xl ${stat.iconClass}`}>
              {stat.icon}
            </div>
            <h3 className="text-xl font-bold font-playfair">{stat.title}</h3>
            <span className="text-3xl font-bold">{stat.numbers}</span>
          </div>
        ))}
      </div>
      {/* chart */}

      <div className="my-12">
        <Heading
          Heading="View daily applications and Earnings"
          subHeading="Track your daily progress and revenue"
        />
        <Chart chartData={chartData} />
      </div>
    </div>
  );
};

export default AdminProfile;
