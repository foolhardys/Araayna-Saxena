import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SingleTalent from '../Extracurricular/SingleTalent';
import 'swiper/css';

const talents = [
    {
        id: 1,
        heading: 'Bharatnatyam',
        description: 'Trained in Bharatanatyam through 8+ years of relentless dedication and attained an esteemed degree with distinction.',
        url: 'bharatnatyam',
        "interval": 1500
    },
    {
        id: 2,
        heading: 'Actor, Playwright, Director and Activist',
        description: '',
        url: 'drama'
    },
    {
        id: 3,
        heading: 'Drummer- Rock and Roll',
        description: 'Dedicated to learning the drums from the Trinity College of London, fueled by a deep passion for rock and roll-Grade 2 examination- achieved Distinction',
        url: 'drums'
    },
    {
        id: 4,
        heading: 'Pianist',
        description: "Playing Piano since Grade 3 under the school's Piano Club and pursuing examinations from Trinity College of London.",
        url: 'piano'
    },
]

const TalentSlider = () => {

    return (
        <Swiper
            spaceBetween={50}
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                talents.map((talent) => {
                    const { id } = talent
                    return (
                        <SwiperSlide key={id}>
                            <SingleTalent {...talent} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

    )
}

export default TalentSlider



