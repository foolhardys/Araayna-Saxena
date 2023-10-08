import React from 'react'
import BookSlider from '../Slider/BookSlider'

const BookBox = ({ img, para, button, buttontitle, link, id }) => {
    return (
        <>
            <article className='flex items-center justify-center p-4'>
                <div className='w-[450px] min-h-[500px] bg-purple/50 rounded-md flex flex-col pt-2'>
                    <img src={img} alt='' className='w-[full]' />
                    {
                        para && <p className=' p-2 text-[18px] font-quicksand font-[40px] m-5'>
                            {para}
                        </p>
                    }
                    {id === 1 && <p className=' p-2 text-[18px] font-quicksand font-[40px] m-5'>
                        Felicitated by distinguished personalities:
                        <br /><br />
                        Hon'ble Mr. Mangubhai C Patel, Governor of M.P.; Hon'ble Mr. Vishwas Sarang, Minister of Medical Education (M.P.); Shri Manoj Srivastava, author 36 books
                    </p>}
                    {
                        id === 3 && <p className=' p-2 text-[18px] font-quicksand font-[40px] m-5'>
                            Recipient of  a Letter of Appreciation from the Chairman of Billabong High International <a href="https://drive.google.com/file/d/1WcfCb-rATC6q1TqZFV4iMkp3LKuuxzPM/view" target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-dark-purple underline '>letter of appreciation.pdf</a>     &nbsp;Founder- Billabong High International School,
                        </p>
                    }
                    {
                        id === 4 && <p className=' p-2 text-[18px] font-quicksand font-[40px] m-5' >
                            Book recognized by  <a className='font-quicksand font-[400] text-[18px] text-dark-purple underline ' href="https://en.wikipedia.org/wiki/Chandrashekhara_Kambara" target="_blank" rel="noopener noreferrer">Dr. Chandrashekhar Kambar</a>, Padma Bhushan recipient, President- Sahitya Academy.
                        </p>
                    }
                    {
                        id === 6 && <p className=' p-2 text-[18px] font-quicksand font-[40px] m-5' >
                            • &nbsp;Organized "Ideological Session on Cultivating Literary Wisdom in Youth," with <a href="http://www.clubliterati.com/" target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-dark-purple underline '>Club Literati</a>  graced by the presence of esteemed dignitaries including Hon'ble Mr. Mangubhai C Patel, Governor of M.P.; Hon'ble Mr. Vishwas Sarang, Minister of Medical Education (M.P.); Shri Manoj Srivastava, Retd. Senior IAS Officer, and accomplished author of 36 books leading to the presentation of insightful conclusions and innovative solutions.
                            <br />
                            • &nbsp;    Devised a comprehensive report and mailed it to principals of 5 different  schools in Bhopal
                        </p>
                    }
                    {button && <button className='bg-dark-purple p-2 text-[18px] font-quicksand font-[700] text-white hover:bg-lightpurple hover:text-dark-gray w-[150px] m-4 rounded-md transition'>
                        <a href="link" target="_blank" rel="noopener noreferrer">{buttontitle}</a>
                    </button>}
                    {
                        id === 5 && <div className='flex flex-col items-center justify-center'>
                            <BookSlider />
                            <p className=' p-2 text-[18px] font-quicksand font-[40px] m-5'>
                                Book featured in  prominent newspapers including  New Indian Express(Bangalore Edition), Raj Express, Patrika Bhopal, Dainik Bhaskar, Peoples Samachar and LitGleam, India's first literary and lifestyle magazine catering to urban youth interests.
                            </p>
                        </div>
                    }
                </div>
            </article>
        </>
    )
}

export default BookBox