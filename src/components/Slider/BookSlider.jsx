import React from 'react'
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import One from '../Assets/BookSlider/1.jpg'
import Two from '../Assets/BookSlider/2.jpg'
import Three from '../Assets/BookSlider/3.jpg'
import Four from '../Assets/BookSlider/4.jpg'
import Five from '../Assets/BookSlider/5.jpg'




const BookSlider = () => {

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
                <img src={One} alt="Book" className='h-[55vh] w-[450px] rounded-md' />
            </div>
            <div>
                <img src={Two} alt="Book" className='h-[55vh] w-[450px] rounded-md' />
            </div>
            <div>
                <img src={Three} alt="Book" className='h-[55vh] w-[450px] rounded-md' />
            </div>
            <div>
                <img src={Four} alt="Book" className='h-[55vh] w-[450px] rounded-md' />
            </div>
            <div>
                <img src={Five} alt="Book" className='h-[55vh] w-[450px] rounded-md' />
            </div>
        </Slider>
    )
}

export default BookSlider