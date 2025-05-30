import { Helmet } from "react-helmet-async";
import AddScholarshipForm from "../../components/Forms/AddScholarshipForm";
import Heading from "../../components/Heading";

const AddScholarship = () => {
  return (
    <div>
      <Helmet>
        <title>Add Scholarship || Dashboard</title>
      </Helmet>
      <Heading Heading="Add a New Scholarship"></Heading>

      <div>
        <AddScholarshipForm />
      </div>
    </div>
  );
};

export default AddScholarship;
