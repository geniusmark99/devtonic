"use client";
import Image from "next/image";
import Project from '../../../../public/assets/images/project.svg';
import Mentoring from '../../../../public/assets/images/training.svg';
import Consultant from '../../../../public/assets/images/consultation.svg';
import ToolKit from '../../../../public/assets/images/toolkit.svg';
import Help from '../../../../public/assets/images/help.svg';
import Training from '../../../../public/assets/images/teacher.svg';
import Link from "next/link";

const Hero = ()=> {
return <>
<div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
 

    <div className="mt-5 max-w-xl text-center mx-auto">
      <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
        Our Services
      </h1>
    </div>

    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-600 dark:text-neutral-400">At <span className="bg-clip-text font-bold italic bg-gradient-to-tr text-transparent from-violet-600 to-cyan-500"> DevTonic</span> we offer you top-notch services</p>
    </div>

    <div className="mt-10 sm:mt-20 grid grid-cols-2 lg:flex justify-center">
    <a className="m-1 py-3 transition-all scale-95 hover:scale-100 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="#projects">
          <Image width={100} height={100} src={Project} alt="icon image"/>
          Projects
        </a>
    <a className="m-1 py-3 transition-all scale-95 hover:scale-100 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="#mentoring">
          <Image width={100} height={100} src={Mentoring} alt="icon image"/>
          Mentoring
        </a>
    <a className="m-1 py-3 transition-all scale-95 hover:scale-100 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="#dedicated-consultant">
          <Image width={100} height={100} src={Consultant} alt="icon image"/>
          Dedicated Consultant
        </a>
    <a className="m-1 py-3 transition-all scale-95 hover:scale-100 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="#toolkit">
          <Image width={100} height={100} src={ToolKit} alt="icon image"/>
          CoE Toolkit
        </a>
    <a className="m-1 py-3 transition-all scale-95 hover:scale-100 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="#help-now">
          <Image width={100} height={100} src={Help} alt="icon image"/>

          Help now!
        </a>
    <a className="m-1 py-3 transition-all scale-95 hover:scale-100 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="#training">
          <Image width={100} height={100} src={Training} alt="icon image"/>

          Training
        </a>
</div>


  </div>
</div>
</>
}

export default Hero;