import One from './svgs/story_page_1_line.png'
import Two from './svgs/story_page_1_flower.png'
import Three from './svgs/story_page_1_cnt_p1.png'
import Four from './svgs/story_page_1_cnt_p2.jpg'
import Five from './svgs/story_page_1_book.png'
import Six from './svgs/story_page_2_man.png'
import Seven from './svgs/story_page_2_random.png'
import Eight from './svgs/story_page_2_cnt_p1.png'
import Nine from './svgs/story_page_3_book_fly.png'
import Ten from './svgs/story_page_3_flower.png'
import Eleven from './svgs/story_page_3_cloud.png'
import Twelve from './svgs/story_page_3_cnt_col.jpg'
import Thirteen from './svgs/story_page_2_flower2.png'
import { Link } from 'react-router-dom'
import PageHero from '../components/Author/PageHero'
import Contact from '../components/Author/Contact'
import './styles.css'


const Author = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <PageHero />
      <section>
        <div className="bg-bg-1 w-[full] items-center overflow-x-hidden min-h-[100vh] lg:block flex flex-col justify-center">
          <p className=" lg:text-[60px] text-[80px] max-w-[30vw] lg:ml-[5vw] md:ml-0 -ml-[200px] lg:mt-[25vh] md:mt-[15vh] md:text-center text-justify font-[100]  font-display leading-[50px] mb-4">The Author's Journey</p>
          <p className="font-courier md:text-[30px] text-[50px] md:mb-5 mb-0 max-w-[30vw] md:ml-[5vw] -ml-[200px] md:text-center text-justify text-light-blue ">Arayna Saxena</p>
          <Link to='/book' className='mx-auto lg:ml-[13.5vw] md:mx-auto ml-10 lg:p-4 p-2 md:px-6 md:py-4  rounded-md transition bg-purple text-[18px] font-quicksand hover:bg-lightpurple hover:text-dark-gray text-white font-[700]'>About the book</Link>
        </div>
        <div className=" h-auto bg-bg-2 w-full items-center overflow-x-hidden">
          <div>
            <div className="flex lg:flex-row flex-col">
              <div className="w-full flex-1 relative pt-[5em]" >
                <div className='ml-[100px] flex flex-col justify-center lg:py-[150px] py-0'>
                  <h1 className='md:text-[90px] text-[60px] text-left ml-[0px] leading-[40px] font-[500] relative font-courier'>The story</h1>
                  <div className="grid mt-[10px] ml-[90px]"><img src={One} alt="" /></div>
                  <h1 className='md:text-[90px] text-[60px] text-left leading-[68px] font-[500] font-courier'>behind my</h1>
                  <h1 className='md:text-[90px] text-[60px] text-left leading-[68px] font-[500] font-courier'>book</h1>
                </div>
                <div className="grid"><img src={Two} alt="" /></div>
              </div>
              <div className='w-full flex-1 mt-[3vh] md:px-8 px-6 py-2'>
                <div className="grid relative h-[35px]">
                  <img src={Five} alt="" className='absolute left-[-125px] top-[50px]' />
                </div>
                <h3 className='text-justify font-[400] text-[20px] mt-[2em] font-noto'>
                  I was 14 years old and in 10th grade when I wrote this book. Personally, I relish writing
                  poems that make the readers question their various experiences and those whose message has a
                  considerable influence on their thought process and perspectives. I like to adopt distinct
                  styles of poetry which the readers can find relatable and connect to in multiple ways, and I
                  usually begin them with the description of a setting and the introduction of characters to
                  add personalisation to the poem and aid the readers in their imagination.
                </h3>
                <h3 className='text-justify font-[400] text-[20px] mt-[2em] font-noto'>
                  I found my place among those who hold the remarkable ability to sway hearts, shape
                  perspectives, and mould thoughts. Our collective works served as a testament to the
                  undeniable power of literature over emotions, perspectives, and thoughts.
                </h3>
                <div className="grid relative h-[35px]">
                  <img src={Three} alt="" className='absolute right-0' />
                  <img src={Four} alt="" className=' absolute left-0 -translate-x-[40px] translate-y-[45px]' />
                </div>
                <h3 className='text-justify font-[400] text-[20px] mt-[1.3em] font-noto'>
                  Poetry is something I was naturally inclined to as a form of expression. In 4th grade, my
                  Science teacher, Ms. Manbir Kaur, came in and said, "Students, you have been given an hour
                  to write poetry about a different meaning of light in your life." I remember closing my eyes
                  and looking for my answer. For me, light symbolized positivity, hope, and aspirations. I
                  started penning it immediately. Manbir ma'am collected our piece of writings. Sometime
                  later, she called me in front of the class, read what I had written, and announced that the
                  teachers had selected it. She looked at me with a huge smile and said, "What you wrote was
                  overwhelming; I am so proud of you!"
                </h3>
                <div className="grid h-[35px]">
                  <img src={Thirteen} alt="" className='absolute left-[15px] translate-y-[500px] lg:block hidden' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-auto bg-bg-4 bg-cover w-full items-center overflow-x-hidden">
          <div>
            <div className="flex lg:flex-row flex-col">
              <div className="w-full flex-1 relative pt-[5em]" >
              </div>
              <div className='w-full flex-1 md:px-8 px-6 pb-[100px] pt-[20px]'>
                <div className="grid relative">
                  <img src={Six} alt="" className='absolute left-[-125px] h-[100px] top-[40px]' />
                </div>
                <h3 className='text-justify font-[400] text-[20px] mt-[2em] font-noto'>
                  In her eyes was pride, and this had been eternally imprinted in my brain as the day that motivated me to discover my passions and work towards them to positively impact people around me and feel proud of myself. Later, the school converted my poem into a song which was sung at our annual function. This new experience encouraged me to continue exploring and learning.
                </h3>
                <h3 className='text-justify font-[400] text-[20px] mt-[2em] font-noto'>
                  Throughout middle school, I received much support and inspiration for my academic pursuits, literary skills, and extracurricular activities. I reached 9th grade in the middle of a pandemic during which I became more observant of the people around me and the various actions that drove them to feel any emotion. Soon I decided to write a book that would be a collection of poetry that dealt with various themes so people anywhere in the world could connect with my poems offering a change in perspective & support.
                </h3>
                <div className="grid relative">
                  <img src={Seven} alt="" className='absolute left-[-125px] -translate-y-[50px]' />
                </div>
                <h3 className='text-justify font-[400] text-[20px] mt-[1.3em] font-noto'>
                  The entire process was indeed challenging, where I had to meet academic deadlines and, at the same time, edit, design, and compile the script for my book.
                </h3>
                <div className="grid relative">
                  <img src={Eight} alt="" className='absolute right-0 mr-[300px] -translate-y-7' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-auto bg-bg-3 bg-cover w-full items-center overflow-x-hidden">
          <div>
            <div className="flex lg:flex-row flex-col">
              <div className="w-full flex-1 relative pt-0" >
                <div className="grid absolute bottom-0 left-0"><img src={Ten} alt="" /></div>
              </div>
              <div className='w-full flex-1 md:px-8 px-6 pb-[100px] pt-[20px]'>
                <div className="grid relative">
                  <img src={Eleven} alt="" className='absolute left-[-80px] h-[80px] top-[50px]' />
                </div>
                <h3 className='text-justify font-[400] text-[20px] mt-[2em] font-noto'>
                  Finally, "Amidst The Downpour" was ready as a downpour of my thoughts and emotions over paper. The honourable Governor of Madhya Pradesh agreed to inaugurate my book during the book launch, and people from different educational fields and careers attended it."
                </h3>
                <h3 className='text-justify font-[400] text-[20px] mt-[2em] font-noto'>
                  I have always been passionate about poetry and storytelling. I think of myself as a curious Author who loves exploring different themes and motifs which reflects in my poems. As part of my writing process, I loves immersing myself in my work-diving headfirst into the imagination, writing and fine-tuning of the stories I feel are the most worthy of telling. This book remains very close to my heart as it comprises poems I have been writing and treasuring in a small notebook my mom gifted me to now when I finally felt that my poems could be given a home in this book.
                </h3>
                <div className="grid relative">
                  <img src={Twelve} alt="" className='absolute right-0 mr-[170px] -translate-y-10' />
                </div>
                <div className="grid relative h-[35px]">
                  <img src={Nine} alt="" className='absolute left-[-330px] top-[-100px]' />
                </div>
                <h3 className='text-right italic font-[800] text-[20px] mt-[1.3em] font-noto'>
                  The incident that lead to amidst the downpour
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </section>
  )
}

export default Author