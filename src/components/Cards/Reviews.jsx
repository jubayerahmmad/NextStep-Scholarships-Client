import Heading from "../Heading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <section className="">
      <Heading
        Heading={"Reviews"}
        subHeading={"Read what our Students have to say about us"}
      ></Heading>
      {/* cards/sliders */}
      <div>
        <Swiper
          autoplay={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-start space-y-4">
                {/* Review Text */}
                <div className="flex-grow">
                  <p className="text-gray-700 text-lg font-medium leading-relaxed">
                    "It is extremely difficult to find developers like Max who
                    are this competent, reliable, fast and fair in terms of
                    pricing. Together with Rosy DX we have already realized two
                    websites and I hope there will be many more projects to
                    follow."
                  </p>
                </div>
                <div>
                  {/* rating */}

                  {/* User Info */}
                  <div className="flex items-center space-x-3 z-10">
                    <div>
                      <p className="font-bold text-gray-800">Pau Cubarsi</p>
                      <p className="text-sm text-gray-500">FC Barcelona</p>
                    </div>
                    <img
                      src="https://i.ibb.co.com/cDJwpsZ/Pau-Cubarsi.jpg"
                      alt="User Avatar"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-start space-y-4">
                {/* Review Text */}
                <div className="flex-grow">
                  <p className="text-gray-700 text-lg font-medium leading-relaxed">
                    "It is extremely difficult to find developers like Max who
                    are this competent, reliable, fast and fair in terms of
                    pricing. Together with Rosy DX we have already realized two
                    websites and I hope there will be many more projects to
                    follow."
                  </p>
                </div>
                <div>
                  {/* rating */}

                  {/* User Info */}
                  <div className="flex items-center space-x-3 z-10">
                    <div>
                      <p className="font-bold text-gray-800">Pau Cubarsi</p>
                      <p className="text-sm text-gray-500">FC Barcelona</p>
                    </div>
                    <img
                      src="https://i.ibb.co.com/cDJwpsZ/Pau-Cubarsi.jpg"
                      alt="User Avatar"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
