// import React from 'react'
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import One from '../Assets/UthaanSlider/Uthaan-1.jpg'
import Two from '../Assets/UthaanSlider/Uthaan-2.jpg'
import Three from '../Assets/UthaanSlider/Uthaan-3.jpg'


const UthaanSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={One} alt="Uthaan"  className="w-full h-full rounded-md"/>
      </div>
      <div>
        <img src={Two} alt="Uthaan" className="w-full h-full rounded-md" />
      </div>
      <div>
        <img src={Three} alt="Uthaan" className="w-full h-full rounded-md" />
      </div>
    </Slider>
  )
}

export default UthaanSlider