import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HYS45EHtwD46yUYuLLX05pFaoFumIKe2e4rrAvXez53XvYPWEGgPtH0EpoLGXhj15C9kDDCuRyWK6ARqHjDKC5C00MvX8dNqt";

  const ontoken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="SpotLight | Love for Fashion"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/QFW.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={ontoken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
