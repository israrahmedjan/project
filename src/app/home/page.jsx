import GooglePayButton from '@/lib/GooglePayButton'
import React from 'react'

function page() {
  const amount = '24.99'; // This can come from cart total, user input, etc.

  return (
    <>
      <h1>Pay with Google Pay</h1>
      <GooglePayButton amount="10.00" />
    <div>Home Page!</div>
    </>
  )
}

export default page