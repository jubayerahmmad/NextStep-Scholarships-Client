import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import ImageUploadInput from "../ImageUploadInput";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../utils";

const UpdateScholarshipModal = ({
  modalOpen,
  setModalOpen,
  updateScholarship,
  refetch,
}) => {
  const [imageFile, setImageFile] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();
  // image upload
  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImageFile(file);
  };

  const {
    _id,
    description,
    applicationFees,
    universityName,
    subjectCategory,
    applicationDeadline,
    scholarshipCategory,
    city,
    country,
    scholarshipName,
    subjectName,
    stipend,
    worldRank,
    degree,
    tuitionFees,
    serviceCharge,
  } = updateScholarship;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    setLoading(true);
    const postDate = new Date().toISOString().split("T")[0];
    if (postDate > data.applicationDeadline) {
      return toast.error("Deadline cannot be a past date!!");
    }

    const applicationFees = parseInt(data.applicationFees);
    const imageURL = await imageUpload(imageFile);

    try {
      await axiosPrivate.put(`/update-scholarship/${_id}`, {
        ...data,
        applicationFees,
        email: user?.email,
        image: imageURL,
        postDate: new Date().toISOString().split("T")[0],
      });
      setLoading(false);
      setImageFile("");
      reset();
      setModalOpen(false);
      toast.success("New Scholarship Updated!");
      refetch();
      // console.log(Updated);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="h-full">
      <div
        className={`${
          modalOpen ? "visible" : "invisible"
        } w-full absolute top-0 left-0 z-50 bg-[#000000c4] overflow-auto transition-all duration-300 flex items-center justify-center`}
      >
        <div
          className={`${
            modalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
          } w-[90%] md:w-[80%] lg:w-[55%]  bg-gray-100 rounded-lg transition-all duration-300 mx-auto my-4`}
        >
          <div className="overflow-y-auto">
            <div className="w-full flex items-end px-4 py-2 justify-between border-b border-[#d1d1d1]">
              <h1 className="text-[1.5rem] font-bold">Update Scholarship</h1>
              <RxCross1
                className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                onClick={() => setModalOpen(false)}
              />
            </div>
            {/* form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 px-4 py-2 overflow-auto"
            >
              {/* Uni and Scholarship Row world rank */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Scholarship*/}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Scholarship Name
                  </label>
                  <input
                    type="text"
                    defaultValue={scholarshipName}
                    name="scholarshipName"
                    {...register("scholarshipName", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="Enter the scholarship name"
                  />
                </div>
                {/* University*/}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    University Name
                  </label>
                  <input
                    type="text"
                    name="universityName"
                    defaultValue={universityName}
                    {...register("universityName", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="Enter the university name"
                  />
                </div>
                {/* world rank*/}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    World Rank
                  </label>
                  <input
                    type="number"
                    name="worldRank"
                    defaultValue={worldRank}
                    {...register("worldRank", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="University World Rank"
                  />
                </div>
              </div>

              {/* University Image */}
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  University Image/Logo
                </label>

                <ImageUploadInput
                  imageFile={imageFile}
                  handleFileChange={handleFileChange}
                ></ImageUploadInput>
              </div>

              {/* scholarship desc*/}
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows={5}
                  name="description"
                  defaultValue={description}
                  {...register("description", { required: true })}
                  className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                  placeholder="Write Scholarship Details"
                />
              </div>

              {/* Country and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    defaultValue={country}
                    {...register("country", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="Enter the country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    defaultValue={city}
                    {...register("city", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="Enter the city"
                  />
                </div>
              </div>

              {/* Subject & Scholarship Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject Category
                  </label>
                  <select
                    name="subjectCategory"
                    defaultValue={subjectCategory}
                    {...register("subjectCategory", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                  >
                    <option value="">Select a Subject</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </div>

                {/* Scholarship */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Scholarship Category
                  </label>
                  <select
                    name="scholarshipCategory"
                    defaultValue={scholarshipCategory}
                    {...register("scholarshipCategory", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                  >
                    <option value="">Select a Scholarship</option>
                    <option value="Full fund">Full fund</option>
                    <option value="Partial">Partial</option>
                    <option value="Self-fund">Self-fund</option>
                  </select>
                </div>
              </div>
              {/* degre and subject name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* subject name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject Name
                  </label>
                  <input
                    name="subjectName"
                    defaultValue={subjectName}
                    {...register("subjectName", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                  ></input>
                </div>

                {/* Degree */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Degree
                  </label>
                  <select
                    name="degree"
                    defaultValue={degree}
                    {...register("degree", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                  >
                    <option value="">Select a degree</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters</option>
                  </select>
                </div>
              </div>

              {/* Tuition, application Fees, service charge,stipend */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* tution */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tuition Fees (Optional)
                  </label>
                  <input
                    type="number"
                    name="tuitionFees"
                    defaultValue={tuitionFees}
                    {...register("tuitionFees", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="Enter tuition fees"
                  />
                </div>
                {/* Application */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Application Fees
                  </label>
                  <input
                    type="number"
                    name="applicationFees"
                    defaultValue={applicationFees}
                    {...register("applicationFees", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="Enter application fees"
                  />
                </div>
                {/* service charge */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Service Charge
                  </label>
                  <input
                    type="number"
                    name="serviceCharge"
                    defaultValue={serviceCharge}
                    {...register("serviceCharge", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="Enter Service Charge"
                  />
                </div>
                {/* stipend */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Stipend
                  </label>
                  <input
                    type="number"
                    name="stipend"
                    defaultValue={stipend}
                    {...register("stipend", { required: true })}
                    className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                    placeholder="Enter Stipend"
                  />
                </div>
              </div>

              {/* Application Deadline */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Application Deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  defaultValue={applicationDeadline}
                  {...register("applicationDeadline", { required: true })}
                  className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                />
              </div>

              {/* Submit Button */}
              <button
                disabled={loading}
                type="submit"
                className={`w-full py-2 px-4 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                  loading && "btn-disabled"
                }`}
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateScholarshipModal;

// {
//   /* form */
// }
// <form
//   onSubmit={handleSubmit(onSubmit)}
//   className="space-y-4 px-4 py-2 overflow-auto"
// >
//   {/* Uni and Scholarship Row world rank */}
//   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//     {/* Scholarship*/}
//     <div className="w-full">
//       <label className="block text-sm font-medium text-gray-700">
//         Scholarship Name
//       </label>
//       <input
//         type="text"
//         name="scholarshipName"
//         {...register({required:true},"scholarshipName",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="Enter the scholarship name"
//       />
//     </div>
//     {/* University*/}
//     <div className="w-full">
//       <label className="block text-sm font-medium text-gray-700">
//         University Name
//       </label>
//       <input
//         type="text"
//         name="universityName"
//         {...register("universityName",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="Enter the university name"
//       />
//     </div>
//     {/* world rank*/}
//     <div className="w-full">
//       <label className="block text-sm font-medium text-gray-700">
//         World Rank
//       </label>
//       <input
//         type="number"
//         name="worldRank"
//         {...register("worldRank",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="University World Rank"
//       />
//     </div>
//   </div>

//   {/* University Image */}
//   <div className="w-full">
//     <label className="block text-sm font-medium text-gray-700">
//       University Image/Logo
//     </label>

//     <ImageUploadInput
//       imageFile={imageFile}
//       handleFileChange={handleFileChange}
//     ></ImageUploadInput>
//   </div>

//   {/* scholarship desc*/}
//   <div className="w-full">
//     <label className="block text-sm font-medium text-gray-700">
//       Description
//     </label>
//     <textarea
//       rows={5}
//       name="description"
//       {...register("description",)}
//       className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//       placeholder="Write Scholarship Details"
//     />
//   </div>

//   {/* Country and City */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//     <div>
//       <label className="block text-sm font-medium text-gray-700">Country</label>
//       <input
//         type="text"
//         name="country"
//         {...register("country",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="Enter the country"
//       />
//     </div>
//     <div>
//       <label className="block text-sm font-medium text-gray-700">City</label>
//       <input
//         type="text"
//         name="city"
//         {...register("city",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="Enter the city"
//       />
//     </div>
//   </div>

//   {/* Subject & Scholarship Category */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//     {/* subject */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Subject Category
//       </label>
//       <select
//         name="subjectCategory"
//         {...register("subjectCategory",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//       >
//         <option value="">Select a Subject</option>
//         <option value="Agriculture">Agriculture</option>
//         <option value="Engineering">Engineering</option>
//         <option value="Doctor">Doctor</option>
//       </select>
//     </div>

//     {/* Scholarship */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Scholarship Category
//       </label>
//       <select
//         name="scholarshipCategory"
//         {...register("scholarshipCategory",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//       >
//         <option value="">Select a Scholarship</option>
//         <option value="Full fund">Full fund</option>
//         <option value="Partial">Partial</option>
//         <option value="Self-fund">Self-fund</option>
//       </select>
//     </div>
//   </div>
//   {/* degre and subject name */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     {/* subject name */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Subject Name
//       </label>
//       <input
//         name="subjectName"
//         {...register("subjectName",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//       ></input>
//     </div>

//     {/* Degree */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700">Degree</label>
//       <select
//         name="degree"
//         {...register("degree",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//       >
//         <option value="">Select a degree</option>
//         <option value="Diploma">Diploma</option>
//         <option value="Bachelor">Bachelor</option>
//         <option value="Masters">Masters</option>
//       </select>
//     </div>
//   </div>

//   {/* Tuition, application Fees, service charge,stipend */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//     {/* tution */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Tuition Fees (Optional)
//       </label>
//       <input
//         type="number"
//         name="tuitionFees"
//         {...register("tuitionFees",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="Enter tuition fees"
//       />
//     </div>
//     {/* Application */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Application Fees
//       </label>
//       <input
//         type="number"
//         name="applicationFees"
//         {...register("applicationFees",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="Enter application fees"
//       />
//     </div>
//     {/* service charge */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Service Charge
//       </label>
//       <input
//         type="number"
//         name="serviceCharge"
//         {...register("serviceCharge",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="Enter Service Charge"
//       />
//     </div>
//     {/* stipend */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700">Stipend</label>
//       <input
//         type="number"
//         name="stipend"
//         {...register("stipend",)}
//         className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//         placeholder="Enter Stipend"
//       />
//     </div>
//   </div>

//   {/* Application Deadline */}
//   <div>
//     <label className="block text-sm font-medium text-gray-700">
//       Application Deadline
//     </label>
//     <input
//       type="date"
//       name="applicationDeadline"
//       {...register("applicationDeadline",)}
//       className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
//     />
//   </div>

//   {/* Submit Button */}
//   <button
//     disabled={loading}
//     type="submit"
//     className={`w-full py-2 px-4 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
//       loading && "btn-disabled"
//     }`}
//   >
//     {loading ? "Updating..." : "Update"}
//   </button>
// </form>;
