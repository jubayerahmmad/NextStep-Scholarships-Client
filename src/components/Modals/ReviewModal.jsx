import { RxCross1 } from "react-icons/rx";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../Loader";
import { toast } from "react-toastify";

const ReviewModal = ({
  setReviewModalOpen,
  reviewModalOpen,
  scholarshipId,
}) => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  // get scholarship data by id(the id of scholarship where user reviewing)

  const { data: scholarship = {}, isLoading } = useQuery({
    queryKey: ["scholarship"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/scholarship/${scholarshipId}`);
      return data;
    },
  });
  console.log(scholarship);
  if (isLoading) return <Loader />;

  const handleAddReview = async (e) => {
    e.preventDefault();
    const rating = parseFloat(e.target.rating.value);
    const review = e.target.review.value;

    // save data
    try {
      const { data } = await axiosPrivate.post("/add-review", {
        rating,
        review,
        scholarshipName: scholarship.scholarshipName,
        universityName: scholarship.universityName,
        reviewDate: new Date(),
        scholarshipId,
        reviewerName: user?.displayName,
        reviewerEmail: user?.email,
        reviewerImage: user?.photoURL,
      });
      toast.success("Review Added");
      console.log(data);
      setReviewModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        reviewModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`${
          reviewModalOpen ? "scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
      >
        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
          <h1 className="text-[1.5rem] font-bold">Rate Us</h1>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setReviewModalOpen(false)}
          />
        </div>

        <div className="my-4 w-full p-4">
          <form onSubmit={handleAddReview} className="space-y-3">
            <input
              type="number"
              name="rating"
              step="any"
              placeholder="Give us rating out of 10"
              className="rounded-md w-full border focus:outline-teal-500 p-2"
            />
            <textarea
              name="review"
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

export default ReviewModal;
