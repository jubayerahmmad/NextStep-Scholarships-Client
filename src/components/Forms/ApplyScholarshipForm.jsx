import { useForm } from "react-hook-form";
import Heading from "../Heading";
import { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import { toast } from "react-toastify";

const ApplyScholarshipForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  // get scholarship data
  const { data: scholarship = {}, isLoading } = useQuery({
    queryKey: ["scholarship"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/scholarship/${id}`);
      return data;
    },
  });
  const {
    _id,
    scholarshipName,
    universityName,
    city,
    country,
    applicationFees,
    scholarshipCategory,
    subjectCategory,
    degree,
    serviceCharge,
    applicationDeadline,
  } = scholarship || {};

  // get user data
  const { data: userData = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/user/${user?.email}`);
      return data;
    },
  });

  const { _id: userId, name, email, image } = userData || {};
  if (isLoading) return <Loader />;

  const onSubmit = async (data) => {
    setLoading(true);
    //  save this data to db
    try {
      await axiosPrivate.post("/applied-scholarships", {
        ...data,
        applicantName: name,
        applicantEmail: email,
        applicantPhoto: image,
        userdId: userId,
        degree,
        subjectCategory,
        scholarshipCategory,
        universityName,
        universityAddress: {
          city,
          country,
        },
        applicationFees,
        serviceCharge,
        scholarshipId: _id,
        scholarshipName,
        appliedDate: new Date(),
        applicationDeadline,
      });

      reset();
      setLoading(false);
      toast.success("Application Successful");
      navigate("/dashboard/myApplications");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="my-6 px-4">
      <Heading
        Heading={"Apply Scholarship"}
        subHeading={"Fill out this form to complete application"}
      ></Heading>

      <div className="max-w-2xl mx-auto px-4 py-6 bg-gray-100 rounded-lg my-10">
        <p className="tracking-wide">
          Congratulations! You have successfully paid the application fees for
          the <em>{scholarshipName}</em> to pursue{" "}
          <b>
            {subjectCategory} {degree}
          </b>{" "}
          degree in <b>{scholarshipCategory}</b>. Please fill in your
          application details to complete Application.
        </p>
        <div className="divider"></div>
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/*address*/}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* phone*/}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="number"
                name="applicantPhone"
                {...register("applicantPhone", { required: true })}
                className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                placeholder="Phone"
              />
            </div>
            {/* city*/}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Your City
              </label>
              <input
                type="text"
                name="city"
                {...register("city", { required: true })}
                className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                placeholder="Enter City"
              />
            </div>
            {/* email*/}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                name="country"
                {...register("country", { required: true })}
                className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                placeholder="Enter Country"
              />
            </div>
          </div>

          {/* ssc, hsc result */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SSC Result
              </label>
              <input
                type="text"
                name="sscResult"
                {...register("sscResult", { required: true })}
                className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                placeholder="Your SSC result"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                HSC Result
              </label>
              <input
                type="text"
                name="hscResult"
                {...register("hscResult", { required: true })}
                className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
                placeholder="Your HSC result"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Study gap */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Study gap
              </label>
              <select
                name="studyGap"
                {...register("studyGap")}
                className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              >
                <option value="">Select Study Gap</option>
                <option value="">No Gap</option>
                <option value="One Year">One Year</option>
                <option value="Two or More Years">Two or More</option>
              </select>
            </div>
            {/* gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                {...register("gender", { required: true })}
                className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className={`w-full py-2 px-4 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              loading && "btn-disabled"
            }`}
          >
            {loading ? "Applying..." : "Apply"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyScholarshipForm;
