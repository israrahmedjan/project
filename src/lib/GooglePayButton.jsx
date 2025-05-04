'use client';

import { useEffect } from 'react';

export default function GooglePayButton({ amount }) {
  useEffect(() => {
    const script = document.createElement('script');
    console.log("Google pay useeffect!")
    script.src = 'https://pay.google.com/gp/p/js/pay.js';
    script.async = true;
    script.onload = () => {
      if (window.google) {
        const paymentsClient = new window.google.payments.api.PaymentsClient({
          environment: 'TEST',
        });

        const button = paymentsClient.createButton({
          onClick: () => onGooglePayClicked(amount),
          buttonType: 'pay',
          buttonColor: 'blue', 
        });

        const container = document.getElementById('google-pay-button-container');
        if (container && container.childElementCount === 0) {
          container.appendChild(button);
        }
      }
    };
    document.body.appendChild(script);
  }, [amount]);

  const onGooglePayClicked = (price) => {
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['VISA', 'MASTERCARD'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantName: 'Test Store',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: price,
        currencyCode: 'USD',
        countryCode: 'US',
      },
    };

    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST',
    });

    paymentsClient.loadPaymentData(paymentDataRequest)
      .then((paymentData) => {
        console.log('Payment success:', paymentData);
        alert('Payment Successful!');
      })
      .catch((err) => {
        console.error('Payment failed:', err);
        alert('Payment Failed or Cancelled');
      });
  };

  return <div id="google-pay-button-container" />;
}
