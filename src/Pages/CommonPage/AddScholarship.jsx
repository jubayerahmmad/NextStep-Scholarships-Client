import AddScholarshipForm from "../../components/Forms/AddScholarshipForm";
import Heading from "../../components/Heading";

const AddScholarship = () => {
  return (
    <div>
      <Heading Heading="Add a New Scholarship"></Heading>

      <div>
        <AddScholarshipForm></AddScholarshipForm>
      </div>
    </div>
  );
};

export default AddScholarship;
