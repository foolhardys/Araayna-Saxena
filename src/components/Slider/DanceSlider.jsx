import React from 'react'
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import One from '../Assets/BharatnatyamSlider/9.jpg'
import Two from '../Assets/BharatnatyamSlider/11.jpg'
import Three from '../Assets/BharatnatyamSlider/10.jpg'
import Four from '../Assets/BharatnatyamSlider/12.jpg'
import Five from '../Assets/BharatnatyamSlider/13.jpg'
import Six from '../Assets/BharatnatyamSlider/15.jpg'
import Seven from '../Assets/BharatnatyamSlider/17.png'
import Eight from '../Assets/BharatnatyamSlider/18.jpg'

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
                <img src={Four} alt="Bharatnatyam" className='h-[510px] w-[400px] rounded-md' />
            </div>
            <div>
                <img src={Eight} alt="Bharatnatyam" className='h-[510px] w-[400px] rounded-md' />
            </div>
            <div>
                <img src={One} alt="Bharatnatyam" className='h-[510px] w-[400px] rounded-md' />
            </div>
            <div>
                <img src={Six} alt="Bharatnatyam" className='h-[510px] w-[400px] rounded-md' />
            </div>
            <div>
                <img src={Seven} alt="Bharatnatyam" className='h-[510px] w-[400px] rounded-md' />
            </div>
            <div>
                <img src={Five} alt="Bharatnatyam" className='h-[510px] w-[400px] rounded-md' />
            </div>
            <div>
                <img src={Two} alt="Bharatnatyam" className='h-[510px] w-[400px] rounded-md' />
            </div>
            <div>
                <img src={Three} alt="Bharatnatyam" className='h-[510px] w-[400px] rounded-md' />
            </div>
        </Slider>
    )
}

export default DanceSlider