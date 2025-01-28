import React from "react";
import Img1 from "../../assets/Products/oxgnLeorio1.jpg";
import Img2 from "../../assets/Products/oxgnHisoka1.jpg";
import Img3 from "../../assets/Products/oxgnBeanie1.jpg";
import Img4 from "../../assets/Products/oxgnHisokaBeanie.jpg";
import Img5 from "../../assets/Products/oxgnZoldyckTop.jpg";

import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "OXGN Leorio Top",
    rating: 5,
  },
  {
    id: 2,
    img: Img2,
    title: "OXGN Hisoka",
    rating: 5,
  },
  {
    id: 3,
    img: Img3,
    title: "OXGN x HxH Beanie",
    rating: 5,
  },
  {
    id: 4,
    img: Img4,
    title: "OXGN Hisoka Beanie",
    rating: 5,
  },
  {
    id: 5,
    img: Img5,
    title: "OXGN Zoldyck Black Top",
    rating: 5,
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div
          data-aos="fade-up"
          className="text-center mb-10 max-w-[600px] mx-auto"
        >
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hunter x Hunter collaboration
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
