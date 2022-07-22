import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideProducts.css";

import { Pagination, Navigation } from "swiper";

function SlideProducts() {
  const { sliderProducts } = data;

  return (
    <div>
      <h1 className="font-bold text-3xl py-6 px-3 drop-shadow-2xl ">
        Up to 65% off | Summer hues home furnishing picks from local shops{" "}
      </h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderProducts.map((item, index) => (
          <SwiperSlide key={index} className=" p-3">
            <img src={item.image} className="object-fill" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideProducts;
