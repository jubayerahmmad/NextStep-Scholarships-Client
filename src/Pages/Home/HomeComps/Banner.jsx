import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="object-cover bg-cover bg-center h-[330px] lg:h-[780px] relative group transition duration-500"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/3SX102L/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center h-full text-white font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft">
                Welcome to{" "}
                <span className="font-light bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-800 bg-clip-text text-transparent font-playfair">
                  NextStep Scholarship
                </span>
              </h2>
              <p className="text-gray-300 text-xs px-5 lg:text-lg max-w-6xl text-center animate__animated animate__fadeInLeft">
                NextStep Scholarships is a platform that provides financial aid
                to students who are pursuing higher education. Our scholarships
                are open to all students, regardless of their background or
                field of study. We are committed to supporting the next
                generation of leaders and innovators.
              </p>
              <button className="btn btn-link text-cyan-500 text-xl">
                Explore Scholarships
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="object-cover bg-cover bg-center h-[330px] lg:h-[780px] relative group transition duration-500"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/85ZcYv9/baim-hanif-p-YWu-OMhtc6k-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center h-full text-white font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft">
                Get Up to 100% Scholarship!
              </h2>
              <p className="text-gray-300 text-xs px-5 lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft">
                Apply today and secure financial support for your education.
                Limited spots available!
              </p>
              <button className="btn btn-link text-cyan-500 text-xl">
                Apply for Scholarships
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="object-cover bg-cover bg-center h-[330px] lg:h-[780px] relative group transition duration-500"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/ww2CpVY/next-academy-Jy-Jw-O0-K5f-WM-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center h-full text-white font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft">
                Tailored Advice for Your Journey
              </h2>
              <p className="text-gray-300 text-xs px-5 lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft">
                Receive expert advice to navigate through your scholarship
                applications effortlessly.
              </p>
              <button className="btn btn-link text-cyan-500 text-xl">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="object-cover bg-cover bg-center h-[330px] lg:h-[780px] relative group transition duration-500"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/jW1fL9N/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center h-full text-white font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft">
                Be Part of the <span className="font-playfair">NextStep</span>{" "}
                Community
              </h2>
              <p className="text-gray-300 text-xs px-5 lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft">
                Connect with thousands of students benefiting from our programs.
              </p>
              <button className="btn btn-link text-cyan-500 text-xl">
                Join Today
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
