'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const experiences = [
  {
    title: "MERN Stack Development Intern",
    company: "InfoTech Group",
    location: "Lahore, Pakistan",
    period: "March 2025 – July 2025",
    description: [
      "Completed comprehensive 5-month internship developing full-stack web applications using MERN stack",
      "Built scalable Task Management App with user authentication, CRUD operations, and task filtering/sorting",
      "Developed feature-rich E-Commerce Platform with secure checkout, admin dashboard, and product catalog",
      "Integrated REST APIs and implemented efficient data management using MongoDB and Express.js",
      "Received completion certificate recognizing technical proficiency and professional development"
    ],
    achievements: ["5-month comprehensive internship", "Certificate of completion", "Scalable applications built"]
  },
  {
    title: "Frontend Development Intern",
    company: "NexTash",
    location: "Lahore, Pakistan",
    period: "July 2023 – July 2024",
    description: [
      "Designed and developed responsive landing pages and web applications using HTML5, CSS3, and JavaScript",
      "Built interactive React.js projects focusing on component architecture and state management best practices",
      "Collaborated with design teams to implement pixel-perfect UI/UX designs and ensure cross-browser compatibility"
    ],
    achievements: ["1-year internship", "UI/UX design implementation", "Cross-browser compatibility"]
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

        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          {experience.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {experience.achievements && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-300">
            <div className="flex flex-wrap gap-2">
              {experience.achievements.map((achievement, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-dark-300 text-primary-800 dark:text-primary-300"
                >
                  <FiAward className="mr-1 w-3 h-3" />
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        )}
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
              <div className="flex items-center mb-4">
                <FiAward className="w-6 h-6 mr-3 text-secondary-500" />
                <h3 className="text-xl font-bold gradient-text">Education</h3>
              </div>
              <p className="text-lg font-medium">University of Management and Technology, Lahore</p>
              <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                <FiCalendar className="mr-2 w-4 h-4" />
                <span>Nov 2021 – Jul 2025 | CGPA: 3.23/4.0</span>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Bachelor of Computer Science (BSCS)
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 dark:bg-dark-300 text-secondary-800 dark:text-secondary-300">
                  <FiAward className="mr-1 w-3 h-3" />
                  Strong Academic Record
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 dark:bg-dark-300 text-secondary-800 dark:text-secondary-300">
                  <FiAward className="mr-1 w-3 h-3" />
                  Computer Science Focus
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}