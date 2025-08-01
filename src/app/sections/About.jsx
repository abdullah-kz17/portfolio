'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiUser, FiCode, FiTarget, FiBookOpen, FiAward } from 'react-icons/fi';
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
              Computer Science Graduate with Full-Stack & AI/ML Expertise
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer with 1+ years of hands-on experience in full-stack development and machine learning. 
              My journey in web development has equipped me with strong problem-solving skills and attention to detail, 
              while my AI/ML projects demonstrate my ability to work with cutting-edge technologies.
            </p>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-dark-300 p-6 rounded-lg shadow-xl">
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-200 dark:to-dark-300 flex items-center justify-center">
                  <Image
                    src="/images/profile.png" 
                    alt="Abdullah Khan" 
                    width={320} 
                    height={320} 
                    className="rounded-full" 
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-2">Abdullah Khan</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Full-Stack Developer & AI/ML Engineer
                  </p>
                  <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <FiBookOpen className="w-4 h-4 mr-2 text-primary-500" />
                    <span>CGPA: 3.23/4.0</span>
                  </div>
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
                title="Educational Background"
                content="Currently pursuing Bachelor's degree in Computer Science at University of Management and Technology, Lahore with a strong academic record."
              />
              <InfoCard
                icon={<FiCode className="w-5 h-5" />}
                title="Technical Expertise"
                content="Proficient in MERN stack development with expertise in React.js, Node.js, and modern JavaScript frameworks. Experienced in AI/ML with Python, TensorFlow, and computer vision."
              />
              <InfoCard
                icon={<FiTarget className="w-5 h-5" />}
                title="Career Goals"
                content="Seeking a full-time Software Engineer role to leverage technical expertise in MERN stack and AI-driven applications while contributing to innovative development teams."
              />
              <InfoCard
                icon={<FiAward className="w-5 h-5" />}
                title="Achievements"
                content="Led cross-functional teams, built scalable web applications, and implemented AI/ML solutions including computer vision models with high accuracy rates."
              />
            </div>

            <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 p-6 rounded-lg border border-primary-500/20">
              <h4 className="font-bold text-lg mb-3 gradient-text">Languages</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary-100 dark:bg-dark-300 text-primary-800 dark:text-primary-300 rounded-full text-sm">
                  English (Proficient)
                </span>
                <span className="px-3 py-1 bg-secondary-100 dark:bg-dark-300 text-secondary-800 dark:text-secondary-300 rounded-full text-sm">
                  Urdu (Native)
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-gray-300 rounded-full text-sm">
                  Punjabi (Intermediate)
                </span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 italic mt-6">
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
