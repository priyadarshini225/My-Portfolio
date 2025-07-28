import React from 'react'
const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 p-6 md:p-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-500 w-fit">Projects</h2>
      <div className="space-y-6">
        {/* Tech4All */}
        <div>
          <h3 className="text-xl font-bold">Tech4All (In Progress)</h3>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            A modern web application that brings the <strong>latest tech news</strong> and <strong>curated job listings</strong> to users in one place. It features real-time news updates, article viewing, filtering options, and a dedicated jobs section for tech enthusiasts.
          </p>
        </div>
        {/* Business Portfolio */}
        <div>
          <h3 className="text-xl font-bold">Business Portfolio Website</h3>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            A responsive portfolio template for small businesses built with <strong>Html</strong> and <strong>CSS</strong>.
          </p>
        </div>
        {/* Text-to-Speech App */}
        <div>
          <h3 className="text-xl font-bold">Text-to-Speech Converter</h3>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            A simple frontend application that converts typed text into speech. Developed to understand <strong>browser-based voice synthesis.</strong>
          </p>
        </div>
        {/* To-Do App */}
        <div>
          <h3 className="text-xl font-bold">To-Do Application</h3>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            A basic productivity app to add, update, and delete daily tasks. Built with <strong>JavaScript</strong> and browser Local Storage for data persistence.
          </p>
        </div>
        {/* Weather App */}
        <div>
          <h3 className="text-xl font-bold">Weather Forecast App</h3>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            A responsive weather application that displays real-time weather data using the <strong>OpenWeatherMap API</strong>, built with JavaScript, HTML, and CSS
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
