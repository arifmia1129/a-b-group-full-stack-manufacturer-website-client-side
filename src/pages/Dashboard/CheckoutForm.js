import React, { useState, useEffect } from 'react';
import axiosPrivate from "../../api/axiosPrivate";
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
const CheckoutForm = ({ bookingProduct }) => {
  const {
    _id,
    productId,
    product,
    orderQuantity,
    totalPrice,
    user } = bookingProduct;
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [tnxId, setTnxId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://enigmatic-reef-93908.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice]);



  const handleSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    })
    if (error) {
      setErrorMessage(error?.message);
    }
    else {
      const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user,
            },
          },
        },
      );
      const paymentInfo = {
        productId,
        product,
        orderQuantity,
        totalPrice,
        user,
        tnxId: paymentIntent?.id
      }
      if (intentError) {
        setErrorMessage(intentError?.message);
      }
      else {
        axiosPrivate.put(`https://enigmatic-reef-93908.herokuapp.com/booking/${_id}`, { status: "pending", tnxId: paymentIntent?.id })
          .then(res => {
            axiosPrivate.post("https://enigmatic-reef-93908.herokuapp.com/payment", paymentInfo)
          })

        setSuccessMessage("Congrats! Payment is done!");
        setTnxId(paymentIntent?.id);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className='border-2 px-1 py-3 border-black rounded-lg'
        options={{
          style: {
            base: {
              fontSize: '14px',
              color: 'black',
              '::placeholder': {
                color: 'black',
                border: "1px solid black"
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p><small className='text-red-500 font-bold'>{errorMessage && errorMessage}</small></p>
      {successMessage && <p><small className='text-green-500 font-bold'>{successMessage}</small></p>}
      {tnxId && <p><small className='text-green-500 font-bold'>Tnx Id: {tnxId}</small></p>}
      <button className='btn btn-error btn-xs text-white mt-1' type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;