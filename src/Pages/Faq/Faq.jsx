import { useState } from "react";
import Heading from "../../components/Heading";
import { Helmet } from "react-helmet-async";
import { FiSend } from "react-icons/fi";

const Faq = () => {
  const [bgAccording, setBgAccording] = useState(null);

  // according data
  const accordingData = [
    {
      title: "What is NextStep Scholarships?",
      description:
        "NextStep is a platform designed to help students find and apply for scholarships from universities worldwide. It simplifies the process by providing detailed scholarship information, deadlines, and application requirements.",
    },
    {
      title: "How do I apply for a scholarship listed on NextStep?",
      description: `To apply for a scholarship, click on the "Scholarship Details" button on the card. You'll be redirected to the details page, where you can find a Apply button.`,
    },
    {
      title: "How are the ratings for scholarships calculated?",
      description: `The ratings are based on reviews from students who have applied for or benefited from the scholarship. We calculate the average of all submitted ratings to provide an overall score.`,
    },

    {
      title: `Is my personal information safe on NextStep?`,
      description: `Yes, we take your privacy seriously. Any personal information you provide is securely stored and used only to enhance your experience on the platform.`,
    },

    {
      title: `Can I apply for multiple scholarships simultaneously?`,
      description: `Absolutely! You can apply for as many scholarships as you qualify for. Make sure to carefully review the requirements and deadlines for each.`,
    },
  ];

  const handlebgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));
  return (
    <div className="px-4 py-6">
      <Helmet>
        <title>FAQ | NextStep Scholarships</title>
      </Helmet>
      <Heading
        Heading={"Frequently Asked Questions"}
        subHeading={"Explore Frequently Asked Questions"}
      ></Heading>
      <div className="flex gap-3 flex-col max-w-7xl mx-auto py-4">
        {accordingData?.map((according, index) => (
          <article key={index} className="bg-[#e5eaf2] rounded">
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full bg-teal-700 p-3 rounded"
              onClick={() => handlebgAccording(index)}
            >
              <h2 className={` text-[#ffffff] font-[600] text-[1.2rem]`}>
                {according.title}
              </h2>
              <svg
                className="fill-[#ffffff] shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    bgAccording === index && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    bgAccording === index && "!rotate-180"
                  }`}
                />
              </svg>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-gray-100 ${
                bgAccording === index
                  ? "grid-rows-[1fr] opacity-100 p-3"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="text-[#424242] text-[0.9rem] overflow-hidden">
                {according.description}
              </div>
            </div>
          </article>
        ))}
        <div className="text-center my-6 px-6">
          <h3 className="text-xl lg:text-3xl font-bold underline underline-offset-8 decoration-teal-800">
            Have any other Questions?
          </h3>
          <p className="text-xs lg:text-base">
            Don't Hesitate to send us an Email with your Enquiry or statement
          </p>

          {/* ----- FORM ----*/}

          <form
            action="https://getform.io/f/amddekob"
            method="POST"
            className="w-full mt-6"
          >
            <div className="w-full mx-auto">
              <div className="flex sm:flex-row flex-col items-center gap-[20px]">
                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="peer border-[#383844] border rounded-lg focus:outline-teal-500 px-4 py-2 w-full bg-transparent text-gray-400 transition-colors duration-300"
                  />
                </div>

                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    className="peer border-[#383844] border rounded-lg focus:outline-teal-500 px-4 py-2 w-full bg-transparent text-gray-400 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                <textarea
                  placeholder="Write your Questions"
                  name="questions"
                  rows={5}
                  className="peer border-[#383844] border rounded-lg focus:outline-teal-500 px-4 bg-transparent py-2 w-full text-gray-400 transition-colors duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`py-1 px-2 flex justify-center items-center gap-2 bg-gradient-to-r from-teal-400 via-teal-800 to-cyan-950 text-white rounded-md text-[1rem] mt-3 w-full`}
              >
                Send{" "}
                <span>
                  <FiSend />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
