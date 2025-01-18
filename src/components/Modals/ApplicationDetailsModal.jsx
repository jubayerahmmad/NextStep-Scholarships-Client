import { RxCross1 } from "react-icons/rx";

const ApplicationDetailsModal = ({ isModalOpen, setisModalOpen }) => {
  return (
    <div>
      <div
        className={`${
          isModalOpen ? " visible" : " invisible"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
      >
        <div
          className={`${
            isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
          } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
        >
          <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
            <h1 className="text-[1.5rem] font-bold">Sign in to our platform</h1>
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setisModalOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;
