import img from "../../../assets/about.png";
import Heading from "../../../components/Heading";
const AboutUs = () => {
  return (
    <section className="px-4 py-6 bg-gray-100">
      <Heading
        Heading={"About Us"}
        subHeading={"Empowering dreams, one scholarship at a time."}
      ></Heading>
      <div className="max-w-7xl mx-auto px-6 py-4 rounded-md text-gray-800">
        <div className="flex flex-wrap items-center">
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-4">
              At NextStep, we aim to bridge the gap between ambition and
              opportunity by connecting students with scholarships that fuel
              their dreams.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2">Comprehensive scholarship database.</li>
              <li className="mb-2">Simplified application process.</li>
              <li className="mb-2">Personalized guidance and resources.</li>
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2">
            <img src={img} alt="About Us" className="rounded-lg h-80 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
