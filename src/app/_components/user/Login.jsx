'use client';

import React, { useState } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie library
import axios from 'axios';
import * as Yup from 'yup'; // Import Yup for validation
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { addUserInfo, loginAction, LoginModelBoxAction } from '@/redux/slices/userSlice';
import { handleLoginFunc, UserLoginClose } from '@/helper/helper';
import { SquareX,User } from 'lucide-react';

function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [userForm, setuserForm] = useState({
        email: 'john@gmail.com',
        password: 'israr123',
    });

    const [errors, setErrors] = useState({}); // State for validation errors
    const [loading, setloading] = useState(false);
    const [servererror, setservererror] = useState("");
    
    const LoginModelBox = useSelector((state) => state.user.LoginModelBox);
    const isUserLogin = useSelector((state)=>state.user.isUserLogin);
    const user = useSelector((state)=>state.user.user);


    // Yup schema for validation
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Invalid email format'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the form state
        setuserForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the error for the field being changed
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission

        try {
            // Validate form data using Yup
            await validationSchema.validate(userForm, { abortEarly: false });

            // If validation passes, make the API call
            setloading(true);
            const response = await axios.post('/api/login', userForm); // Replace with your API URL

            // Save token to cookies

            //console.log("Login User response", )

            Cookies.set('auth_token', response.data.token, { expires: 7 }); // Expires in 7 days
            dispatch(addUserInfo(response.data.user));
            
            dispatch(loginAction(true));
            dispatch(LoginModelBoxAction(false));
            localStorage.setItem("isUserLogin", JSON.stringify(true));
            localStorage.setItem("user", JSON.stringify(response.data.user));
           // console.log("user",user, "and", isUserLogin);

            //console.log('Response:', response.data.user);
            setloading(false);
            router.push("/");
            //alert('User Login successfully!');
        } catch (error) {

            if (error) {
                //console.log("Some issues Occcures!",error.response.data);
               // setservererror(error.response.data.message);
                setloading(false);
            }

        }
    };

    return (

        <>
                {/* Medium and large devices */}
            {LoginModelBox && (
           <div className="hidden md:flex fixed inset-0 bg-black bg-opacity-50 justify-center items-center z-[5555555]">

                    <div className="bg-white p-6 rounded-lg shadow-lg md:w-[500px] text-center">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-primary">
                                <div className='flex justify-start items-center'><User size={22} /><span>User Login!</span></div>
                                </h2>
                            <button onClick={() => UserLoginClose(dispatch)}><SquareX size={22} /></button>
                        </div>

                        <div className="max-w-md mx-auto md:mt-4 p-6 border border-gray-300 rounded-lg shadow-md bg-white">


                            {servererror && <span className='text-red-500 italic'>{servererror}</span>}

                            <form onSubmit={handleSubmit} className="space-y-4">


                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-primary text-left">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={userForm.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className={`mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-primary text-left">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={userForm.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className={`mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                </div>

                                {/* Submit Button */}
                                <div className='flex justify-between'>
                                <button onClick={()=>UserLoginClose(dispatch)} className='py-2 px-4 font-semibold rounded-md border-gray-200 border'>Cancel</button>
                                <button
                                    type="submit"
                                    className={`w-28 py-2 px-4 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-white-600 text-secondary border-gray-200 border hover:bg-gray-300 focus:bg-gray-200"
                                        }`}
                                    disabled={loading} // Disable button when loading is true
                                >
                                    {loading ? "Loading..." : "Login"}
                                </button>
                                </div>



                            </form>
                        </div>
                    </div></div>
            )}

                {/* Small large devices */}
                {LoginModelBox && (
          <div className="flex sm:hidden fixed inset-0 bg-black bg-opacity-50 justify-center items-center z-[5555555]">

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className='flex justify-between items-center'>
                        <h2 className="text-primary">
                                <div className='flex justify-start items-center'><User size={22} /><span>User Login!</span></div>
                                </h2>
                            <button onClick={() => UserLoginClose(dispatch)}><SquareX size={22} /></button>
                        </div>

                        <div className="max-w-md mx-auto mt-2 p-6 border border-gray-300 rounded-lg shadow-md bg-white">


                            {servererror && <span className='text-red-500 italic'>{servererror}</span>}

                            <form onSubmit={handleSubmit} className="space-y-2">


                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-primary text-left">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={userForm.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className={`mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-primary text-left">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={userForm.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className={`mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                </div>

                                {/* Submit Button */}
                                <div className='flex justify-between'>
                                <button onClick={()=>UserLoginClose(dispatch)} className='w-20 px-2 py-1 text-sm rounded-md border-gray-200 border'>Cancel</button>
                                <button
                                    type="submit"
                                    className={`w-20 px-2 py-1 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-white-600 text-secondary border-gray-200 border hover:bg-indigo-700 focus:ring-indigo-500"
                                        }`}
                                    disabled={loading} // Disable button when loading is true
                                >
                                    {loading ? "Loading..." : "Login"}
                                </button>
                                </div>



                            </form>
                        </div>
                    </div></div>
            )}

        </>
    );
}

export default Login;
