import Image from "next/image";
import Header from "./component/Header";
import Hero from "./component/Home/Hero";
import Footer from "./component/Footer";
import HomeCenterWidget from "./component/Home/HomeCenterWidget";
import HomeServices from "./component/Home/HomeServices";
import ContactWidget from "./component/ContactWidget";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <HomeCenterWidget/>
   <HomeServices/>
   <ContactWidget/>

   <Footer/>

   </>
  );
}
