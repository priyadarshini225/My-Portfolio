import { assets } from '@/assets/assets'
import Image from 'next/image'

const HeaderPart = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900">

      <div className="mt-20 mb-4">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="rounded-full w-28 md:w-32 lg:w-36"
        />
      </div>

      <h3 className="text-lg md:text-xl mb-2 flex items-center justify-center gap-2 font-medium text-gray-800 dark:text-white">
        Hi! I'm Priyadarshini Varmani
        <Image src={assets.hand_icon} alt="Hand" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold leading-tight text-gray-900 dark:text-white">
        Frontend web developer <br /> 
      </h1>

      <p className="text-base md:text-lg mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
        I am a student from Vasavi College of Engineering passionate about crafting beautiful web experiences using React, Tailwind CSS, and modern technologies.
      </p>

      <div className="flex gap-4 mt-8 flex-col sm:flex-row">
        <a
          href="#contact"
          className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          contact me →
        </a>
        <a
          href="/priyadarshini-Resume.pdf"
          download
          className="border border-gray-500 dark:border-gray-300 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-100"
        >
          my resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </a>
      </div>
    </section>
  )
}

export default HeaderPart
