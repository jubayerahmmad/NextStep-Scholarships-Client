import { RxCross1 } from "react-icons/rx";
import ImageUploadInput from "../ImageUploadInput";
import { imageUpload } from "../../utils";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";

const UpdateUserModal = ({ isModalOpen, setisModalOpen }) => {
  const [imageFile, setImageFile] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const { user, updateUser } = useAuth();
  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageURL = await imageUpload(imageFile);

    const userInfo = { name, image: imageURL };

    try {
      await updateUser(name, imageURL);
      //  save user to the data
      await axiosPrivate.patch(`/update-user/${user?.email}`, userInfo);
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? "visible" : "invisible"
      } w-full min-h-screen fixed top-0 left-0 z-50 bg-[#0000008e] transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`${
          isModalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
        } w-[90%] md:w-[80%] lg:w-[55%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
      >
        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
          <h1 className="text-[1.5rem] font-bold">Update Your Profile</h1>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setisModalOpen(false)}
          />
        </div>

        <form onSubmit={handleUpdate} className="flex flex-col gap-5 p-4">
          <div>
            <label
              htmlFor="Name"
              className="text-[1rem] font-[500] text-[#464646]"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="Name"
              placeholder="Your Name"
              className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-teal-500"
            />
          </div>
          <div className="mb-5">
            <ImageUploadInput
              imageFile={imageFile}
              handleFileChange={handleFileChange}
            ></ImageUploadInput>
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-full bg-teal-600 text-[#fff] rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserModal;
