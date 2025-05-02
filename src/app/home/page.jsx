'use client'
import GooglePayButton from '@/lib/GooglePayButton'
import React, { useState } from 'react'
import CounterUI from '../_components/CounterUI';

export const dynamic = 'force-dynamic';

function page() {
  const amount = '24.99'; // This can come from cart total, user input, etc.
  //const price = useSelector((state) => state.counter.giftitem)
  const [price,setprice] = useState(56)
  const AddPrice = ()=>
  {
    console.log("Called");
    setprice(256);
  }

  return (
    <>
      <h1>Pay with Google Pay - ${price}</h1>
      {/* <GooglePayButton key={price} amount={price.toString()} /> */}
     
      <div>QTY : <button className='bg-gray-500 p-5' onClick={AddPrice}>Change Price</button></div>
      
    <div>Home Page!</div>
     
    </>
  )
}

export default page