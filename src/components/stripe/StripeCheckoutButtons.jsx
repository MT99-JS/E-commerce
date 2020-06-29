import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 167;
  const publishableKey =
    "pk_test_51Gz566Aq6U9JMODsv2v6jsbEdHmbUzsUkUCNxJJLdnxsaJb8nOjF2ZUUpZ1lgIOCOVCxgxrQhG1cC92EAkoQb7Gz00QGh097qk";
  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CFC Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is Rs.${priceForStripe}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
