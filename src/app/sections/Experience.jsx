'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "InfoTech",
    location: "Lahore, Pakistan",
    period: "March 2025 - May 2025",
    description: [
      "Built Task Management Application with React.js frontend and Node.js/Express backend",
      "Developed E-Commerce Platform featuring user authentication, product catalog, and shopping cart functionality with secure checkout",
      "Utilized MongoDB for database management and implemented RESTful API integration"
    ]
  },
  {
    title: "Frontend Development Intern",
    company: "NexTash",
    location: "Lahore, Pakistan",
    period: "July 2023 - July 2024",
    description: [
      "Created responsive landing pages and website clones using HTML, CSS, and JavaScript",
      "Practiced with modern frontend frameworks including React.js for small-scale projects"
    ]
  }
];

const ExperienceCard = ({ experience, index, isInView }) => {
  return (
    <motion.div
      className="relative pl-8 pb-8 last:pb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 mt-1.5">
        <div className="h-6 w-6 rounded-full border-4 border-primary-500 bg-white dark:bg-dark-200"></div>
      </div>

      {/* Timeline line */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-3 top-7 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
      )}

      <div className="card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold gradient-text">{experience.title}</h3>
            <p className="text-lg font-medium">{experience.company}</p>
          </div>

          <div className="flex flex-col mt-2 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center mb-1">
              <FiCalendar className="mr-2 w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-2 w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {experience.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <FiBriefcase className="w-8 h-8 mr-4 text-primary-500" />
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </motion.div>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here's a summary of my professional experience and internships. I'm constantly seeking new challenges to expand my skills.
        </motion.p>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              experience={exp}
              index={index}
              isInView={isInView}
            />
          ))}

          <motion.div
            className="relative pl-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute left-0 top-0 mt-1.5">
              <div className="h-6 w-6 rounded-full border-4 border-secondary-500 bg-white dark:bg-dark-200"></div>
            </div>

            <div className="bg-gradient-to-r from-secondary-500/20 to-secondary-500/5 dark:from-secondary-900/20 dark:to-secondary-900/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold gradient-text">Education</h3>
              <p className="text-lg font-medium">University of Management and Technology, Lahore</p>
              <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                <FiCalendar className="mr-2 w-4 h-4" />
                <span>Currently in 8th Semester | CGPA: 3.2</span>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Bachelor of Computer Science (BSCS)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}