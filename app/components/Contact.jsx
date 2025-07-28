import { GoLocation } from 'react-icons/go'
import { FiPhone, FiGithub } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-8 px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold border-b-2p border-b-4 border-pink-500 w-fit inline-block mb-6">
        Contact
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 text-base">
        <div className="flex items-center gap-3">
        <GoLocation className="text-pink-600" size={22} />
          <span>Hyderabad, India</span>
        </div>
        <div className="flex items-center gap-3">
          <FiPhone className="text-pink-600" size={22} />
          <span>+91 98966424568</span>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineMail className="text-pink-600" size={22} />
          <span>varmanipriyadarshini22@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-pink-600" size={22} />
          <a
            href="https://www.linkedin.com/in/varmani-priyadarshini-165b18341/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FiGithub className="text-pink-600" size={22} />
          <a
            href="https://github.com/priyadarshini225"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
