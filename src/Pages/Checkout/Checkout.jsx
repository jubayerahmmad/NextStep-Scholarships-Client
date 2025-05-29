import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/Forms/CheckoutForm";
import Heading from "../../components/Heading";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

import useRole from "../../hooks/useRole";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loaders/Loader";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Checkout = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { role } = useRole();
  const { data: scholarship = {}, isLoading } = useQuery({
    queryKey: ["scholarship"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/scholarship/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  const {
    _id,
    applicationFees,
    scholarshipName,
    universityName,
    subjectName,
    degree,
  } = scholarship || {};

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 my-2">
      <Helmet>
        <title>Checkout || NextStep Scholarships</title>
      </Helmet>
      <Heading
        Heading={"Payment Checkout"}
        subHeading={"Pay Application Fee to apply for this Scholarship"}
      />

      <div className="max-w-md mx-auto my-8 p-4 border-2 rounded-xl">
        <h3 className="text-3xl text-center mb-6 font-playfair font-bold">
          Pay Application Fee
        </h3>
        <div className="divider"></div>
        {/* scholarshipDetails */}
        <div className="mb-4 pb-2">
          <p className="tracking-wide">
            {role === "Admin" || role === "Moderator" ? (
              <>Admin or Moderator Cannot Apply!</>
            ) : (
              <>
                {" "}
                You are applying for <em>{scholarshipName}</em> by{" "}
                <em>{universityName}</em> for pursuing <b>{degree}</b> degree on{" "}
                <b>{subjectName}</b>. Please pay the <b>${applicationFees}</b>{" "}
                as application fee to proceed to the apply.
              </>
            )}
          </p>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            applicationFees={applicationFees}
            id={_id}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
