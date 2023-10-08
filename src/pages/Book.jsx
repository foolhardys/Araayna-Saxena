import PageHero from '../components/Author/PageHero'
import Contact from '../components/Author/Contact'
import { Link } from 'react-router-dom'
import One from '../components/Assets/Author/arayna.jpg'
import Two from '../components/Assets/Author/araynaflower.png'
import Grid from '../components/Author/Grid'

const Book = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <PageHero />
      <section className='w-full flex flex-col items-center'>
        <article className='bg-bg-contact bg-center bg-cover lg:w-[1280px] min-h-[80vh] ml-[10px] md:ml-0 lg:p-0 p-5'>
          <h1 className='text-[25px] uppercase font-[300] text-secondary tracking-widest'>Revealing</h1>
          <h1 className='text-[70px] capitalize font-[700] text-secondary leading-[60px] mb-[20px] font-courier mt-[10px] '>Amidst the <br /> downpour</h1>
          <h3 className='text-[25px] uppercase font-[300] text-secondary mb-[20px] tracking-widest'>by arayna saxena</h3>
          <div>
            <button className='py-3 px-4 transition mr-[15px] rounded-md font-quicksand font-[700]  bg-purple hover:bg-lightpurple text-white hover:text-dark-gray'>
              <a href="https://araynasaxena.com/" target="_blank" rel="noopener noreferrer"> Take a look</a>
            </button>
            <Link to='/author' className='py-3 px-4 transition mr-[15px] rounded-md font-quicksand font-[700] bg-purple hover:bg-lightpurple text-white hover:text-dark-gray'>
              Author's Journey
            </Link>
          </div>
        </article>
        <article className='bg-book-3 bg-center bg-cover w-full min-h-[80vh] ml-[10px] md:ml-0 flex justify-center mt-[200px] lg:p-0 p-5'>
          <div className='lg:w-[980px] w-full' >
            <p className='text-[24px] font-serif'>
              Amidst The Downpour is a book about the downpour of my thoughts, opinions, and imagination through poetry that represents different themes including self-love, peace, recovery, morality, individuality, optimism, faith and strength . In terms of the book cover, with this wind and through this book I’ve let my thoughts free in the form of poems for others to read and perceive. So these pages flying with the wind, are my thoughts searching for a reader’s mind as their destination."
              <br /><br />
              The panoramic selection of themes in Arayna’s book — self-love, optimism, faith and morality — are thought-provoking and highly relevant. The book is a great balance of sentiments and individuality. The book comprises beautiful calligraphy titles, bookmark, a thank you letter, and illustrations highlighting the concepts of the poems.
            </p>
          </div>
        </article>
        <article className='bg-book-1 bg-center bg-cover w-full min-h-[80vh] ml-[10px] md:ml-0 flex lg:justify-start justify-center mt-[200px] lg:p-0 p-5'>
          <div className='lg:w-[600px] w-full flex flex-col lg:ml-[180px] ml-0' >
            <h1 className='text-[40px] font-display font-[500] leading-[50px] mb-4'>Discover the captivating world of poetic expression with my latest collection of poetry.</h1>
            <p className='text-[24px] pr-10'>
              Immerse yourself in the enchanting beauty of language and emotions woven into each carefully crafted poem. <br /><br />
              Let these links guide you to the realm of imagination, where words dance gracefully on the pages, touching hearts and igniting a passion for the written word.
            </p>
            <div className='flex flex-wrap gap-6 mt-[20px]'>
              <button className='px-8 py-2 ring-offset-2 ring-2 rounded-sm text-light-blue hover:underline bg-cream/50'><a href="https://www.amazon.in/Amidst-downpour-Arayna-saxena/dp/9354726224" target="_blank" rel="noopener noreferrer">Amazon</a></button>
              <button className='px-8 py-2 ring-offset-2 ring-2 rounded-sm text-light-blue hover:underline bg-cream/50'><a href="https://www.flipkart.com/amidst-the-downpour/p/itm73e6f78eb39dd" target="_blank" rel="noopener noreferrer">Flipkart</a></button>
              <button className='px-8 py-2 ring-offset-2 ring-2 rounded-sm text-light-blue hover:underline bg-cream/50'><a href="https://bluerosepublishers.com/product/amidst-the-downpour/" target="_blank" rel="noopener noreferrer">Blue Rose</a></button>
              <button className='px-8 py-2 ring-offset-2 ring-2 rounded-sm text-light-blue hover:underline bg-cream/50'><a href="https://www.barnesandnoble.com/w/amidst-the-downpour-arayna-saxena/1140524913" target="_blank" rel="noopener noreferrer">Barnes&Nobles</a></button>
              <button className='px-8 py-2 ring-offset-2 ring-2 rounded-sm text-light-blue hover:underline bg-cream/50'><a href="https://www.walmart.com/ip/Amidst-the-downpour-Paperback-9789354726224/427368823" target="_blank" rel="noopener noreferrer">Walmart</a></button>
            </div>
          </div>
        </article>
        <article className='bg-book-2 bg-center bg-cover w-full min-h-[80vh] ml-[10px] md:ml-0 flex lg:flex-row flex-col lg:justify-start justify-center mt-[200px] lg:p-0 p-5'>
          <div className='lg:w-2/3 w-full flex flex-col lg:px-[50px] px-0 py-[70px]' >
            <p className='text-[24px] lg:pr-10 pr-0 w-full'>
              Club Literati’ in Collaboration with ‘Uthaan Foundation’, Bhopal Organised a Book Launch Ceremony for Arayna’s book. Arayna was felicitated by Hon’ble Mr Mangubhai C Patel, Governor of M.P. ; Hon’ble Mr Vishwas Sarang, Minister of Medical Education (M.P.); Shri Manoj Srivastava, Retd. Senior IAS Officer and author to about 36 books and many such prominent personalities in the field of literature and journalism at Minto Hall, Bhopal on 10th October 2021. <br /><br />
              Through this book, author Arayna Saxena has delivered a palpable collection of perspectives on the many elements of life. The poetry in this book is raw and beautiful, making this a book that is easily relatable to all of its readers, and a ride brimming with every kind of emotion imaginable. It says the words so many of us think of, but never speak of.Her book has inspired and encouraged students to value literature and enhance their literary talents to become authors.
            </p>
          </div>
          <div className='lg:w-1/3 w-full flex flex-col relative justify-center items-center'>
            <img src={One} alt="" className='h-[480px] w-[400px]' />
            <img src={Two} alt="" className='absolute bottom-0 right-0' />
          </div>
        </article>
        <article className='bg-book-4 bg-center bg-cover w-full min-h-[80vh] ml-[10px] md:ml-0 flex lg:flex-row flex-col lg:justify-start justify-center mt-[200px] lg:p-0 p-5'>
          <div className='w-full flex flex-col lg:px-[50px] px-0 py-[70px] justify-center items-center' >
            <h1 className='text-courier text-[100px] text-center leading-[95px]'>Get a Glimpse of <br />
              the magic this <br />
              book holds</h1>
          </div>
        </article>
        <article className='w-full min-h-[80vh] ml-[10px] md:ml-0 flex items-center justify-center  mt-[200px] lg:p-0 p-5'>
          <Grid />
        </article>
      </section>
      <Contact />
    </section>

  )
}

export default Book