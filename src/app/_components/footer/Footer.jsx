'use client'
import { getFooter } from '@/helper/helper';
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Footer() {
  const [footerData, setfooterData] = useState(null);
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const getData = async () => {
    const data = await getFooter();
    console.log("Footer", data);
    setfooterData(data.data);
    //setcompleteData(data.data.Section1);
  };

  useEffect(() => {
    console.log("Url live:", process.env.NEXT_PUBLIC_STRAPI_API_URL)
    getData();
  }, []);

  return (
    <>
 
{/* medium devices */}
<footer className="w-full bg-gray-100 py-10 px-4 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
     {/* <pre>{JSON.stringify(footerData?.SocialMedia[0]?.image.url, null, 2)}</pre> */}
    {/* Logo Section */}
    {footerData?.Footer && (
    <div className="flex flex-col items-center md:items-start">
    

     {footerData.Footer?.logo?.url ? (<Image
                src={`${footerData.Footer?.logo.url}`}
                alt={`${footerData.Footer?.logo .url}`}
                width={125}
                height={125}

              />
              ) : (<Image
                src={`${domain}/images/noimage.jpg`}
                alt={`No Image`}
                width={125}
                height={125} />)}

      <p className="text-gray-600 text-sm text-center md:text-left">
       {footerData.Footer?.content}
      </p>
    </div>)}

    {/* Column 1 */}
    {footerData?.Row1 && (
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-800 font-semibold mb-2">{footerData?.Row1?.heading}</h3>
      {footerData?.Row1Listing && (<div>
        {footerData?.Row1Listing.map((listing, index) => (
          <div key={index}>
            <Link href={`${listing.btnAction}`} className="text-gray-600 text-sm hover:text-gray-800">{listing.btnLabel}</Link>
          
            </div>
        ))}
      </div>
      )}
    </div>)}

    {/* Column 2 */}
    {footerData?.Row4 && (
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-800 font-semibold mb-2">{footerData?.Row4?.heading}</h3>
      {footerData?.Row4Listing && (<div>
        {footerData?.Row4Listing.map((listing, index) => (
          <div key={index}>
            <Link href={`${listing.btnAction}`} className="text-gray-600 text-sm hover:text-gray-800">{listing.btnLabel}</Link>
          
            </div>
        ))}
      </div>
      )}
    </div>)}

    {/* Column 3 */}
    {footerData?.Row2 && (
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-800 font-semibold mb-2">{footerData?.Row2?.heading}</h3>
      {footerData?.SocialMedia && (<div>
        {footerData?.SocialMedia.map((listing, index) => (
          <div key={index}>
           
            <Link href={`${listing.btnAction}`} className="text-gray-600 text-sm flex items-center gap-2 hover:text-gray-800">
            {listing?.image?.url ? (<Image
                src={`${listing?.image?.url}`}
                alt={`${listing?.image?.url}`}
                width={32}
                height={32}

              />
              ) : (<Image
                src={`${domain}/images/noimage.jpg`}
                alt={`No Image`}
                width={125}
                height={125} />)}
            <span>{listing.btnLabel}</span>
          
           
</Link>
            </div>
        ))}
      </div>
      )}
    </div>)}

  </div>

  {/* Bottom copyright */}
  <div className="mt-10 text-center text-gray-600 text-xs">
    © {new Date().getFullYear()} Your Company. All rights reserved.
  </div>
</footer>


{/* small devices */}

<footer className="hidden w-full bg-gray-100 pt-10 pb-10 ">
<div className='w-full flex flex-col mx-4'>
      <div className="flex flex-col items-center">
      <Image 
        src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/logo.svg`} 
        alt="Company Logo"
        width={100}
        height={100}
        className="h-10 w-auto mb-4"
      />
      
    </div>
      
      <div className="w-full flex flex-row gap-2">

  {/* Column 1 */}
  <div className="flex-1 flex flex-col gap-2">
    <h3 className="text-gray-800 font-semibold mb-3">Company</h3>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">About Us</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Careers</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Latest Blog related to Sports</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Press club</a>
  </div>

  {/* Column 2 */}
  <div className="flex-1 flex flex-col gap-2">
    <h3 className="text-gray-800 font-semibold mb-3">Support</h3>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Help Center</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Safety Information</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Community Guidelines</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Contact Us</a>
  </div>

  {/* Column 3 */}
  <div className="flex-1 flex flex-col gap-2">
    <h3 className="text-gray-800 font-semibold mb-3">Legal</h3>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Privacy Policy</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Terms of Service</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Cookies Policy</a>
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Law Enforcement</a>
  </div>

</div>

<div className="mt-10 text-center text-gray-600 text-xs">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </div>
</div>
</footer>




  </>

  
  )
}

export default Footer