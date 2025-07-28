import React from 'react'

const Interests = () => {
  return (
    <section id="interests"className="scroll-mt-20 p-6 bg-white dark:bg-gray-900  shadow-md">
      <h2 className="text-2xl font-semibold mb-4 border-b-4 border-pink-500 w-fit text-gray-800 dark:text-white">🎨 Interests</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-3">
        I’m a passionate artist with a love for creating lifelike portraits. My portfolio includes over <strong>50+ commissioned artworks</strong> using pencil, charcoal, and watercolor mediums.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Honored with the <strong>Best Award for Outstanding Performance</strong> in the Professional Category at the <strong>83rd All India Annual Art Exhibition</strong>.
      </p>
      <a 
        href="https://instagram.com/priyadarshini_arts225" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 text-white bg-pink-600 hover:bg-pink-700 rounded-md transition"
      >
        🎨 Visit My Art on Instagram
      </a>
    </section>
  )
}

export default Interests
