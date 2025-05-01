import React from 'react'

import User1 from '../_components/user1/User1'
import { getUser1, getUser1Seo } from '@/helper/helper';


export const generateMetadata = async () => {
  const seoData = await getUser1Seo();
  console.log("Seo data User1",seoData.metaTitle);
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: [`${seoData.keywords}`],
  };
};

async function page() {
  const user1Data = await getUser1(); // ✅ async function ko await karo
  console.log("Data user1",user1Data)
  return (
    <>
    <div className="">
     
      {user1Data ? (<User1 user1Data ={user1Data } />) : (<div><Loading /></div>)}
    </div>
    </>
  )
}

export default page