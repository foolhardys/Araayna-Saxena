// import React from 'react'
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import One from '../Assets/UthaanSlider/1.jpg'
import Two from '../Assets/UthaanSlider/2.jpg'
import Three from '../Assets/UthaanSlider/3.jpg'
import Four from '../Assets/UthaanSlider/4.png'
import Five from '../Assets/UthaanSlider/5.jpg'
import Six from '../Assets/UthaanSlider/6.png'
import Seven from '../Assets/UthaanSlider/7.jpg'
import Eight from '../Assets/UthaanSlider/8.jpg'
import Nine from '../Assets/UthaanSlider/9.jpg'


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
        <img src={One} alt="Uthaan"  className="w-[900px] h-[400px] rounded-md"/>
      </div>
      <div>
        <img src={Two} alt="Uthaan" className="w-[900px] h-[400px] rounded-md" />
      </div>
      <div>
        <img src={Three} alt="Uthaan" className="w-[500px] h-[400px] rounded-md mx-auto" />
      </div>
      <div>
        <img src={Four} alt="Uthaan" className="w-[900px] h-[400px] rounded-md" />
      </div>
      <div>
        <img src={Five} alt="Uthaan" className="w-[500px] h-[400px] rounded-md mx-auto" />
      </div>
      <div>
        <img src={Six} alt="Uthaan" className="w-[900px] h-[400px] rounded-md" />
      </div>
      <div>
        <img src={Seven} alt="Uthaan" className="w-[900px] h-[400px] rounded-md" />
      </div>
      <div>
        <img src={Eight} alt="Uthaan" className="w-[900px] h-[400px] rounded-md" />
      </div>
      <div>
        <img src={Nine} alt="Uthaan" className="w-[900px] h-[400px] rounded-md" />
      </div>
    </Slider>
  )
}

export default UthaanSlider