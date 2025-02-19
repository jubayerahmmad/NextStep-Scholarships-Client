import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Heading from "../../../components/Heading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader";
import Rating from "react-rating";
const Testimonial = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosPublic("/reviews");
      return data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <section className="px-4 py-6">
      <Heading
        Heading="Testimonials"
        subHeading="Explore what our users say."
      />
      <div className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
        >
          {reviews?.map((review) => (
            <SwiperSlide>
              <div className="w-full h-[450px] z-0 bg-gray-200 p-6 flex items-center justify-center flex-col">
                <img
                  src={review.reviewerImage}
                  alt="reviewerImage"
                  className="w-[150px] h-[150px] object-cover rounded-full"
                />

                <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
                  {review.reviewerName}
                </h3>
                <p className="text-[#424242] text-[0.9rem]">
                  {review.scholarshipName}
                </p>
                <p>
                  By{" "}
                  <span className="font-bold font-playfair">
                    {review.universityName}
                  </span>
                </p>

                <Rating
                  initialRating={review.rating}
                  readonly
                  emptySymbol={<FaRegStar color="orange" />}
                  fullSymbol={<FaStar color="orange" />}
                  fractions={2}
                  stop={10}
                />

                <div className="relative flex-grow">
                  <p className="dark:text-[#abc2d3] text-justify text-[0.9rem] my-3 text-[#424242]">
                    {review.review}
                  </p>
                  <FaQuoteRight className="text-[3rem] z-[-1] text-[#d1d1d169] absolute top-[-20%] left-0 " />
                  <FaQuoteLeft className="text-[3rem] z-[-1] text-[#d1d1d169] absolute bottom-[0%] right-0 " />
                </div>
              </div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
