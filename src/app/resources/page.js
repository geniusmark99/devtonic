import ComingSoonWidget from "../component/ComingSoonWidget";
import ContactWidget from "../component/ContactWidget";
import Footer from "../component/Footer";
import Header from "../component/Header";

export const metadata = {
title: 'Devtonic Resource'
}


export default function Resource(){
    return <>
    <Header/>
<ComingSoonWidget pagename="Resources"/>
<ContactWidget/>
    <Footer/>
    </>
}