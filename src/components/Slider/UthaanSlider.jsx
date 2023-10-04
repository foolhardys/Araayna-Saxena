// import React from 'react'
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import One from '../Assets/UthaanSlider/Uthaan-1.png'
import Two from '../Assets/UthaanSlider/Uthaan-2.png'
import Three from '../Assets/UthaanSlider/Uthaan-3.png'


const UthaanSlider = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={One} alt="Uthaan" />
      </div>
      <div>
        <img src={Two} alt="Uthaan" />
      </div>
      <div>
        <img src={Three} alt="Uthaan" />
      </div>
    </Slider>
  )
}

export default UthaanSlider