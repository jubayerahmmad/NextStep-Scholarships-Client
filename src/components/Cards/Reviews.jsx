import Heading from "../Heading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../Loader";
import { FcRating } from "react-icons/fc";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const Reviews = ({ id }) => {
  console.log(id);
  const axiosPrivate = useAxiosPrivate();
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["specific-reviews"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/reviews/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  console.log(reviews);
  return (
    <section className="">
      <Heading
        Heading={"Reviews"}
        subHeading={"Read what our Students have to say about us"}
      ></Heading>
      {/* cards/sliders */}
      {reviews.length > 0 ? (
        <div>
          <Swiper
            autoplay={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews?.map((review) => (
              <SwiperSlide key={review._id}>
                <div>
                  <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-start space-y-4">
                    <div>
                      {/* rating */}

                      {/* User Info */}
                      <div className="lg:flex items-center gap-2 space-y-2 my-5">
                        <img
                          referrerPolicy="no-referrer"
                          src={review.reviewerImage}
                          alt="User Avatar"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                        <div className="flex-grow">
                          <p className="font-bold text-gray-800">
                            {review.reviewerName}
                          </p>
                          <p className="text-sm text-gray-500">
                            Reviewed On: {review.reviewDate.split("T")[0]}
                          </p>
                        </div>
                        <p className="">
                          <Rating
                            initialRating={review.rating}
                            readonly
                            emptySymbol={<FaRegStar color="orange" />}
                            fullSymbol={<FaStar color="orange" />}
                            fractions={2}
                            stop={10}
                          />
                        </p>
                      </div>
                      {/* Review Text */}
                      <div className="pb-4">
                        <em className="text-gray-700 text-lg font-medium leading-relaxed">
                          {review.review}
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="text-4xl font-bold font-playfair text-center mt-12">
          No Reviews Found
        </p>
      )}
    </section>
  );
};

export default Reviews;
