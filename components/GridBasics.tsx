export const GridBasics = ()=>{
return <div className="max-w-screen-xl px-4 py-8 mx-auto">
<div className="grid  lg:gap-8 xl:gap-0 lg:py-18 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl text-4xl font-extrabold mb-4 md:text-5xl xl:text-6xl">
            Payments tool for software companies
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 lg:text-xl">
            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack    
        </p>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-800">
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="mainthumb.jpg"></img>
    </div>
</div>
</div>
}