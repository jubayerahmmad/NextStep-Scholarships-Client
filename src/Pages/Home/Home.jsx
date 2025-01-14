import { Helmet } from "react-helmet-async";
import AboutUs from "./HomeComps/AboutUs";
import Banner from "./HomeComps/Banner";
import NewsletterForm from "./HomeComps/NewsletterForm";
import TopScholarships from "./HomeComps/TopScholarships";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | NextStep Scholarships</title>
      </Helmet>
      <Banner />
      <AboutUs />
      <TopScholarships />
      <NewsletterForm />
    </div>
  );
};

export default Home;
