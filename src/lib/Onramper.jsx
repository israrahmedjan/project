"use client";

import { useState } from "react";

export default function PaymentScreen() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const iframeUrl = `https://widget.onramper.com?apiKey=YOUR_ONRAMPER_API_KEY`;

  const handlePaymentSuccess = () => {
    // yeh call hoga jab payment success detect karen (custom logic add karni hogi)
    setPaymentSuccess(true);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Buy Crypto</h1>

      {!paymentSuccess ? (
    <iframe        
    src="https://buy.onramper.com?apiKey=pk_prod_01HETEQF46GSK6BS5JWKDF31BT&mode=buy"
    title="Onramper Widget"
    height="630px"
    width="420px"
    allow="accelerometer; autoplay; camera; gyroscope; payment; microphone"
  />
  
      ) : (
        <div className="text-green-600 text-lg font-semibold">
          ✅ Payment Successful!
        </div>
      )}
    </div>
  );
}
