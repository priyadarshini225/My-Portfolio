import { assets } from '@/assets/assets'
import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="scroll-mt-20  px-10 py-20  bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-6 border-b-4 border-pink-500 w-fit text-gray-800 dark:text-white">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
        {/* Programming Languages */}
        <div>
          <h3 className="text-xl font-bold mb-2">Programming Languages</h3>
          <ul className="list-disc ml-6">
            <li>Java</li>
            <li>C</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* Web Development */}
        <div>
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <ul className="list-disc ml-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-xl font-bold mb-2">Databases</h3>
          <ul className="list-disc ml-6">
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Tools & Version Control */}
        <div>
          <h3 className="text-xl font-bold mb-2">Tools & Version Control</h3>
          <ul className="list-disc ml-6">
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        {/* Core CS Subjects */}
        <div>
          <h3 className="text-xl font-bold mb-2">Core CS Subjects</h3>
          <ul className="list-disc ml-6">
            <li>Data Structures & Algorithms (DSA)</li>
            <li>Object-Oriented Programming (OOPs)</li>
            <li>Operating Systems (OS)</li>
            <li>Computer Networks (CN)</li>
          </ul>
        </div>

        {/* Additional Skills */}
        <div>
          <h3 className="text-xl font-bold mb-2">Additional Skills</h3>
          <ul className="list-disc ml-6">
            <li>Problem Solving & Debugging</li>
            <li>Collaborative Teamwork</li>
            <li>Technical Documentation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
