"use client";
// import React, { useState, useEffect } from 'react';

export default function HomeCenterWidget() {

  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/databases/home.json'); // Assuming database.json is in the public directory
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //       // console.log(jsonData["content"][0]['section_one']);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

return <>
<div className="mx-4 mt-8 lg:mx-6 grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">

 
  <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-violet-600/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="#">
    <div className="mb-5">
   

      <div className="mt-5">
        <p className="font-semibold text-5xl text-white">15,000 +</p>
        <h3 className="mt-5 font-medium text-lg text-white">Students enrolled in the Power Platform training courses</h3>
        <p className="mt-1 text-neutral-400">With the aim of optimizing customer interactions and boosting brand loyalty, our team at Devtonic leveraged powerapps powerful tools and expertise to deliver exceptional results.</p>
      </div>
    </div>
 
  </a>

  <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-violet-600/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="#">
    <div className="mb-5">


      <div className="mt-5">
        <p className="font-semibold text-5xl text-white">1000 +</p>
        <h3 className="mt-5 font-medium text-lg text-white">Customers we have assisted with Power Platform solution</h3>
        <p className="mt-1 text-neutral-400">Devtonic embarked on a mission to revolutionize the Power Platform experience.</p>
      </div>
    </div>
  
  </a>

  <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-violet-600/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="#">
    <div className="mb-5">
     

      <div className="mt-5">
        <p className="font-semibold text-5xl text-white">230 +</p>
        <h3 className="mt-5 font-medium text-lg text-white">Active Power Platform Project and support customers</h3>
        <p className="mt-1 text-neutral-400">With the goal of accelerating project delivery and enhancing collaboration among development teams, DevTonic leveraged GitLab's comprehensive suite of tools and we at DevTonic expertise in digital product development.</p>
      </div>
    </div>
 
  </a>
</div>

</>
}