import React from 'react'
const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 p-6 md:p-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-500 w-fit">Projects</h2>
      <div className="space-y-6">
       <div>
  <h3 className="text-xl font-bold">DeepSafe – AI-Resistant Image Protection System</h3>
  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
    Built an AI-resistant image protection system that strengthens personal image safety, adds resilient protection markers,<br/> and makes AI image defense accessible through a 
    simple and user-friendly interface.
  </p>
</div>
<div>
  <h3 className="text-xl font-bold">Tech4All – One Platform, Every Tech Opportunity</h3>
  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
    Developed a MERN platform that centralizes internships, AI tools, and tech news into
    one place,<br /> with backend integration for automatic updates and secure authentication.
  </p>
</div>

     <div>
  <h3 className="text-xl font-bold">TriLog – Productivity & Spaced Learning Platform</h3>
  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
      Created a productivity and learning system with spaced repetition reminders, secure <br />
    authentication, structured logging, and a reliable backend design.
  </p>
</div>
      </div>
    </section>
  )
}

export default Projects
