import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const CheckoutForm = () => {
  const [user] = useAuthState(auth);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const issuedDate =new Date().toLocaleString();;
  
  useEffect(() => {
    const data = { name: 'Office Table', price: 1200};
    if (data.price) {
      console.log(data.price);
      fetch(
        'https://breeze-time-server.vercel.app/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, []);

console.log(clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setCardError(error?.message || '');
    setSuccess('');
    setProcessing(true);

    const { paymentIntent, error: intentError } =
      await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
            name: user.displayName,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      setSuccess('Congrats!! Your payment completed.');
    }
    const payment = {
      transactionId: paymentIntent.id,
      orderId: '1'
    };

    fetch(`http://localhost:5000/api/pay`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        setProcessing(false);
      });
    // give user a professional status
    // const url = `https://breeze-time-server.vercel.app/users/professional/${user.email}`;
    // fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  if (processing) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="btn bg-primary border-none text-white rounded-lg hover:bg-accent btn-sm mt-10 px-10"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && <p className="text-green-500 py-3">{success}</p>}
      {transactionId && <p>Your transaction ID: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
