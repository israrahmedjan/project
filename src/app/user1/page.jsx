import React from 'react'

import User1 from '../_components/user1/User1'


export const generateMetadata = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/seo/about`);
  // const data = await res.json();

  return {
    title: "About us",
    description: "testing about us",
    keywords: ["business", "project", "test", "seo"],
  };
};

function page() {
  return (
    <>
    <div className="">
      <User1 />
    </div>
    </>
  )
}

export default page