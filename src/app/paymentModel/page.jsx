
import React from 'react'

import PaymentModel from '../_components/paymentModel/PaymentModel'
import { getpaymentModel, getpaymentModelSeo } from '@/helper/helper';

export const generateMetadata = async () => {
  const seoData = await getpaymentModelSeo();
  console.log("Seo data",seoData.metaTitle);
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: [`${seoData.keywords}`],
  };
};

async function page() {
  const paymentData = await getpaymentModel(); // ✅ async function ko await karo
   console.log("paymentData", paymentData);
  return (
    <>
    <div className="mt-[80px]">
    
      {paymentData ? (<PaymentModel paymentData={paymentData} />) : (<div><Loading /></div>)}
    </div>
    </>
  )
}

export default page