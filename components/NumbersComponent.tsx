export const NumbersComponent = ()=>{

return <div>
<div className="px-4  pt-8 mb-2 md:mb-4">
    <div className="mb-12 max-w-screen-xl mx-auto text-center">
        <h2 className="font-extrabold text-4xl mb-4 ">Home to the software teams</h2>
        <p className="font-normal text-gray-600 text-base ">Meet your developers where they already are. GitHub is home to over 40 million developers and the world’s largest open source community.</p>
    </div>
    <div className="grid grid-cols-2  md:grid-cols-4 gap-5 max-w-screen-xl m-auto   ">
        <div className=" m-auto">
            <h2 className="text-4xl font-extrabold">73M+</h2>
            <p className="font-normal text-gray-600">developers</p>
        </div>
        <div className="m-auto">
            <h2 className="text-4xl font-extrabold">1B+</h2>
            <p className="font-normal text-gray-600">contributors</p>
        </div>
        <div className="m-auto">
            <h2 className="text-4xl font-extrabold">4M+</h2>
            <p className="font-normal text-gray-600">organizations</p>
        </div>
        <div className="m-auto">
            <h2 className="text-4xl font-extrabold">90K+</h2>
            <p className="font-normal text-gray-600">Students</p>
        </div>
    </div>
</div>
</div>
}