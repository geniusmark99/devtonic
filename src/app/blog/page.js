import BlogWidget from "../component/Blog/blog-widget"
import Header from "../component/Header"
export const metadata = {
title: "Devtonic Blog"
}

export default function Blog(){
return <>
<Header/>
<BlogWidget/>
</>
}