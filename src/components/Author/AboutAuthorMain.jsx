import React from 'react'
import One from '../Assets/Author/Author Page/Poem/1.1.png'
import Two from '../Assets/Author/Author Page/Poem/1.2.png'
import Three from '../Assets/Author/Author Page/Poem/2.1.png'
import Four from '../Assets/Author/Author Page/Poem/2.2.png'
import Five from '../Assets/Author/Author Page/Poem/3.1.png'
import Six from '../Assets/Author/Author Page/Poem/3.2.png'

const AboutAuthorMain = () => {
    return (
        <section>
            <article className=' flex lg:flex-row flex-col w-full'>
                <div className=' w-full relative p-4 h-full'>
                    <img src={One} alt="Book" />
                    <h1 className='absolute z-10 top-[265px] left-0 md:text-[95px] text-[60px] leading-[105px] font-courier px-[50px] tracking-tighter'>The story <br /> behind my <br /> book </h1>
                </div>
                <div className=' w-full relative'>
                    <img src={Two} alt="Book" />
                    <p className=' absolute z-10 top-[0px] right-0 text-[19px] font-serif py-[25px] h-full lg:mr-[110px] mr-0'> I was 14 years old and in 10th grade when I wrote this book. <br /> Personally, I relish writing poems that make the readers <br /> question their various experiences and those whose <br /> message has a considerable influence on their thought <br /> process and perspectives. I like to adopt distinct styles of <br /> poetry which the readers can find relatable and connect to <br />in multiple ways, and I usually begin them with the <br /> description of a setting and the introduction of characters to <br /> add personalisation to the poem and aid the readers in their <br /> imagination. <br /><br />

                        I found my place among those who hold the remarkable <br /> ability to sway hearts, shape perspectives, and mould <br />thoughts. Our collective works served as a testament to <br /> the undeniable power of literature over emotions, perspectives, <br />and thoughts. <br /><br />
                        Poetry is something I was naturally inclined to as a form of <br /> expression. In 4th grade, my Science teacher, Ms. Manbir <br /> Kaur, came in and said, "Students, you have been given an <br /> hour to write poetry about a different meaning of light in <br /> your life." I remember closing my eyes and looking for my <br /> answer. For me, light symbolized positivity, hope, and <br /> aspirations. I started penning it immediately. Manbir ma'am <br />collected our piece of writings. Sometime later, she called <br /> me in front of the class, read what I had written, and <br />announced that the teachers had selected it. She looked at <br /> me with a huge smile and said, "What you wrote was <br /> overwhelming; I am so proud of you!"</p>
                </div>
            </article>
            <article className='flex lg:flex-row flex-col w-full -translate-y-5'>
                <div className=' w-full'>
                    <img src={Three} alt="Book" className='lg:block  md:hidden block' />
                </div>
                <div className=' w-full relative'>
                    <img src={Four} alt="Book" />
                    <p className=' absolute z-10 top-[0px] right-0 text-[19px] font-serif py-[45px] h-full lg:mr-[130px] mr-[20px]'> In her eyes was pride, and this had been eternally imprinted <br /> in my brain as the day that motivated me to discover my <br /> passions and work towards them to positively impact people <br /> around me and feel proud of myself. Later, the school <br />converted my poem into a song which was sung at our <br />annual function. This new experience encouraged me to <br />continue exploring and learning.<br /> <br />
                        Throughout middle school, I received much support and <br />inspiration for my academic pursuits, literary skills, and <br />extracurricular activities. I reached 9th grade in the middle <br />of a pandemic during which I became more observant of the <br />people around me and the various actions that drove <br />them to feel any emotion. Soon I decided to write a book that <br />would be a collection of poetry that dealt with various <br />themes so people anywhere in the world could connect with <br />my poems offering a change in perspective & support. <br /><br />
                        The entire process was indeed challenging, where I had <br />to meet academic deadlines and, at the same time, edit,<br /> design, and compile the script for my book.<br /> <br />
                    </p>
                </div>
            </article>
            <article className='p-4 flex lg:flex-row flex-col w-full -translate-y-[55px]'>
                <div className=' w-full'>
                    <img src={Five} alt="Book" className='lg:block md:hidden block' />
                </div>
                <div className=' w-full relative'>
                    <img src={Six} alt="Book" />
                    <p className=' absolute z-10 top-[0px] right-0 text-[19px] font-serif py-[80px] h-full lg:mr-[130px] mr-[20px]'>Finally, "Amidst The Downpour" was ready as a downpour  <br />of my thoughts and emotions over paper. The honourable  <br />Governor of Madhya Pradesh agreed to inaugurate my  <br />book during the book launch, and people from different  <br />educational fields and careers attended it." <br /><br />
                        I have always been passionate about poetry and <br />storytelling. I think of myself as a curious Author who loves <br />exploring different themes and motifs which reflects in my <br />poems. As part of my writing process, I loves immersing <br />myself in my work-diving headfirst into the imagination,<br /> writing and fine-tuning of the stories I feel are the most <br />worthy of telling. This book remains very close to my heart <br />as it comprises poems I have been writing and treasuring in<br /> a small notebook my mom gifted me to now when I finally <br />felt that my poems could be given a home in this book.<br /><br />
                    </p>
                    <p className=' absolute z-10 top-[600px] right-0 text-[21px] font-[900] font-serif py-[80px] h-full lg:mr-[140px] text-right'>
                        The incident that lead to amidst the downpour
                    </p>
                </div>
            </article>
        </section>
    )
}

export default AboutAuthorMain