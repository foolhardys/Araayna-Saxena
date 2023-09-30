import React from 'react'
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import One from '../Assets/BharatnatyamSlider/Bharatnatyam-1.png'
import Two from '../Assets/BharatnatyamSlider/Bharatnatyam-2.png'
import Three from '../Assets/BharatnatyamSlider/Bharatnatyam-3.png'
import Four from '../Assets/BharatnatyamSlider/Bharatnatyam-4.png'
import Five from '../Assets/BharatnatyamSlider/Bharatnatyam-5.png'

const DanceSlider = () => {

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
                <img src={One} alt="Bharatnatyam" />
            </div>
            <div>
                <img src={Two} alt="Bharatnatyam" />
            </div>
            <div>
                <img src={Three} alt="Bharatnatyam" />
            </div>
            <div>
                <img src={Four} alt="Bharatnatyam" />
            </div>
            <div>
                <img src={Five} alt="Bharatnatyam" />
            </div>
        </Slider>
    )
}

export default DanceSlider