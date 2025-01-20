import { RxCross1 } from "react-icons/rx";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";

const FeedbackModal = ({
  feedbackModalOpen,
  setFeedbackModalOpen,
  feedbackId,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const handleFeedback = async (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;

    try {
      const { data } = await axiosPrivate.patch(`/add-feedback/${feedbackId}`, {
        feedback,
      });
      console.log(data);
      toast.success("Feedback Given!");
      setFeedbackModalOpen(false);
    } catch (error) {
      setFeedbackModalOpen(false);
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        feedbackModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`${
          feedbackModalOpen ? "scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] md:w-[80%] lg:w-[55%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
      >
        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
          <h1 className="text-[1.5rem] font-bold">Give feedback to the User</h1>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setFeedbackModalOpen(false)}
          />
        </div>

        <div className="my-4 w-full p-4">
          <form onSubmit={handleFeedback}>
            <textarea
              name="feedback"
              placeholder="Give your feedback"
              rows={4}
              className="rounded-md w-full border focus:outline-teal-500 p-2"
            ></textarea>
            <button type="submit" className="btn btn-accent btn-sm my-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
