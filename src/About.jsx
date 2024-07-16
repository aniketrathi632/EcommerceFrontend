import React from 'react';
import { useGetUserQuery } from '../Utility/authApi';
import PhoneNumberUpdate from './PhoneNumberUpdate';

const About = () => {

  let {data , isError , isLoading } = useGetUserQuery();
if(!data) return <h1> Not available</h1>
if(isLoading){
  return <span className="loading loading-dots loading-lg"></span>
}
 
  return (
   
<div className='flex justify-center align-center'>
<div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg ">
<div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
        User database
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Details and informations about user.
    </p>
</div>
<div class="border-t border-gray-200">
    <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
                Username
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
            {data.data.userName}
            </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
                Phone Number
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {data?.data?.phoneNumber || "NA "} <PhoneNumberUpdate></PhoneNumberUpdate>
            </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
                Email address
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {data.data.email} 
            </dd>
        </div>
        
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
                About
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            </dd>
        </div>
    </dl>
</div>
</div>
</div>
  )
}

export default About