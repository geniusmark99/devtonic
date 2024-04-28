import ContactWidget from "../component/ContactWidget";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Training/Hero";
import TrainingCenterWidget from "../component/Training/TrainingCenterWidget";

export const metadata = {
    title: "Devtonic Trainings"
}

export default function Training(){
    return <>
    <Header/>
    <Hero/>
    <TrainingCenterWidget/>
    


    <ContactWidget/>
    <Footer/>
    </>
}