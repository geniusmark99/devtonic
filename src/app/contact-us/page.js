import AboutCenterWidget from "../component/About/AboutCenterWidget"
import ContactWidget from "../component/ContactWidget"
import Footer from "../component/Footer"
import Header from "../component/Header"

export const metadata = {
    title: "Devtonic Contact us"
}

export default function Contact(){
    return <>
    <Header/>
   <ContactWidget/>
    <Footer/>
    </>
}