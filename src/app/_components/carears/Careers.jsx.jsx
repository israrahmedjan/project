'use client'
import { ArrowRight, Camera, Clock, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Ticker from '../Ticker';
import ServiceSlider from '../ServiceSlider';
import { ChevronRight } from 'lucide-react'


import { motion } from 'framer-motion';
import Breadcrumb from '../Breadcrumb'
import { getCareers, getUser1 } from '@/helper/helper'
import Loading from '../Loading'

function Careers() {


    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const [careersData, setcareersData] = useState(null);
 
 
const getData = async () => {
    const data = await getCareers();
    console.log("User 1 Data", data);
    setcareersData(data.data);
    //setcompleteData(data.data.Section1);
    };
  
    useEffect(() => {
     // console.log("Url live:",L)
      getData();
    }, []);


    return (
        <>
            {/* Breadcrumbs */}
            <Breadcrumb user="Careers" name="John" />

            {/* Careers page */}


            {/* Careers Page End */}
            {careersData ? (<div>
           {careersData.map((career,index)=>
          (<div key={index}>           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-10 animate-fade-in-down">
            <div className="md:col-span-4 bg-white rounded-xl shadow p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">{career.title    }</h2>
              <div className="flex flex-wrap text-sm text-gray-500 gap-4">
                <span><strong>Department:</strong> Design</span>
                <span><strong>Location:</strong> Lahore, Pakistan</span>
                <span><strong>Type:</strong> Part-time</span>
              </div>
          
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Description</h3>
                <p className="text-gray-600">
                  Seeking a creative UI/UX Designer who can build beautiful interfaces.
                </p>
              </div>
          
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Requirements</h3>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<ul><li>2+ years of experience in UI/UX</li><li>Proficiency in Figma or Adobe XD</li><li>Strong portfolio required</li></ul>',
                  }}
                />
              </div>
          
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Benefits</h3>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<ul><li>Flexible working schedule</li><li>Project-based bonuses</li></ul>',
                  }}
                />
              </div>
          
              <div>
                <a
                  href="mailto:jobs@example.com"
                  className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div></div>)
        )}
 

            </div>):<div><Loading /></div>}
        </>
    )
}

export default Careers