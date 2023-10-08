import React from 'react'

const GridComponent = ({ griditem, isSelected, onClick, onMouseLeave }) => {
    const { id, title, img, boxheading, boxcontent, button, pictures, buttontitle, buttonlink, links } = griditem
    return (
        <article
            onClick={onClick}
            onMouseLeave={onMouseLeave}
            className={`${isSelected ? 'lg:w-[500px] md:w-[450px] w-[350px] md:mb-0 min-h-[300px] rounded-sm border-2 border-secondary mx-auto flex items-center justify-center relative p-4 bg-deep-purple z-20 text-white transition-all' : 'lg:w-[300px] md:w-[400px] w-[200px] mb-4 md:mb-0 lg:h-[250px] md:h-[280px] h-[180px] rounded-sm border-2 border-secondary mx-auto flex items-center justify-center relative p-4 hover:bg-dark-purple z-0 hover:text-white transition-all'}`}>
            {isSelected ? (
                <div>
                    <h2 className='font-quicksand text-[18px] font-[700] text-white my-2'>{boxheading}</h2>
                    <p className='font-quicksand text-[16px] font-[400] my-8 text-white '>{boxcontent}</p>
                    {
                        title === 'Protection of Children from Sexual Offenses (POCSO)' && <p className='font-quicksand text-[16px] font-[400] my-8 text-white '>
                            "This workshop was implemented in collaboration with the high school faculty, Police Department, and Cyber Crime Cell for students, and training sessions for the faculty, support and transportation staff to educate them on prevention, prohibition, and protection against sexual harassment. <br /><br />
                            &nbsp;  •&nbsp;Designed educational boards to enhance vigilance and safeguarding measures through scenario based &nbsp;&nbsp;learning, placing them throughout the school.<br />
                            &nbsp;  •&nbsp;Collaborated with the schools Tech Head to create 'Good & Bad Touch' animation videos for Primary &nbsp;&nbsp;school students <br />
                            &nbsp;  •&nbsp;Extended educational efforts to over 2000 underprivileged children through NGO: Uthaan.<br />
                            &nbsp;  •&nbsp;Developed English and Hindi tests with the Editorial Board to &nbsp;&nbsp;understand the acts in context of &nbsp;&nbsp;real-world scenarios, achieving a &nbsp;&nbsp;95% success rate in test results.<br /><br />
                            Links: <a href="https://www.instagram.com/p/Cob830Bsaup/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target='_blank' rel="noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Post1</a>, <a href="https://www.instagram.com/p/CtqDW2fIBNq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target='_blank' rel="noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Post2</a>, <a href="https://www.instagram.com/p/Cj2cOLyO0yp/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Post3</a>
                        </p>
                    }
                    {
                        title === 'Competitions' && <p className='font-quicksand text-[16px] font-[400] my-8 text-white '>Led the student council to manage several Inter-school and Inter-house Competitions including Aravindakshan Debate Competition (attended by schools from across India), CISCE Regional Sports Meet, Inter-House Theatre Competition, Inter-House Sign Language Competition.<br /><br /><br />
                            Take a look: <a href="https://www.instagram.com/reel/CvuMeqsoiQ3/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target='_blank' className='font-quicksand font-[400] text-[18px] text-purple underline ' rel="noreferrer">Video1</a>, <a href="https://www.instagram.com/p/CvzWISoPIic/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target='_blank' className='font-quicksand font-[400] text-[18px] text-purple underline ' rel="noreferrer">Photo</a>, <a href="https://www.instagram.com/reel/CvZ5VYwN83j/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target='_blank' className='font-quicksand font-[400] text-[18px] text-purple underline ' rel="noreferrer">Video2</a>
                        </p>
                    }
                    {
                        title === 'Campaign Aikyam - Mission Literacy' && <p className='font-quicksand text-[16px] font-[400] my-8 text-white '>
                            “Over 9 lakh incidents of phishing, OTP compromise reported in last two years; 42% Indians have experienced financial fraud” <br /><br /> Established and led “Campaign Aikyam- Mission Literacy” to promote digital literacy and raise awareness about scams such as Phishing or Impersonation Scams with 500+ slum residents of Naya Basera through multiple sessions and skits.
                        </p>
                    }
                    {
                        pictures && <div className='flex gap-4 md:flex-row flex-col h-[130px] w-[200px]'>
                            <img src={pictures[0].img} alt="" />
                            <img src={pictures[1].img} alt="" />
                        </div>
                    }
                    {
                        links && <div className='my-4'>
                           <a href={links[0].url} target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>School vice-captain speech</a>,&nbsp;
                           <a href={links[1].url} target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Republic day hosting</a>,&nbsp;
                           <a href={links[2].url} target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Teacher's day hosting</a>,&nbsp;
                           <a href={links[3].url} target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Assembly hosting</a>
                        </div>
                    }
                    {button &&
                        <button className='w-[230px] bg-purple p-2 capitalize hover:bg-lightpurple hover:text-dark-gray rounded-md text-white my-[15px]'>
                            <a href={buttonlink} target='_blank' rel="noopener noreferrer" >
                                {buttontitle}
                            </a>
                        </button>
                    }
                </div>
            ) : (
                <div>
                    <h2 className='text-[16px] text-center font-[700] font-quicksand capitalize'>{title}</h2>
                    <img src={img} alt={title} className='absolute top-0 left-0 w-full h-full' />
                </div>
            )}
        </article>
    )
}

export default GridComponent