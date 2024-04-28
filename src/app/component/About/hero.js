export default function Hero(){
    return <>
    <section>
    <div className="mt-10 relative grid w-full bg-neutral-900 h-96 lg:h-[32rem] place-items-center">
        <div className="flex flex-col items-center mx-auto text-center">
            <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-5 text-white">We at Devtonic</p><a href="#about" className="mt-8 cursor-pointer animate-bounce"><svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="26" r="18" stroke="white" stroke-width="2"></circle><path d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z" fill="white"></path></svg></a></div>
    </div><svg className="fill-neutral-900" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path></svg>
    </section>
    
    </>
}