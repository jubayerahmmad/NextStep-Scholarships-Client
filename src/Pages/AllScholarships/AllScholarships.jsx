import { Helmet } from "react-helmet-async";
import ScholarshipCards from "../../components/Cards/ScholarshipCards";
import Heading from "../../components/Heading";
import SearchBar from "../../components/SearchBar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const AllScholarships = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerpage = 6;

  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["scholarships", search, itemsPerpage, currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/scholarships?search=${search}&page=${currentPage}&limit=${itemsPerpage}`
      );
      return data;
    },
  });

  // get total data
  const { data: totalData = {}, isPending } = useQuery({
    queryKey: ["totalData"],
    queryFn: async () => {
      const { data } = await axiosPublic("/total-scholarships");
      return data;
    },
  });
  if (isLoading || isPending) return <Loader />;

  const numberOfPages = Math.ceil(totalData.total / itemsPerpage);
  const pages = [...Array(numberOfPages).keys()];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            {scholarships.slice(0, itemsPerpage).map((scholarship) => (
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

      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          onClick={handlePrevPage}
          className="btn btn-ghost btn-circle btn-sm"
        >
          {" "}
          <FaArrowLeft />{" "}
        </button>

        <div className="flex gap-2">
          {pages.map((page) => (
            <button
              key={page}
              className={`btn btn-outline btn-circle btn-sm ${
                currentPage === page
                  ? "bg-accent text-white"
                  : "text-accent hover:bg-accent hover:border-accent "
              } `}
            >
              {page + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          className="btn btn-ghost btn-circle btn-sm"
        >
          {" "}
          <FaArrowRight />{" "}
        </button>
      </div>
    </section>
  );
};

export default AllScholarships;
