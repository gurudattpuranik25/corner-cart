import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImageOne from "../../images/SliderImageOne.PNG";
import sliderImageTwo from "../../images/SliderImageTwo.PNG";
import sliderImageThree from "../../images/SliderImageThree.PNG";
import sliderImageFour from "../../images/SliderImageFour.PNG";
import sliderImageFive from "../../images/SliderImageFive.PNG";

import "swiper/css";
import "swiper/css/navigation";
import "./PrimeSlider.css";
import { Navigation } from "swiper";

const data = [
  sliderImageOne,
  sliderImageTwo,
  sliderImageThree,
  sliderImageFour,
  sliderImageFive,
];

function PrimeSlider() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default PrimeSlider;
