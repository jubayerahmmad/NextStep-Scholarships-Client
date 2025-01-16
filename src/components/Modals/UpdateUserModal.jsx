import { RxCross1 } from "react-icons/rx";
import ImageUploadInput from "../ImageUploadInput";
import { imageUpload } from "../../utils";
import { useState } from "react";

const UpdateUserModal = ({ isModalOpen, setisModalOpen, updateUser }) => {
  const [imageFile, setImageFile] = useState("");
  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUpdate = async (e) => {
    const name = e.target.name;
    const imageURL = await imageUpload(imageFile);

    try {
      updateUser(name, imageURL);
      //  save user to the data
      await axiosPublic.post(`/save-user/${user?.email}`, userInfo);
      toast.success("User Registration Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? "visible" : "invisible"
      } w-full h-screen fixed top-0 left-0 z-50 bg-[#000000c4] transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`${
          isModalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
        } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
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
