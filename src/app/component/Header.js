"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from '../../../public/assets/images/devtonic-transparent-logo.png';

const Header = ()=>{

const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

const pathname = usePathname();


return <>
<header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full mt-4">
    <nav className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
        <div className="flex items-center justify-between">

            <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../../templates/agency/index.html" aria-label="Preline">
       <Image src={Logo} alt="Devtonic Logo" width={130} height={50} style={{ width:"auto",height:"auto" }}/>



        </a>

            <div className="md:hidden">
        <button type="button" onClick={toggleModal} className="size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse"
                    aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" x2="21" y1="6" y2="6"></line>
              <line x1="3" x2="21" y1="12" y2="12"></line>
              <line x1="3" x2="21" y1="18" y2="18"></line>
            </svg>
            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
            </div>
        </div>

        <div id="navbar-collapse" className={`${isOpen ? 'flex' : 'hidden' } overflow-hidden transition-all duration-300 basis-full grow md:block`}>
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                <Link className={`link ${pathname === '/' ? 'text-violet-600' : 'text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300'}`}  href="/" aria-current="page">Home</Link>
                <Link className={`link ${pathname === '/services' ? 'text-violet-600' : 'text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300'}`} href="/services">Our Services</Link>
                <Link className={`link ${pathname === '/training' ? 'text-violet-600' : 'text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300'}`} href="/training">Training</Link>
                <Link className={`link ${pathname === '/resources' ? 'text-violet-600' : 'text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300'}`} href="/resources">Resource</Link>
                <Link className={`link ${pathname === '/blog' ? 'text-violet-600' : 'text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300'}`} href="/blog">Blog</Link>                                        
                <Link className={`link ${pathname === '/about' ? 'text-violet-600' : 'text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300'}`} href="/about">About</Link>

                <div>
                    <Link className={`link group inline-flex items-center gap-x-2 py-2 px-3 bg-gradient-to-tl font-medium text-sm text-white rounded-full focus:outline-none ${pathname === '/contact-us' ? ' from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600': 'from-violet-600 to-fuchsia-600 hover:from-blue-600 hover:to-violet-600'}`} href="/contact-us">
              Contact us
            </Link>
                </div>
            </div>
        </div>
    </nav>
</header>
</>
}

export default Header;