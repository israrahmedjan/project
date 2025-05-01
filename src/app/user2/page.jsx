
import React from 'react'
import User2 from '../_components/user2/User2'
import { getUser2, getUser2Seo } from '@/helper/helper';

export const generateMetadata = async () => {
  const seoData = await getUser2Seo();
  console.log("Seo data",seoData.metaTitle);
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: [`${seoData.keywords}`],
  };
};

async function page() {

  const user2Data = await getUser2(); // ✅ async function ko await karo
  console.log("homeData", user2Data);
  
  return (
    <>
    <div className="mt-[80px]">
      
      {user2Data ? (<User2 user2Data={user2Data} />) : (<div><Loading /></div>)}
    </div>
    </>
  )
}

export default page