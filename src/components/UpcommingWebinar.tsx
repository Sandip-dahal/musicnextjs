"use client "
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';


function UpcommingWebinar() {

    const featuredWebinars = [
        {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className='p-12 bg-gray-900 dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center '>
            <h2 className='text-base text-teal-600 dark:text-teal-400 font-semibold tracking-wide uppercase'> FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Enhanced Your Musical Journey</p>
        </div>
        <div className='mt-10'>
            < HoverEffect 
            items={ featuredWebinars.map(webinar =>(
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: `/webinar/${webinar.slug}`
                }
            ))}
            />
        </div>
        <div className='mt-10 text-center'>
            <Link href ={ "/"}
                className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hovver:bg-neutral-700 transition duration-200" >
            View All Webinar
            </Link>
            </div>
            </div>
        
        </div>
  )
}

export default UpcommingWebinar