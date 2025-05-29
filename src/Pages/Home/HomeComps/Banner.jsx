import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const sliderContent = [
    {
      id: 1,
      bgImg:
        "https://i.ibb.co.com/3SX102L/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg",
      heading: "Welcome to NextStep Scholarships",
      desc: `NextStep Scholarships is a platform that provides financial aid
             to students who are pursuing higher education. Our scholarships
             are open to all students, regardless of their background or
             field of study. We are committed to supporting the next
             generation of leaders and innovators.`,
      btnText: "Explore",
    },
    {
      id: 2,
      bgImg:
        "https://i.ibb.co.com/85ZcYv9/baim-hanif-p-YWu-OMhtc6k-unsplash.jpg",
      heading: "Get Up to 100% Scholarship!",
      desc: `Apply today and secure financial support for your education. Limited spots available!`,
      btnText: "Apply Now",
    },
    {
      id: 3,
      bgImg:
        "https://i.ibb.co.com/ww2CpVY/next-academy-Jy-Jw-O0-K5f-WM-unsplash.jpg",
      heading: "Tailored Advice for Your Journey",
      desc: `Receive expert advice to navigate through your scholarship applications effortlessly.`,
      btnText: "Apply Now",
    },
    {
      id: 4,
      bgImg:
        "https://i.ibb.co.com/jW1fL9N/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg",
      heading: "Be Part of the NextStep Community",
      desc: `Connect with thousands of students benefiting from our programs.`,
      btnText: "Join Today",
    },
  ];

  return (
    <>
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
        {sliderContent.map((content) => (
          <SwiperSlide key={content.id}>
            <div
              className="object-cover bg-cover bg-center h-[330px] lg:h-[780px] relative group transition duration-500"
              style={{
                backgroundImage: `url(${content.bgImg})`,
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-cyan-950 opacity-70 transition-opacity duration-300"></div>

              {/* Content (Text) */}
              <div className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center h-full text-white font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-5 p-4">
                {content.id === 1 ? (
                  <h2 className="text-white text-3xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
                    Welcome to <br />
                    <span className="font-bold bg-gradient-to-br from-teal-200 via-teal-400 to-teal-500 bg-clip-text text-transparent">
                      NextStep Scholarships
                    </span>
                  </h2>
                ) : (
                  <h2 className="text-white text-3xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
                    {content.heading}
                  </h2>
                )}
                <p className="text-gray-300 tracking-wide text-xs px-5 lg:text-lg max-w-6xl text-center animate__animated animate__fadeInDown">
                  {content.desc}
                </p>
                <Link to="/allScholarships">
                  <button className="btn btn-accent btn-sm text-lg">
                    {content.btnText}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
