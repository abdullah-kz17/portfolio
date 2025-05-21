'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiUser, FiCode, FiTarget } from 'react-icons/fi';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Detail-oriented React.js Developer with MERN stack experience
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer focused on building responsive, user-friendly web applications
              while continuously expanding my technical expertise. My journey in web development has equipped me
              with strong problem-solving skills and attention to detail.
            </p>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-dark-300 p-6 rounded-lg shadow-xl">
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-200 dark:to-dark-300 flex items-center justify-center">
                  <Image
                    src="/images/profile.jpg" 
                    alt="Abdullah Khan" 
                    width={320} 
                    height={320} 
                    className="rounded-full" 
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-2">Abdullah Khan</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    MERN Stack Developer based in Lahore, Pakistan
                  </p>
                  <a
                    href="/documents/Abdullah_Khan_Resume.pdf"
                    download
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <FiDownload />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <InfoCard
                icon={<FiUser className="w-5 h-5" />}
                title="Personal Background"
                content="Based in Lahore, Pakistan, I'm currently pursuing my Bachelor's degree in Computer Science at the University of Management and Technology."
              />
              <InfoCard
                icon={<FiCode className="w-5 h-5" />}
                title="Development Philosophy"
                content="I believe in writing clean, maintainable code and creating intuitive user experiences that solve real-world problems."
              />
              <InfoCard
                icon={<FiTarget className="w-5 h-5" />}
                title="Career Goals"
                content="My aim is to contribute to innovative projects while continuing to expand my knowledge of both frontend and backend technologies."
              />
              <InfoCard
                icon={<FiCode className="w-5 h-5" />}
                title="Technical Interests"
                content="Beyond the MERN stack, I'm interested in data visualization, machine learning, and building accessible applications."
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 italic">
              I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Reusable InfoCard component
function InfoCard({ icon, title, content }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">
        <div className="p-3 bg-primary-100 dark:bg-dark-300 rounded-lg text-primary-600 dark:text-primary-400">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{content}</p>
      </div>
    </div>
  );
}
