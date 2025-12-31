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

      <h1 className="text-3xl sm:text-5xl lg:text-[35px] font-semibold leading-tight text-gray-900 dark:text-white">
        Aspiring Software Engineer & Full-Stack Learner <br /> 
      </h1>

      <p className="text-base md:text-lg mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
I’m a Computer Science undergraduate, passionate about coding, problem solving, and building reliable real-world applications using React and modern web technologies.</p>
    </section>
  )
}

export default HeaderPart
