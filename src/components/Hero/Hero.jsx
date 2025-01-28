import React from "react";
import Image1 from "../../assets/hero/oxgnBiancake-removeBG.png";
import Image2 from "../../assets/hero/oxgnMan2-Photoroom.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
  },
  {
    id: 2,
    img: Image2,
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-primary flex justify-center items-center text-white">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-red-700 absolute -top-1/3 right-0 rotate-45 -z-9"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                    BECOME A HUNTER.
                  </h1>
                  <h2 className="font-bold">Hunter x Hunter collaboration</h2>
                  <p className="text-sm">{data.description}</p>
                </div>
                <div className="relative">
                  <button className="bg-red-900 text-white font-bold py-2 px-4">
                    Buy Now
                  </button>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 relative z-9">
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:[450px] sm:scale-130 lg-scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
