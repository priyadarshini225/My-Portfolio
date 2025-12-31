import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-20 scroll-mt-20 bg-white dark:bg-gray-900 transition-colors duration-300'>
      <div>
      <h2 className='text-center text-5xl font-bold font-quicksand mb-12 border-b-4 border-pink-500 w-fit text-black dark:text-white mx-auto'>
        Who I am 
      </h2>
      </div>
      <div className='flex flex-col items-center gap-16'>
        
        <div className='text-center max-w-2xl'>
          <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-center'>
           I’m someone who loves coding, learning, and building practical software.
            I enjoy working on real-world projects, understanding how systems work, and improving my skills step-by-step.
             I believe in learning by doing, staying curious, and continuously growing as a developer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
