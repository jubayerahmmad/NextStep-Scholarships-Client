import { MdOutlineMail } from "react-icons/md";

const NewsletterForm = () => {
  return (
    <section className="px-4 py-6">
      <div className="max-w-7xl mx-auto rounded-xl p-5 bg-gradient-to-bl from-cyan-700 via-teal-950 to-cyan-950 relative">
        {/* email icon */}
        <div className="rounded-full absolute top-[-30px] border-[3px] border-white left-[50%] transform translate-x-[-50%] bg-gradient-to-t from-teal-500 to-cyan-700 p-1.5 w-max">
          <MdOutlineMail className="border border-white p-1.5 rounded-full text-[3rem] text-white" />
        </div>

        {/* content */}
        <div className="sm:w-[70%] w-full lg:w-[50%] mx-auto">
          <h1 className="text-[2rem] sm:text-[3rem] mt-8 font-extrabold capitalize text-teal-500 text-center">
            Subscribe to Our newsletter
          </h1>
          <p className="text-[1.1rem] mt-2 text-center text-gray-200 font-[300]">
            Stay updated with the latest scholarship opportunities, deadlines,
            and application tips by subscribing to our newsletter.
          </p>

          <form className="mt-12 sm:flex-row flex-col flex items-end sm:items-center justify-between gap-[15px]">
            <input
              placeholder="Email Address"
              className="w-full py-2 px-4 outline-none focus:ring-0 rounded-md"
            />

            <button className="w-max px-4 py-2 rounded-md bg-teal-500 text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
