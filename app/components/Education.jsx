import React from 'react'
const Education = () => {
  return (
    <section id="edu" className="scroll-mt-20 p-6 md:p-10  bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-500 w-fit">Education</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold">B.E. in Computer Science and Engineering</h3>
        <p className="text-md">Vasavi College of Engineering, Ibrahimbagh, Hyderabad</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">2024 – 2027 | CGPA: <span className="font-semibold">8.78</span></p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Diploma in Computer Science</h3>
        <p className="text-md">Kamala Nehru Polytechnic for Women, Gandhibhavan, Hyderabad</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">2021 – 2024 | CGPA: <span className="font-semibold">9.87</span></p>
      </div>
    </section>
  )
}

export default Education
