import React from 'react'
import Image1 from '../Assets/Author/Images/Image-1.png'
import Image2 from '../Assets/Author/Images/Image-2.png'

const PageMainArticle = () => {
    return (
        <article className='lg:w-[1280px] rounded-md shadow-lg border-2 my-[150px] flex lg:flex-row p-4'>
            <div className='lg:w-2/5 w-full border-2'>
                <p className='p-3 font-quicksand text-[18px] font-[400] leading-[40px] '>
                    • Felicitated by distinguished personalities -
                    <br />
                    1. Hon'ble Mr. Mangubhai C Patel, Governor of M.P.
                    <br />
                    2. Hon'ble Mr. Vishwas Sarang, Minister of Medical Education (M.P.);
                    <br />
                    3. Shri Manoj Srivastava, author 36 books
                    <br />
                    • Addressed peers and faculty, shared my motivation behind the book and its intended message at a special        felicitation ceremony held at my school.
                    <br /><br />
                    <button className='bg-purple hover:bg-lightpurple px-2 py-1 transition rounded-md w-[230px] '> <a href="" className='font-quicksand text-[18px] font-[700] text-white hover:text-gray '>Post Link</a> </button>
                    <br /><br />
                    • Recipient of  a Letter of Appreciation from the Chairman of Billabong High International
                    <a href="https://drive.google.com/file/d/1WcfCb-rATC6q1TqZFV4iMkp3LKuuxzPM/view" className='font-quicksand font-[400] text-[18px] text-purple underline '> letter of appreciation.pdf</a> Founder- Billabong High International School.
                    <br />
                    • Book recognized by <a href="https://en.wikipedia.org/wiki/Chandrashekhara_Kambara" className='font-quicksand font-[400] text-[18px] text-purple underline '>  Dr. Chandrashekhar Kambar</a>, Padma Bhushan recipient, President- Sahitya Academy.
                    <br />
                    • Book featured in  prominent newspapers including  New Indian Express(Bangalore Edition), Raj Express, Patrika Bhopal, Dainik Bhaskar, Peoples Samachar and LitGleam, India's first literary and lifestyle magazine catering to urban youth interests.
                    <br />
                    • Organized "Ideological Session on Cultivating Literary Wisdom in Youth," with <a href="http://www.clubliterati.com/" className='font-quicksand font-[400] text-[18px] text-purple underline '></a>  Club Literati graced by the presence of esteemed dignitaries including Hon'ble Mr. Mangubhai C Patel, Governor of M.P.; Hon'ble Mr. Vishwas Sarang, Minister of Medical Education (M.P.); Shri Manoj Srivastava, Retd. Senior IAS Officer, and accomplished author of 36 books leading to the presentation of insightful conclusions and innovative solutions.
                    <br />
                    • Devised a comprehensive report and mailed it to principals of 5 different  schools in Bhopal
                </p>
            </div>
            <div className='lg:w-3/5 w-full border-2 flex flex-col gap-4 justify-evenly'>
                <div className='border-2'>
                    <img src={Image1} alt="" />
                    <img src={Image2} alt="" />
                </div>
            </div>
        </article>
    )
}

export default PageMainArticle