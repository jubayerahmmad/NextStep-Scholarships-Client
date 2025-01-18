import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useRole from "../../hooks/useRole";

const CheckoutForm = ({ applicationFees, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const { role } = useRole();

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getPaymentIntent = async () => {
      const { data } = await axiosPrivate.post("/create-payment-intent", {
        fee: applicationFees,
      });
      setClientSecret(data);
    };

    getPaymentIntent();
  }, [applicationFees]);

  // console.log(clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });

    if (paymentIntent.status === "succeeded") {
      toast.success("Payment Successful");
      navigate(`/apply-form/${id}`);
    }
    // console.log(paymentIntent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="divider"></div>
      <div className="">
        <button
          className="btn btn-sm btn-accent"
          type="submit"
          disabled={!stripe || role === "Admin" || role === "Moderator"}
        >
          Pay ${applicationFees}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
