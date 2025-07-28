import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-20 scroll-mt-20 bg-white dark:bg-gray-900 transition-colors duration-300'>
      <div>
      <h2 className='text-center text-5xl font-bold font-quicksand mb-12 border-b-4 border-pink-500 w-fit text-black dark:text-white mx-auto'>
        About me 
      </h2>
      </div>
      <div className='flex flex-col lg:flex-row items-center gap-16'>
       
        <div className='flex-shrink-0'>
          <Image
            src={assets.user_image}
            alt="Profile"
            className='w-64 h-64 object-cover rounded-3xl shadow-md'
          />
        </div>
        
        <div className='text-center lg:text-left max-w-xl'>
          <h3 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-white'>
            I'm Priyadarshini Varmani
          </h3>
          <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium'>
            Aspiring Software Developer with a strong foundation in programming, data structures, and algorithms.
            Passionate about building scalable, real-world applications and solving complex problems.
            Interested in full-stack development and constantly exploring new technologies to grow as a developer.
            Eager to contribute to innovative projects in a collaborative and fast-paced environment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
