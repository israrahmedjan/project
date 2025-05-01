import GooglePayButton from '@/lib/GooglePayButton'
import React from 'react'
import CounterUI from '../_components/CounterUI';

function page() {
  const amount = '24.99'; // This can come from cart total, user input, etc.

  return (
    <>
      <h1>Pay with Google Pay</h1>
      <GooglePayButton amount="5.00" />
      <CounterUI />
    <div>Home Page!</div>
    </>
  )
}

export default page