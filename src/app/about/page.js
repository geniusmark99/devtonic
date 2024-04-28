import AboutCenterWidget from "../component/About/AboutCenterWidget"
import Hero from "../component/About/hero"
import ContactWidget from "../component/ContactWidget"
import Footer from "../component/Footer"
import Header from "../component/Header"

export const metadata = {
title: "Devtonic About us"
}
export default function About(){
return <>
<Header/>
<Hero/>
<AboutCenterWidget/>

<ContactWidget/>
<Footer/>


</>
}