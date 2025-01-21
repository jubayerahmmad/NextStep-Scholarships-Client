import { RxCross1 } from "react-icons/rx";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import { toast } from "react-toastify";

const UpdateReviewModal = ({
  setUpdateReviewModal,
  updateReviewModal,
  reviewId,
}) => {
  const axiosPrivate = useAxiosPrivate();

  const { data: reviewData = [], isLoading } = useQuery({
    queryKey: ["reviewData"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/my-review/${reviewId}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  const { rating, review } = reviewData;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const review = e.target.review.value;

    try {
      await axiosPrivate.patch(`/update-review/${reviewId}`, {
        rating,
        review,
      });
      toast.success("Review Updated");
      setUpdateReviewModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        updateReviewModal ? "visible" : "invisible"
      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000009c] transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`${
          updateReviewModal ? "scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
      >
        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
          <h1 className="text-[1.5rem] font-bold">Update Your Review</h1>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setUpdateReviewModal(false)}
          />
        </div>

        <div className="my-4 w-full p-4">
          <form onSubmit={handleUpdate} className="space-y-3">
            <input
              type="number"
              name="rating"
              defaultValue={rating && rating}
              step="any"
              placeholder="Give us rating out of 10"
              className="rounded-md w-full border focus:outline-teal-500 p-2"
            />
            <textarea
              name="review"
              placeholder="Give your feedback"
              rows={4}
              defaultValue={review && review}
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

export default UpdateReviewModal;
