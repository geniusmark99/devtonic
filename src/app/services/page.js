import Header from "../component/Header";
import Hero from "../component/Service/Hero";
import ContactWidget from "../component/ContactWidget";
import Image from "next/image";
import Project from '../../../public/assets/images/project.svg';
import Mentoring from '../../../public/assets/images/training.svg';
import Consultant from '../../../public/assets/images/consultation.svg';
import ToolKit from '../../../public/assets/images/toolkit.svg';
import Help from '../../../public/assets/images/help.svg';
import Training from '../../../public/assets/images/teacher.svg';
import Link from "next/link";
import Footer from "../component/Footer";

export const metadata = {
    title: "DevTonic Services",
  description: "",
  }

export default function Service(){
    return <>
    <Header/>
    <Hero/>
    <div className="mx-4 lg:mx-40 flex flex-col gap-y-4">
        {
        [
            {
                id:1,
                name: "Project",
                idElement:"projects",
                desc:" Bring us your business problem and let us build you a solution using the Microsoft Power Platform. If you want a structured project, we can work with you to define the project scope and timeline",
                desc2:  "We also offer services to help you move any data stored in InfoPath, Access, or SharePoint Designer Workflow to the Power Platform.",
                icon:Project
                },
                {
                id:2,
                name:"Mentoring",
                idElement:"mentoring",
                desc:"Want someone to speed the learning curve for you? Gain the skills needed to complete your project through our one-on-one coaching sessions",
                desc2:  "We also offer services to help you move any data stored in InfoPath, Access, or SharePoint Designer Workflow to the Power Platform.",
                icon:Mentoring
                },
                {
                id:3,
                name:"Dedicated Consultant",
                idElement:"dedicated-consultant",
                desc:"Wand to add one of our expert to your team? We have different options to meet your needs",
                desc2:  "We also offer services to help you move any data stored in InfoPath, Access, or SharePoint Designer Workflow to the Power Platform.",
                icon:Consultant
                },
                {
                id:4,
                idElement:"toolkit",
                name:"CoE Toolkit",
                desc:"Get Valuable Insights and take control of your Power Platform environment with the help of our MicrosoftCoE toolkit installation service!",
                desc2:  "We also offer services to help you move any data stored in InfoPath, Access, or SharePoint Designer Workflow to the Power Platform.",
                icon: ToolKit
                },
                {
                id:5,
                name:"Help Now",
                idElement:"help-now",
                desc:"Have a quick issue you want help with or need a second set of eyes on a project? Reach out and let us solve your problem",
                desc2:  "We also offer services to help you move any data stored in InfoPath, Access, or SharePoint Designer Workflow to the Power Platform.",
                icon: Help
                },
                
                {
                id:6,
                name:"Training",
                idElement:"training",
                desc:"Want to learn about the Power Platform? We hand numerous on Demand and Live Training course options for you",
                desc2:  "We also offer services to help you move any data stored in InfoPath, Access, or SharePoint Designer Workflow to the Power Platform.",
                icon: Training,
                },
                
        ].map((e)=>{
            return <>
                
            <div id={e.idElement} style={{ width:'10px' }}></div>
              <div   className="bg-neutral-900 w-full flex flex-col gap-y-4 lg:flex-row p-2 rounded-md gap-x-4 items-center border-2 border-neutral-500 transition-all scale-95 hover:scale-100 service-pallette">
         <div className="flex flex-col gap-y-10 w-full justify-center items-center relative before:absolute before:content-[''] before:bg-transparent lg:before:bg-neutral-600  before:w-1 before:rounded-sm before:right-2 before:h-full">
            <h1 className="text-xl lg:text-3xl font-bold">{e.name}</h1>
            <Image src={e.icon}  width={100} height={100} alt="Image Icon"/>
            <a  className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-neutral-600 rounded-lg hover:bg-violet-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 service-pallette-link">
                Contact us
            </a>
         </div>
         <div className="w-8/12">
         <p>
        {e.desc}
         </p>
         <p>
            {e.desc2}
         </p>
         </div>
         
        </div> 


            </>
        })

        }
       



    </div>

    <ContactWidget/>
    <Footer/>

    </>
}