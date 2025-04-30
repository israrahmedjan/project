import React from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
import Login from '@/app/_components/user/Login';
import { useDispatch } from 'react-redux';
import { addUserInfo, addWishListItems, loadOldData, loginAction, LoginModelBoxAction } from '@/redux/slices/userSlice';
import { addToWishlist } from './whislist';
import { addcartItems } from '@/redux/slices/cartSlice';

async function getHome() {
 
    try {
          const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
         
          const params = new URLSearchParams({
            'populate[SEO][populate]': '*',
            'populate[Row1][populate]': '*',
            'populate[Row2][populate]': '*',
           'populate[Row2Listing][populate]': '*',
           'populate[Row3][populate]': '*',
           'populate[Row3Listing][populate]': '*',
           'populate[Row4][populate]': '*',
           'populate[Row4Listing][populate]': '*',
           'populate[Row5][populate]': '*',
           'populate[Row5Listing][populate]': '*',
           'populate[Row6][populate]': '*',
           'populate[Row6Listing][populate]': '*',
           'populate[Row7][populate]': '*',
           'populate[Row8][populate]': '*',
           'populate[Row8Listing][populate]': '*',
          //  'populate[Row8][populate]': '*',
          //  'populate[Row8Listing][populate]': '*',
          });
          
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/homepage?${params.toString()}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await res.json();
          //console.log("Response Data:", data);
          return data;
        } catch (error) {
          console.error("Error:", error.name);
        }
}

// Get User 1 Data
async function getUser1() {
 
  try {
        const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
       
        const params = new URLSearchParams({
          'populate[SEO][populate]': '*',
          'populate[Row1][populate]': '*',
          'populate[Row2][populate]': '*',
         'populate[Row2Listing][populate]': '*',
         'populate[Row3][populate]': '*',
        'populate[Row4][populate]': '*',
        'populate[Row4Listing][populate]': '*',
        //  'populate[Row3Listing][populate]': '*',
         'populate[Row5][populate]': '*',
         'populate[Row5Listing][populate]': '*',
         'populate[Row6][populate]': '*',
         'populate[Row6Listing][populate]': '*',
         'populate[Row7][populate]': '*',
        //  'populate[Row8][populate]': '*',
        //  'populate[Row8Listing][populate]': '*',
        //  'populate[Row8][populate]': '*',
        //  'populate[Row8Listing][populate]': '*',
        });
       
        
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user1?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        //console.log("Response Data:", data);
        return data;
      } catch (error) {
        console.error("Error:", error.name);
      }
}
// User12 data

async function getUser2() {
 
  try {
        const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
       
        const params = new URLSearchParams({
          'populate[SEO][populate]': '*',
          'populate[Row1][populate]': '*',
          'populate[Row2][populate]': '*',
         'populate[Row2Listing][populate]': '*',
         'populate[Row3][populate]': '*',
        'populate[Row4][populate]': '*',
        'populate[Row4Listing][populate]': '*',
        //  'populate[Row3Listing][populate]': '*',
         'populate[Row5][populate]': '*',
         'populate[Row5Listing][populate]': '*',
         'populate[Row6][populate]': '*',
         'populate[Row6Listing][populate]': '*',
         'populate[Row7][populate]': '*',
         'populate[Row8][populate]': '*',
        //  'populate[Row8Listing][populate]': '*',
        //  'populate[Row8][populate]': '*',
        //  'populate[Row8Listing][populate]': '*',
        });
       
        
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user2?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        //console.log("Response Data:", data);
        return data;
      } catch (error) {
        console.error("Error:", error);
      }
}


// payment Model
async function getpaymentModel() {
 
  try {
        const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
       
        const params = new URLSearchParams({
          'populate[SEO][populate]': '*',
          'populate[Row1][populate]': '*',
          'populate[Row2][populate]': '*',
         'populate[Row2Listing][populate]': '*',
         'populate[Row3][populate]': '*',
         'populate[Row3Listing][populate]': '*',
         'populate[Row4][populate]': '*',
           'populate[Row8][populate]': '*',
         'populate[Row8Listing][populate]': '*',
         'populate[Row5][populate]': '*',
         'populate[Row6][populate]': '*',
         'populate[Row6Listing][populate]': '*',
         'populate[Row7][populate]': '*',
        // 'populate[Row4][populate]': '*',
        // 'populate[Row4Listing][populate]': '*',
        // //  'populate[Row3Listing][populate]': '*',
        //  'populate[Row5][populate]': '*',
        //  'populate[Row5Listing][populate]': '*',
        //  'populate[Row6][populate]': '*',
        //  'populate[Row6Listing][populate]': '*',
        //  'populate[Row7][populate]': '*',
        // //  'populate[Row8][populate]': '*',
        // //  'populate[Row8Listing][populate]': '*',
        // //  'populate[Row8][populate]': '*',
        // //  'populate[Row8Listing][populate]': '*',
        });
    
        
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/payment-model?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        //console.log("Response Data:", data);
        return data;
      } catch (error) {
        console.error("Error:", error);
      }
}

// Get Careers

async function getCareers() {
 
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  
    const params = new URLSearchParams({
      'populate': '*', // populate all fields (you can be more specific if needed)
      'pagination[pageSize]': '100', // optional: adjust as needed
      'sort': 'publishedAt:desc',   // optional: sort by published date
    });
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/careers?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching careers:", error);
  }
}



// Get Footers
async function getFooter() {
 
  try {
        const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
       
        const params = new URLSearchParams({
          'populate[Footer][populate]': '*',
          'populate[Row1][populate]': '*',
          'populate[Row1Listing][populate]': '*',
          'populate[Row4][populate]': '*',
          'populate[Row4Listing][populate]': '*',
          'populate[Row2][populate]': '*',
          'populate[SocialMedia][populate]': '*',
         
        //  'populate[Row2Listing][populate]': '*',
        //  'populate[Row3][populate]': '*',
   
        });
    
        
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        //console.log("Response Data:", data);
        return data;
      } catch (error) {
        console.error("Error:", error);
      }
}


// Get Header 


// Get Footers
async function getHeader() {
 
  try {
        const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
       
        const params = new URLSearchParams({
          'populate[Header][populate]': '*',
          // 'populate[Row1][populate]': '*',
          // 'populate[Row1Listing][populate]': '*',
          // 'populate[Row4][populate]': '*',
          // 'populate[Row4Listing][populate]': '*',
          // 'populate[Row2][populate]': '*',
          // 'populate[SocialMedia][populate]': '*',
         
        //  'populate[Row2Listing][populate]': '*',
        //  'populate[Row3][populate]': '*',
   
        });
    
        
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/header?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        //console.log("Response Data:", data);
        return data;
      } catch (error) {
        console.error("Error:", error);
      }
}

  export {getHome,getUser1,getUser2,getCareers,getpaymentModel,getFooter,getHeader}