import test from "node:test";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    { name: 'John Doe', review: 'This is a great product. I highly recommend it.' },
    { name: 'Jane Smith', review: 'Excellent quality and customer service.' },
    { name: 'Bob Johnson', review: 'I am very satisfied with my purchase.' },
    { name: 'Alice Williams', review: 'Fast shipping and great price.' },
    { name: 'Charlie Brown', review: 'Five stars. Would buy again.' },
    { name: 'Emily Davis', review: 'A fantastic experience from start to finish.' },
  ];

export const Testinomials = ()=>{

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024, // Tailwind's md breakpoint
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infite:true,
              dots:true,
            }
          },{
            breakpoint: 600, // Tailwind's md breakpoint
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }},{
                breakpoint: 480, // Tailwind's md breakpoint
                settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              }
          }
        ]
      };


return <div className="my-12">
    <style jsx global>{`
        .slick-slide > div {
            margin: 0 10px;
          }

        .slick-prev:before, 
        .slick-next:before {
          color: #000000 ;
        }
      `}</style>
    
    <div className="m-auto w-3/4">
        <div className="text-4xl font-extrabold text-center mb-4">
            Testimonials
        </div>
        <p className="text-center text-gray-500 max-w-screen-xl">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
    <div className="mt-12 ">
        <Slider {...settings}>
        {testimonials.map((d)=>(
            <div className="mb-8 shadow-xl rounded-xl px-4 py-10 h-96 mr-8" >
                <div className="flex justify-center items-center"> 
                    <img className="rounded-full w-44 h-44 mb-4" src="profileicon.jpg"></img> 
                </div>
                <div className=" text-center">
                    <p className="font-bold text-xl mb-1">{d.name}</p>
                    <p className="mb-2">{d.review}</p>
                    <button className="text-blue-600">Read More</button>
                </div>
            </div>
        ))}
        </Slider>
    </div>
</div>
</div>
}