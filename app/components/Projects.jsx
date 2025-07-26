import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Services = () => {
  const [expandedStates, setExpandedStates] = useState({});
  const maxLength = 150;

  const toggleExpand = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  
  const getTechDetails = (techKey) => {
    const iconSrc = assets[techKey]; 

    const name = techKey.replace(/_icon$/, '').replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return { iconSrc, name };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services" className='w-full px-[12%] py-10 scroll-mt-20'
    >

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        A collection of projects I've worked on.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      >
        {serviceData.map(({ icon, title, description, link, techStack, githubLink }, index) => {
          const isExpanded = expandedStates[index] || false;
          const showReadMoreButton = description && description.length > maxLength;

          return (
            <a href={link} key={index} target="_blank" rel="noopener noreferrer" className="block h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='border border-gray-400 rounded-lg px-8 py-12
                cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                h-full flex flex-col justify-between'
              >
                <div>
                  <h3 className='text-lg my-4 text-gray-700 flex items-center gap-1.5 hover:text-blue-600 hover:underline'>
                    {title} <Image src={assets.arrow_icon} alt='project-link-arrow' className='w-3 h-3'/>
                  </h3>

                  <p className='text-sm text-gray-600 leading-5'>
                    {description ? (
                      isExpanded
                        ? description
                        : `${description.substring(0, maxLength)}...`
                    ) : (
                      'No description available.'
                    )}
                  </p>

                  {showReadMoreButton && (
                    <button
                      onClick={(e) => toggleExpand(e, index)}
                      className='text-blue-600 hover:underline text-sm mt-2 block bg-transparent border-none p-0 cursor-pointer'
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>

                {/* Tech Stack and GitHub Link Section */}
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  {/* Tech Stack (Left) - Now displays IMAGES */}
                  {techStack && techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 max-w-[80%]">
                      {techStack.map((techKey, i) => {
                        const { iconSrc, name } = getTechDetails(techKey); // Get details using helper
                        if (iconSrc) {
                          return (
                            <Image
                              key={i}
                              src={iconSrc}
                              alt={name} // Use generated name for alt text
                              className="w-6 h-6 object-contain" // Adjust size as needed (w-6 h-6 is 24x24px)
                              title={name} // Add a tooltip on hover
                            />
                          );
                        }
                        return null; // Don't render if icon source is not found
                      })}
                    </div>
                  )}

                  {/* GitHub Link (Right) */}
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 ml-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image src={assets.github_icon} alt="GitHub" className="w-6 h-6 hover:opacity-75"/>
                    </a>
                  )}
                </div>
              </motion.div>
            </a>
          );
        })}
      </motion.div>
    </motion.div>
  )
}

export default Services;



