import { Helmet } from "react-helmet-async";
import AboutUs from "./HomeComps/AboutUs";
import Banner from "./HomeComps/Banner";
import NewsletterForm from "./HomeComps/NewsletterForm";
import TopScholarships from "./HomeComps/TopScholarships";
import Testimonial from "./HomeComps/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | NextStep Scholarships</title>
      </Helmet>
      <Banner />
      <AboutUs />
      <TopScholarships />
      <Testimonial />
      <NewsletterForm />
    </div>
  );
};

export default Home;
