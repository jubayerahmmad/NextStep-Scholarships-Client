import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import { toast } from "react-toastify";

const UpdateApplicationDetailsModal = ({
  updateModal,
  setUpdateModalOpen,
  applicationId,
}) => {
  const { register, handleSubmit } = useForm();
  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(false);

  // get the data of that specific application to show on the modal and update
  const { data: applicationData = {}, isLoading } = useQuery({
    queryKey: ["applicationData"],
    queryFn: async () => {
      const { data } = await axiosPrivate(
        `/applied-scholarship/${applicationId}`
      );
      return data;
    },
  });

  const {
    applicantPhone,
    city,
    country,
    sscResult,
    hscResult,
    studyGap,
    gender,
    status,
  } = applicationData;

  if (isLoading) return <Loader />;

  const onSubmit = async (data) => {
    if (status !== "Pending") {
      return;
    }
    try {
      await axiosPrivate.patch(`/update-application/${applicationId}`, data);
      setLoading(false);
      setUpdateModalOpen(false);
      toast.success("Application Details Updated");
    } catch (error) {
      console.log(error);
      setUpdateModalOpen(false);
      setLoading(false);
    }
  };
  return (
    <div
      className={`${
        updateModal ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-50 bg-[#00000067] transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`${
          updateModal ? "scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] md:w-[80%] lg:w-[35%] bg-gray-200 rounded-lg transition-all duration-300 mx-auto mt-8`}
      >
        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
          <h1 className="text-[1.5rem] font-bold">
            Update Application Details About You
          </h1>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setUpdateModalOpen(false)}
          />
        </div>

        <div className="my-4 w-full p-4">
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
                  defaultValue={applicantPhone}
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
                  defaultValue={city}
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
                  defaultValue={country}
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
                  defaultValue={sscResult}
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
                  defaultValue={hscResult}
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
                  defaultValue={studyGap}
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
                  defaultValue={gender}
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
              disabled={loading || status !== "Pending"}
              type="submit"
              className={`w-full disabled:text-gray-50 disabled:cursor-not-allowed disabled:bg-gray-500 py-2 px-4 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                loading && "btn-disabled"
              }`}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateApplicationDetailsModal;
