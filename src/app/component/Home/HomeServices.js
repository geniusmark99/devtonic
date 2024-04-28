import Image from "next/image"
import Project from '../../../../public/assets/images/project.svg';
import Mentoring from '../../../../public/assets/images/training.svg';
import Consultant from '../../../../public/assets/images/consultation.svg';
import ToolKit from '../../../../public/assets/images/toolkit.svg';
import Help from '../../../../public/assets/images/help.svg';
import Training from '../../../../public/assets/images/teacher.svg';
import Link from "next/link";

export default function HomeServices(){
return <>

<div className="flex flex-col mt-10">

<h1 className="mx-4 lg:mx-28 p-2 lg:p-10 text-center text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-cyan-500 to-fuchsia-600">OUR SERVICES</h1>

<div className="mx-4 lg:mx-28 p-2 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-5 lg:gap-y-10">
{
[{
id:1,
name: "Project",
desc:"Need an app built?Bring us the requirements and let us build it entirely for you.",
icon:Project
},
{
id:2,
name:"Mentoring",
desc:"Want someone to speed the learning curve for you? Gain the skills needed to complete your project through our one-on-one coaching sessions",
icon:Mentoring
},
{
id:3,
name:"Dedicated Consultant",
desc:"Wand to add one of our expert to your team? We have different options to meet your needs",
icon:Consultant
},
{
id:4,
name:"CoE Toolkit",
desc:"Get Valuable Insights and take control of your Power Platform environment with the help of our MicrosoftCoE toolkit installation service!",
icon: ToolKit
},
{
id:5,
name:"Help Now",
desc:"Have a quick issue you want help with or need a second set of eyes on a project? Reach out and let us solve your problem",
icon: Help
},

{
id:6,
name:"Training",
desc:"Want to learn about the Power Platform? We hand numerous on Demand and Live Training course options for you",
icon: Training,
},



].map((e)=>{
return <>
<div key={e.id}>
<div className="bg-neutral-900 flex flex-col justify-center items-center w-full lg:w-[300px] rounded-md p-3 gap-y-10">
<div className="flex flex-col gap-y-4 justify-center items-center">
<Image width={100} height={100} src={e.icon} alt="Image Icons"/>
<h2 className="text-xl lg:text-2xl text-gray-300 font-semibold">
    {e.name}
</h2>
<p className="text-base text-center text-gray-400">
{e.desc}
</p>
</div>
<div className="flex justify-center items-center">
<Link  href="/services" className="px-2 py-1 border hover:bg-blue-600 hover:text-white hover:border-blue-600 border-gray-500 rounded-md hover:shadow-md transition-all text-center text-gray-400">
Learn more
</Link>             
</div>
</div>
</div>
</>
})
}

{/* <div className="bg-neutral-900 flex flex-col justify-center items-center w-full lg:w-[300px] rounded-md p-3 gap-y-10">
<div className="flex flex-col gap-y-4 justify-center items-center">
<Image width={100} height={100} src={Project}/>
<h2 className="text-xl lg:text-2xl text-gray-300 font-semibold">Projects
</h2>
<p className="text-base text-center text-gray-400">
Need an app built?Bring us the requirements and let us build it entirely for you.
</p>
</div>
<div className="flex justify-center items-center">
<button className="px-2 py-1 border border-gray-500 rounded-md hover:shadow-md transition-all text-center text-gray-400">
Learn more
</button>             
</div>
</div>

<div className="bg-neutral-900 flex flex-col justify-center items-center w-full lg:w-[300px] rounded-md p-3 gap-y-10">
<div className="flex flex-col gap-y-4 justify-center items-center">
<Image width={100} height={100} src={Project}/>
<h2 className="text-xl lg:text-2xl text-gray-300 font-semibold">Projects
</h2>
<p className="text-base text-center text-gray-400">
Need an app built?Bring us the requirements and let us build it entirely for you.
</p>
</div>
<div className="flex justify-center items-center">
<button className="px-2 py-1 border border-gray-500 rounded-md hover:shadow-md transition-all text-center text-gray-400">
Learn more
</button>             
</div>
</div>


<div className="bg-neutral-900 flex flex-col justify-center items-center w-full lg:w-[300px] rounded-md p-3 gap-y-10">
<div className="flex flex-col gap-y-4 justify-center items-center">
<Image width={100} height={100} src={Project}/>
<h2 className="text-xl lg:text-2xl text-gray-300 font-semibold">Projects
</h2>
<p className="text-base text-center text-gray-400">
Need an app built?Bring us the requirements and let us build it entirely for you.
</p>
</div>
<div className="flex justify-center items-center">
<button className="px-2 py-1 border border-gray-500 rounded-md hover:shadow-md transition-all text-center text-gray-400">
Learn more
</button>             
</div>
</div>


<div className="bg-neutral-900 flex flex-col justify-center items-center w-full lg:w-[300px] rounded-md p-3 gap-y-10">
<div className="flex flex-col gap-y-4 justify-center items-center">
<Image width={100} height={100} src={Project}/>
<h2 className="text-xl lg:text-2xl text-gray-300 font-semibold">Projects
</h2>
<p className="text-base text-center text-gray-400">
Need an app built?Bring us the requirements and let us build it entirely for you.
</p>
</div>
<div className="flex justify-center items-center">
<button className="px-2 py-1 border border-gray-500 rounded-md hover:shadow-md transition-all text-center text-gray-400">
Learn more
</button>             
</div>
</div>



<div className="bg-neutral-900 flex flex-col justify-center items-center w-full lg:w-[300px] rounded-md p-3 gap-y-10">
<div className="flex flex-col gap-y-4 justify-center items-center">
<Image width={100} height={100} src={Project}/>
<h2 className="text-xl lg:text-2xl text-gray-300 font-semibold">Projects
</h2>
<p className="text-base text-center text-gray-400">
Need an app built?Bring us the requirements and let us build it entirely for you.
</p>
</div>
<div className="flex justify-center items-center">
<button className="px-2 py-1 border border-gray-500 rounded-md hover:shadow-md transition-all text-center text-gray-400">
Learn more
</button>             
</div>
</div>



<div className="bg-neutral-900 flex flex-col justify-center items-center w-full lg:w-[300px] rounded-md p-3 gap-y-10">
<div className="flex flex-col gap-y-4 justify-center items-center">
<Image width={100} height={100} src={Project}/>
<h2 className="text-xl lg:text-2xl text-gray-300 font-semibold">Projects
</h2>
<p className="text-base text-center text-gray-400">
Need an app built?Bring us the requirements and let us build it entirely for you.
</p>
</div>
<div className="flex justify-center items-center">
<button className="px-2 py-1 border border-gray-500 rounded-md hover:shadow-md transition-all text-center text-gray-400">
Learn more
</button>             
</div>
</div> */}

</div>

</div>

</>
}