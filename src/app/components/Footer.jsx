'use client';

import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white dark:bg-gradient-to-r dark:from-primary-500 dark:to-secondary-500 pt-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Abdullah Khan</h3>
          <p className="text-lg text-gray-200">
            A passionate MERN Stack Developer with experience in building interactive web applications.
          </p>
        </div>

        {/* Social Links Section */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Connect With Me</h4>
          <div className="flex space-x-6 text-2xl">
            <a href="https://www.linkedin.com/in/abdullah-khan-6ba998280" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400">
              <FiLinkedin />
            </a>
            <a href="https://github.com/abdullah-kz17" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400">
              <FiGithub />
            </a>
            <a href="mailto:abd248778@gmail.com" className="text-white hover:text-primary-400">
              <FiMail />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Get in Touch</h4>
          <p className="text-gray-200">Feel free to reach out for collaborations or just to chat.</p>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 border-t border-gray-300 dark:border-dark-300 pt-6">
        <p className="text-gray-200">© {year} Abdullah Khan. All rights reserved.</p>
      </div>
    </footer>
  );
}
