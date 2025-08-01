'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {FiGithub, FiExternalLink, FiTag, FiLoader, FiAward, FiBrain} from 'react-icons/fi';

// Project data
const projects = [
  {
    title: "GharBaar Estate - AI-Powered Real Estate Platform",
    description: "Led development of comprehensive real estate platform with AI-powered features and renovation marketplace. Achieved 98.22% validation accuracy with ResNet50-based deep learning model for renovation predictions.",
    image: "/images/gharbaar-estate.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "YOLOv5", "Flask", "OpenAI", "Maps API", "Computer Vision"],
    github: "https://github.com/abdullah-kz17/gharbaar",
    demo: "https://gharbaar.vercel.app",
    featured: true,
    achievements: ["98.22% validation accuracy", "AI-powered features", "Team leadership"]
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description: "Built complete online shopping platform with secure user authentication and authorization. Implemented comprehensive product management, shopping cart, and secure checkout system with admin panel.",
    image: "/images/e-commerce-app.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    github: "https://github.com/abdullah-kz17/MERN-Ecommerce-App",
    demo: "https://mern-ecommerce-app-beta.vercel.app/",
    featured: true,
    achievements: ["Secure checkout", "Admin dashboard", "Inventory management"]
  },
  {
    title: "Brain Tumor Detection System",
    description: "Achieved 93% accuracy with Logistic Regression for brain tumor detection using MRI images. Implemented multiple ML approaches including CNN with TensorFlow/Keras and traditional algorithms.",
    image: "/images/brain-tumor.jpg",
    tags: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "CNN", "Machine Learning"],
    github: "https://github.com/abdullah-kz17/brain-tumor-detection",
    demo: null,
    featured: true,
    achievements: ["93% accuracy", "Multiple ML approaches", "CNN implementation"]
  },
  {
    title: "Task Management Application",
    description: "A full-stack task management app built with React.js frontend and Node.js/Express backend. Features include user authentication, task creation, filtering, and progress tracking.",
    image: "/images/task-management-app.png",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    github: "https://github.com/abdullah-kz17/MERN-Task-Management-App",
    demo: "https://mern-task-management-app.vercel.app/",
    featured: false,
    achievements: ["User authentication", "CRUD operations", "Task filtering"]
  },
  {
    title: "Campus Lost & Found Portal",
    description: "Developed campus-wide MERN stack platform for efficient lost item reporting and claiming. Implemented real-time email notifications using Nodemailer and advanced filtering system.",
    image: "/images/lostAndFound.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
    github: "https://github.com/abdullah-kz17/TechVerse-UMT",
    demo: "https://tech-verse-umt.vercel.app/",
    featured: false,
    achievements: ["4th position hackathon", "Real-time notifications", "Admin dashboard"]
  },
];

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div 
      className="card overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <div className="relative aspect-video w-full bg-gray-200 dark:bg-dark-300 overflow-hidden">
        {project.image ? (
            <div
                className="absolute inset-0 bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'contain' }}
            />
        ) : (<div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 flex flex-col items-center justify-center">
              <FiLoader className="animate-spin text-4xl text-primary-700 dark:text-primary-300 mb-2" />
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">In Progress</span>
            </div>
        )}

        {project.featured && (
            <div className="absolute top-0 right-0 bg-gradient-to-l from-primary-600 to-secondary-600 text-white px-3 py-1 text-sm font-medium">
              Featured
            </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-dark-300 text-primary-800 dark:text-primary-300"
            >
              <FiTag className="mr-1 w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {project.achievements && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FiAward className="w-4 h-4 mr-2 text-primary-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Achievements</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.achievements.map((achievement, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 dark:bg-dark-300 text-secondary-800 dark:text-secondary-300"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex space-x-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="section-container" ref={ref}>
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've used, 
          from full-stack development to AI/ML implementations.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="https://github.com/abdullah-kz17" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <FiGithub className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}